# Mondí Studio — Project Context

Estudio de diseño web unipersonal. Córdoba, Argentina.

## Stack

- **Framework**: Next.js 14 App Router
- **Lenguaje**: TypeScript strict
- **UI Library**: Material UI v5
- **Deploy**: Cloudflare Pages (static export)
- **Formulario**: Web3Forms (sin backend propio)

## Sistema de dimensiones

**Base**: `1rem = 16px`  
**Unidad mínima**: `0.0625rem` (equivale a 1px)

**NUNCA usar `px` en dimensiones, espaciado o tipografía.**

### Tabla de conversión

```
1px  = 0.0625rem    20px = 1.25rem     64px = 4rem
2px  = 0.125rem     24px = 1.5rem      80px = 5rem
4px  = 0.25rem      28px = 1.75rem     96px = 6rem
6px  = 0.375rem     32px = 2rem        128px = 8rem
8px  = 0.5rem       36px = 2.25rem     160px = 10rem
10px = 0.625rem     40px = 2.5rem
12px = 0.75rem      44px = 2.75rem
14px = 0.875rem     48px = 3rem
16px = 1rem         56px = 3.5rem
18px = 1.125rem
```

Para valores no listados: `px / 16 = rem`

## Tipografía

- **Headlines**: Epilogue (`var(--font-epilogue)`) — bold + italic editorial
- **Body/UI**: Plus Jakarta Sans (`var(--font-jakarta)`)
- **Precios/tags**: JetBrains Mono (`var(--font-mono)`)

## Paleta de colores

- **Background**: `#fcf9f4`
- **Primary (acento)**: `#E8622A`
- **Primary dark**: `#a43700`
- **Secondary**: `#4d635a`
- **Texto**: `#1c1c19`
- **Surface containers**: `#f0ede9` / `#f6f3ee` / `#e5e2dd`
- **Inverse surface** (sección oscura): `#31302d`

## Inspiración de diseño

- Bento grid en servicios
- Números gigantes decorativos en proceso
- Sección contacto dark con inputs `standard` (solo border-bottom)
- Grain overlay sutil en body
- Composición asimétrica en hero

## Restricciones

- **NO Tailwind** — solo MUI `sx` prop y `styled()`
- Static export — sin API Routes ni SSR
- Formulario via Web3Forms
- WCAG 2.1 AA obligatoria
- Copy en español rioplatense (vos/te, nunca usted)
- Todos los valores en rem — ver tabla de conversión

## Estructura de carpetas

```
/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── sitemap.ts
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── WhatsAppButton.tsx
│   │   └── sections/
│   │       ├── HeroSection.tsx
│   │       ├── ServiciosSection.tsx
│   │       ├── ProcesoSection.tsx
│   │       ├── PlataformasSection.tsx
│   │       ├── PreciosSection.tsx
│   │       ├── TestimoniosSection.tsx
│   │       ├── SobreMiSection.tsx
│   │       └── ContactoSection.tsx
│   └── lib/
│       └── theme.ts
├── public/
├── package.json
├── tsconfig.json
├── next.config.ts
└── .env.local.example
```

## Comandos

```bash
# Desarrollo
npm run dev

# Build para producción
npm run build

# Build para Cloudflare Pages
npm run pages:build

# Deploy a Cloudflare Pages
npm run pages:deploy
```

## Variables de entorno

Ver `.env.local.example` para configurar:

- WhatsApp number
- Email de contacto
- Web3Forms access key
- Site URL

## Accesibilidad

- Skip link como primer elemento
- Un solo `<h1>` por página
- Landmarks semánticos
- Contraste mínimo 4.5:1
- Focus visible en todos los elementos interactivos
- Touch targets mínimo 44×44px en mobile
- Labels explícitos en formularios
