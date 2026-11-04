'use client'

import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollSmoother } from 'gsap/ScrollSmoother'
import { SplitText } from 'gsap/SplitText'

/**
 * Movimiento del sitio. Replica la técnica de las referencias (Desiv y Brano):
 * ScrollSmoother (suavizado 1,35), SplitText, cursor de dos piezas, secciones
 * tipo cortina, servicios apilados y fijados, manifiesto que se ilumina por línea.
 */
export default function Motion() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText)
    ScrollTrigger.config({ ignoreMobileResize: true })

    const root = document.documentElement
    const $ = <T extends Element = HTMLElement>(sel: string) => Array.from(document.querySelectorAll<T>(sel))
    const remPx = () => parseFloat(getComputedStyle(root).fontSize) || 16
    const mm = gsap.matchMedia()
    let alive = true

    mm.add(
      {
        motion: '(prefers-reduced-motion: no-preference)',
        fine: '(hover: hover) and (pointer: fine)',
        wide: '(min-width: 56.25em)',
      },
      (ctx) => {
        const { motion, fine, wide } = ctx.conditions as { motion: boolean; fine: boolean; wide: boolean }
        const preloader = $('[data-preloader]')[0]
        if (!motion) {
          root.classList.remove('js')
          preloader?.remove()
          return
        }

        const header = $('[data-header]')[0]
        const cleanups: Array<() => void> = []

        /* ───── Scroll suave (solo con mouse) ───── */
        const smoother = fine
          ? ScrollSmoother.create({
              wrapper: '#smooth-wrapper',
              content: '#smooth-content',
              smooth: 1.35,
              effects: true,
              smoothTouch: false,
            })
          : null

        /* ───── Anclas ───── */
        const onClick = (e: MouseEvent) => {
          const a = (e.target as Element).closest<HTMLAnchorElement>('a[href^="#"]')
          if (!a) return
          const id = a.getAttribute('href')!.slice(1)
          const target = id ? document.getElementById(id) : null
          if (!target) return
          e.preventDefault()
          const offset = id === 'top' ? 0 : header.offsetHeight
          if (smoother) {
            smoother.scrollTo(id === 'top' ? 0 : target, true, `top top+=${offset}`)
          } else {
            window.scrollTo({ top: id === 'top' ? 0 : target.getBoundingClientRect().top + window.scrollY - offset, behavior: 'smooth' })
          }
        }
        document.addEventListener('click', onClick)
        cleanups.push(() => document.removeEventListener('click', onClick))

        /* ───── Cabecera: cambia de color y se oculta al bajar ───── */
        const hero = $('#top')[0]
        ScrollTrigger.create({
          start: 0,
          end: 'max',
          onUpdate: (self) => {
            const y = self.scroll()
            header.classList.toggle('is-scrolled', y > hero.offsetHeight - header.offsetHeight)
            if (self.direction === 1 && y > 240) header.classList.add('is-hidden')
            else if (self.direction === -1) header.classList.remove('is-hidden')
          },
        })

        /* ───── Cursor: anillo de 45 px + punto de 10 px con 0,2 s de retraso ───── */
        if (fine) {
          const ring = $('[data-cursor-ring]')[0]
          const dot = $('[data-cursor-dot]')[0]
          gsap.set([ring, dot], { xPercent: -50, yPercent: -50 })
          gsap.set(ring, { scale: 0 })
          const dx = gsap.quickTo(dot, 'x', { duration: 0.2, ease: 'power3' })
          const dy = gsap.quickTo(dot, 'y', { duration: 0.2, ease: 'power3' })
          const rx = gsap.quickTo(ring, 'x', { duration: 0.12, ease: 'power3' })
          const ry = gsap.quickTo(ring, 'y', { duration: 0.12, ease: 'power3' })
          let shown = false
          const onMove = (e: MouseEvent) => {
            if (!shown) {
              shown = true
              gsap.set([ring, dot], { x: e.clientX, y: e.clientY })
              gsap.to([ring, dot], { opacity: 1, duration: 0.3 })
              root.classList.add('has-cursor')
            }
            dx(e.clientX)
            dy(e.clientY)
            rx(e.clientX)
            ry(e.clientY)
          }
          const onOver = (e: MouseEvent) => {
            const el = (e.target as Element).closest('a,button,label,select,[data-cursor]')
            const field = (e.target as Element).closest('input,textarea')
            if (field) {
              gsap.to(ring, { scale: 0, duration: 0.3, overwrite: 'auto' })
              gsap.to(dot, { scale: 0, duration: 0.3, overwrite: 'auto' })
            } else if (el) {
              const big = el.closest('[data-cursor="big"]')
              gsap.to(ring, { scale: big ? 2.4 : 1, duration: 0.45, ease: 'power3.out', overwrite: 'auto' })
              gsap.to(dot, { scale: 1, duration: 0.3, overwrite: 'auto' })
            } else {
              gsap.to(ring, { scale: 0, duration: 0.35, ease: 'power3.out', overwrite: 'auto' })
              gsap.to(dot, { scale: 1, duration: 0.3, overwrite: 'auto' })
            }
          }
          const onLeave = () => gsap.to([ring, dot], { opacity: 0, duration: 0.2 })
          const onEnter = () => shown && gsap.to([ring, dot], { opacity: 1, duration: 0.2 })
          window.addEventListener('mousemove', onMove)
          document.addEventListener('mouseover', onOver)
          document.documentElement.addEventListener('mouseleave', onLeave)
          document.documentElement.addEventListener('mouseenter', onEnter)
          cleanups.push(() => {
            window.removeEventListener('mousemove', onMove)
            document.removeEventListener('mouseover', onOver)
            document.documentElement.removeEventListener('mouseleave', onLeave)
            document.documentElement.removeEventListener('mouseenter', onEnter)
            root.classList.remove('has-cursor')
            gsap.set([ring, dot], { opacity: 0 })
          })
        }

        /* ───── Todo lo que necesita las tipografías cargadas ───── */
        const build = () => {
          if (!alive) return
          ctx.add(() => {
            /* Secciones tipo cortina: se fijan al llegar al fondo y la siguiente se monta encima */
            if (wide) {
              $('[data-curtain]').forEach((el) => {
                ScrollTrigger.create({
                  trigger: el,
                  start: 'bottom bottom',
                  end: 'bottom top',
                  pin: true,
                  pinSpacing: false,
                })
              })

              /* Tarjetas apiladas (servicios y casos): cada una se fija un escalón más abajo
                 y la que queda tapada se achica y se oscurece */
              const stack = (list: HTMLElement, cards: HTMLElement[], stepRem: number) => {
                const step = remPx() * stepRem
                const topOf = (i: number) => header.offsetHeight + remPx() + i * step
                cards.forEach((card, i) => {
                  ScrollTrigger.create({
                    trigger: card,
                    start: () => `top top+=${topOf(i)}`,
                    endTrigger: list,
                    end: () => `bottom top+=${topOf(i) + card.offsetHeight}`,
                    pin: true,
                    pinSpacing: false,
                    invalidateOnRefresh: true,
                  })
                  const next = cards[i + 1]
                  if (next) {
                    gsap.to(card, {
                      scale: 0.94,
                      filter: 'brightness(0.7)',
                      ease: 'none',
                      scrollTrigger: {
                        trigger: next,
                        start: () => `top top+=${topOf(i + 1) + card.offsetHeight * 0.55}`,
                        end: () => `top top+=${topOf(i + 1)}`,
                        scrub: true,
                        invalidateOnRefresh: true,
                      },
                    })
                  }
                })
              }
              stack($('[data-services]')[0], $('[data-service]'), 4.5)
              stack($('[data-cases]')[0], $('[data-case]'), 4.5)

              /* Proceso: el título queda fijo mientras pasan los pasos */
              const head = $('[data-process-head]')[0]
              const plist = $('[data-process-list]')[0]
              ScrollTrigger.create({
                trigger: head,
                start: () => `top top+=${header.offsetHeight + remPx()}`,
                endTrigger: plist,
                end: () => `bottom top+=${header.offsetHeight + remPx() + head.offsetHeight}`,
                pin: true,
                pinSpacing: false,
                invalidateOnRefresh: true,
              })
            }

            /* Titulares: entrada palabra por palabra */
            $('[data-words]').forEach((el) => {
              SplitText.create(el, {
                type: 'lines,words',
                mask: 'lines',
                autoSplit: true,
                onSplit: (self) =>
                  gsap.from(self.words, {
                    yPercent: 110,
                    duration: 0.9,
                    ease: 'power4.out',
                    stagger: 0.06,
                    scrollTrigger: { trigger: el, start: 'top 85%', once: true },
                  }),
              })
            })

            /* Manifiesto: se fija en pantalla y se ilumina línea por línea con el scroll (scrub 1) */
            $('[data-lines-scrub]').forEach((el) => {
              const section = el.closest('section') as HTMLElement
              SplitText.create(el, {
                type: 'lines',
                autoSplit: true,
                onSplit: (self) =>
                  gsap.fromTo(
                    self.lines,
                    { opacity: 0.18 },
                    {
                      opacity: 1,
                      ease: 'none',
                      stagger: 0.12,
                      scrollTrigger: wide
                        ? { trigger: section, start: 'top top', end: '+=1800', pin: true, scrub: 1, refreshPriority: 10 }
                        : { trigger: el, start: 'top 85%', end: 'bottom center', scrub: 1 },
                    },
                  ),
              })
            })

            /* Parallax de las imágenes de los casos */
            $('[data-parallax]').forEach((img) => {
              gsap.fromTo(
                img,
                { yPercent: -8 },
                {
                  yPercent: 8,
                  ease: 'none',
                  scrollTrigger: { trigger: img.parentElement, start: 'top bottom', end: 'bottom top', scrub: true },
                },
              )
            })

            /* Fade-up general */
            $('[data-fade]').forEach((el) => {
              gsap.from(el, {
                y: 48,
                opacity: 0,
                duration: 0.9,
                ease: 'power3.out',
                scrollTrigger: { trigger: el, start: 'top 85%', once: true },
              })
            })

            /* Imágenes: se destapan con el scroll */
            $('[data-clip]').forEach((el) => {
              gsap.fromTo(
                el,
                { clipPath: 'inset(0 0 100% 0)' },
                {
                  clipPath: 'inset(0 0 0% 0)',
                  ease: 'none',
                  scrollTrigger: { trigger: el, start: 'top 92%', end: 'top 55%', scrub: 1 },
                },
              )
            })

            /* Intro del hero */
            const heroIntro = () => {
              const tl = gsap.timeline()
              const lead = $('[data-hero="words"]')[0]
              const big = $('[data-hero="chars"]')[0]
              const leadSplit = SplitText.create(lead, { type: 'lines,words', mask: 'lines' })
              const bigSplit = SplitText.create(big, { type: 'lines,chars', mask: 'lines' })
              tl.from(leadSplit.words, { yPercent: 110, duration: 0.9, ease: 'power4.out', stagger: 0.07 }, 0)
                .from(bigSplit.chars, { yPercent: 115, duration: 1.1, ease: 'expo.out', stagger: 0.05 }, 0.1)
                .from($('[data-hero="fade"]'), { y: 30, opacity: 0, duration: 0.8, ease: 'power3.out', stagger: 0.12 }, 0.4)
              return tl
            }

            if (preloader && root.classList.contains('js')) {
              const chars = preloader.querySelectorAll('.preloader__char')
              const tl = gsap.timeline({
                onComplete: () => {
                  preloader.style.display = 'none'
                  ScrollTrigger.refresh()
                },
              })
              tl.from(chars, { yPercent: 115, duration: 0.55, ease: 'power3.out', stagger: 0.035 })
                .to(preloader, { yPercent: -100, duration: 0.7, ease: 'power4.inOut' }, '+=0.15')
                .add(heroIntro(), '-=0.4')
            } else {
              preloader?.remove()
              heroIntro()
            }

            ScrollTrigger.refresh()
          })
        }

        const fontsReady = Promise.race([
          document.fonts ? document.fonts.ready : Promise.resolve(),
          new Promise((r) => setTimeout(r, 1500)),
        ])
        fontsReady.then(build)

        return () => {
          cleanups.forEach((fn) => fn())
          smoother?.kill()
          header.classList.remove('is-scrolled', 'is-hidden')
        }
      },
    )

    return () => {
      alive = false
      mm.revert()
    }
  }, [])

  return null
}
