import { content, type Lang } from './content'
import Header from './Header'
import ContactForm from './ContactForm'
import Motion from './Motion'

const ORIGIN = 'https://www.mondistudio.com.ar'

const arts = [
  <svg key="a" viewBox="0 0 160 120" fill="currentColor" aria-hidden="true">
    <path d="M20 62V20a42 42 0 0 1 42 42z" />
    <path d="M68 62V20a42 42 0 0 1 42 42z" />
    <path d="M68 106V68a38 38 0 0 1 38 38z" />
  </svg>,
  <svg key="b" viewBox="0 0 160 120" fill="none" stroke="currentColor" strokeWidth="8" aria-hidden="true">
    <path d="M20 100a60 60 0 0 1 120 0z" fill="currentColor" stroke="none" />
    <path d="M44 100a36 36 0 0 1 72 0" stroke="var(--surface)" strokeOpacity=".7" />
    <path d="M62 100a18 18 0 0 1 36 0" stroke="var(--surface)" strokeOpacity=".7" />
  </svg>,
  <svg key="c" viewBox="0 0 160 120" fill="none" stroke="currentColor" strokeWidth="16" strokeLinecap="round" aria-hidden="true">
    <path d="M44 20h50a20 20 0 0 1 0 40H66a20 20 0 0 0 0 40h50" />
  </svg>,
  <svg key="d" viewBox="0 0 160 120" fill="currentColor" aria-hidden="true">
    <path d="M30 50l30-30 30 30v22L60 42 30 72z" />
    <path d="M70 90l30-30 30 30v22l-30-30-30 30z" />
  </svg>,
]


export default function Home({ lang }: { lang: Lang }) {
  const c = content[lang]
  const url = lang === 'es' ? ORIGIN + '/' : ORIGIN + '/en/'

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': ORIGIN + '/#organization',
    name: 'Mondi Studio',
    url,
    logo: ORIGIN + '/icon-512.png',
    image: ORIGIN + '/og-image.png',
    description: c.meta.description,
    email: 'hola@mondistudio.com.ar',
    inLanguage: lang,
    address: { '@type': 'PostalAddress', addressLocality: 'Córdoba', addressRegion: 'Córdoba', addressCountry: 'AR' },
    areaServed: 'Worldwide',
    serviceType: c.services.items.map((s) => s.title),
    sameAs: ['https://instagram.com/mondistudio'],
  }

  return (
    <>
      <a className="skip-link" href="#main-content">
        {c.skip}
      </a>

      <div className="preloader" data-preloader aria-hidden="true">
        <div className="preloader__word">
          {'MONDI STUDIO'.split('').map((ch, i) =>
            ch === ' ' ? (
              <span key={i} className="preloader__space" />
            ) : (
              <span key={i} className="preloader__mask">
                <span className="preloader__char">{ch}</span>
              </span>
            ),
          )}
        </div>
      </div>

      <div className="cursor-ring" data-cursor-ring aria-hidden="true" />
      <div className="cursor-dot" data-cursor-dot aria-hidden="true" />

      <Header lang={lang} c={c} />

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main id="main-content">
            <section id="top" className="hero" data-curtain>
              <div className="hero__top mono" data-hero="fade">
                <span>{c.hero.tag}</span>
                <span>{c.hero.year}</span>
              </div>
              <h1 className="hero__title">
                <span className="hero__lead" data-hero="words">
                  {c.hero.lead}
                </span>
                <span className="hero__big" data-hero="chars">
                  {c.hero.big}
                </span>
              </h1>
              <div className="hero__bottom">
                <p className="hero__text" data-hero="fade">
                  {c.hero.text}
                </p>
                <div className="hero__cta" data-hero="fade">
                  <a href="#cases" className="btn btn--solid">
                    {c.hero.ctaCases}
                  </a>
                  <a href="#contact" className="btn btn--ghost">
                    {c.hero.ctaTalk}
                  </a>
                </div>
              </div>
            </section>

            <section className="about">
              <div className="about__inner">
              <div className="mono" data-fade>
                {c.about.tag}
              </div>
              <p className="about__text" data-lines-scrub>
                {c.about.strong} <span className="about__soft">{c.about.soft}</span>
              </p>
              <ul className="about__stack" data-fade>
                {c.about.stack.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
              </div>
            </section>

            <section id="services" className="services">
              <div className="section-head">
                <h2 className="section-title" data-words>
                  <span>{c.services.title[0]}</span>
                  <span>{c.services.title[1]}</span>
                </h2>
                <span className="mono" data-fade>
                  {c.services.tag}
                </span>
              </div>
              <div className="services__list" data-services>
                {c.services.items.map((s, i) => (
                  <a key={s.title} href="#contact" className="service" data-service data-cursor="link" style={{ ["--i" as string]: i }}>
                    <div className="service__head">
                      <span className="mono">S/ 00{i + 1}</span>
                      <span className="service__arrow" aria-hidden="true">
                        ↗
                      </span>
                    </div>
                    <div className="service__body">
                      <h3 className="service__title">{s.title}</h3>
                      <p className="service__text">{s.text}</p>
                    </div>
                    <div className="service__art">{arts[i]}</div>
                  </a>
                ))}
              </div>
            </section>

            <section id="cases" className="cases">
              <div className="section-head">
                <h2 className="section-title" data-words>
                  <span>{c.cases.title[0]}</span>
                  <span>{c.cases.title[1]}</span>
                </h2>
                <span className="mono" data-fade>
                  {c.cases.tag}
                </span>
              </div>
              <ul className="cases__list" data-cases>
                {c.cases.items.map((k, i) => (
                  <li key={k.slug} style={{ ["--i" as string]: i }}>
                    <a
                      className={`case case--${k.slug}`}
                      href={`https://labs.mondistudio.com.ar/${k.slug}/`}
                      target="_blank"
                      rel="noopener"
                      data-case
                      data-cursor="big"
                    >
                      <div className="case__info">
                        <div className="case__top">
                          <span className="mono">0{i + 1}</span>
                          <span className="case__go" aria-hidden="true">
                            ↗
                          </span>
                        </div>
                        <div>
                          <div className="case__name">{k.name}</div>
                          <div className="case__meta">{k.meta}</div>
                        </div>
                      </div>
                      <div className="case__thumb" data-clip>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={`/casos/${k.slug}.webp`} alt={k.alt} width={960} height={600} loading="lazy" data-parallax />
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </section>

            <section id="process" className="process">
              <div className="process__wrap">
                <div className="process__head" data-process-head>
                  <h2 className="section-title" data-words>
                    <span>{c.process.title[0]}</span>
                    <span>{c.process.title[1]}</span>
                  </h2>
                  <span className="mono" data-fade>
                    {c.process.tag}
                  </span>
                </div>
                <ol className="process__grid" data-process-list>
                  {c.process.steps.map((s, i) => (
                    <li key={s.title} className="step" data-step data-fade style={{ ["--i" as string]: i }}>
                      <span className="step__num">0{i + 1}</span>
                      <div>
                        <h3 className="step__title">{s.title}</h3>
                        <p className="step__text">{s.text}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </section>

            <section id="contact" className="contact">
              <div className="contact__wrap">
                <div className="contact__intro">
                  <div className="mono" data-fade>
                    {c.contact.tag}
                  </div>
                  <h2 className="contact__title display" data-words>
                    <span>{c.contact.title[0]}</span>
                    <span>{c.contact.title[1]}</span>
                    <span className="accent">{c.contact.title[2]}</span>
                  </h2>
                  <p className="contact__text" data-fade>
                    {c.contact.text}
                  </p>
                </div>
                <ContactForm c={c.contact.form} />
              </div>
            </section>
          </main>

          <footer className="site-footer">
            <div className="site-footer__brand" data-words>
              {c.footer.brand}
            </div>
            <div className="site-footer__bar">
              <span>{c.footer.rights}</span>
              <nav className="site-footer__links" aria-label="Footer">
                <a href="#cases">{c.footer.cases}</a>
                <a href="#services">{c.footer.services}</a>
                <a href="https://labs.mondistudio.com.ar/" target="_blank" rel="noopener">
                  {c.footer.labs}
                </a>
                <a href="/blog/">{c.footer.blog}</a>
                <a href="#top">{c.ui.backTop} ↑</a>
              </nav>
            </div>
          </footer>
        </div>
      </div>

      <Motion />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  )
}
