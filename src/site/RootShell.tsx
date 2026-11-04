import type { ReactNode } from 'react'
import './site.css'
import { fontVars } from './fonts'
import type { Lang } from './content'

// Se ejecuta antes del primer pintado: tema guardado (por defecto oscuro) y
// bandera "js" para que el preloader solo exista si hay JavaScript y no se pidió menos movimiento.
const bootScript = `(function(){try{var d=document.documentElement;var t=null;try{t=localStorage.getItem('mondi-theme')}catch(e){}
if(t!=='light'&&t!=='dark'){t='dark'}d.setAttribute('data-theme',t);
if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches){d.classList.add('js')}}catch(e){}})();`

export default function RootShell({ lang, children }: { lang: Lang; children: ReactNode }) {
  return (
    <html lang={lang} className={fontVars} data-theme="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: bootScript }} />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  )
}
