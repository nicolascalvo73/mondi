# Mondi Studio

Sitio web oficial del estudio de diseño y desarrollo web Mondi Studio.

## 🚀 Stack Tecnológico

- **Next.js 14** con App Router
- **TypeScript** (strict mode)
- **Material UI v5** con `@mui/material-nextjs`
- **Web3Forms** para formulario de contacto
- **Cloudflare Pages** para deploy (static export)

## 📦 Instalación

```bash
# Instalar dependencias
npm install

# Copiar variables de entorno
cp .env.local.example .env.local
```

## ⚙️ Configuración

### 1. Variables de entorno

Editá `.env.local` con tus datos:

```env
# Tu número de WhatsApp (con código de país, sin espacios ni guiones)
NEXT_PUBLIC_WHATSAPP_NUMBER=5493511234567

# Tu email de contacto
NEXT_PUBLIC_EMAIL=hola@mondistudio.com.ar

# Access key de Web3Forms (ver paso 2)
NEXT_PUBLIC_WEB3FORMS_KEY=tu-access-key-aqui

# URL de tu sitio
NEXT_PUBLIC_SITE_URL=https://mondistudio.com.ar
```

### 2. Configurar Web3Forms

1. Andá a [web3forms.com](https://web3forms.com)
2. Registrate gratis con tu email
3. Copiá tu **Access Key**
4. Pegala en `.env.local` como `NEXT_PUBLIC_WEB3FORMS_KEY`

## 🛠️ Desarrollo

```bash
# Iniciar servidor de desarrollo
npm run dev
```

Abrí [http://localhost:3000](http://localhost:3000) en tu navegador.

## 🏗️ Build

```bash
# Build estándar de Next.js
npm run build

# Build para Cloudflare Pages
npm run pages:build
```

## 🌐 Deploy en Cloudflare Pages

### Opción 1: Deploy automático desde GitHub

1. Pusheá tu código a GitHub
2. Andá a [dash.cloudflare.com](https://dash.cloudflare.com)
3. Pages → Create a project → Connect to Git
4. Seleccioná tu repositorio
5. Configurá el build:
   - **Framework preset**: Next.js
   - **Build command**: `npm run pages:build`
   - **Build output directory**: `.vercel/output/static`
6. Agregá las variables de entorno en Settings → Environment variables
7. Deploy

### Opción 2: Deploy manual con Wrangler

```bash
# Instalar Wrangler CLI
npm install -g wrangler

# Login en Cloudflare
wrangler login

# Build y deploy
npm run pages:build
wrangler pages deploy .vercel/output/static --project-name=mondi-studio
```

### Configurar dominio personalizado

1. En Cloudflare Pages → tu proyecto → Custom domains
2. Agregá `mondistudio.com.ar`
3. Seguí las instrucciones para configurar los DNS

Si tu dominio ya está en Cloudflare, se configura automáticamente.

## 📁 Estructura del proyecto

```
/
├── src/
│   ├── app/              # Next.js App Router
│   ├── components/       # Componentes React
│   │   ├── layout/       # Navbar, Footer, WhatsApp
│   │   └── sections/     # Secciones de la página
│   └── lib/
│       └── theme.ts      # Tema de Material UI
├── public/               # Assets estáticos
├── package.json
├── tsconfig.json
├── next.config.ts
└── .env.local.example
```

## 🎨 Sistema de diseño

- **Dimensiones**: Todo en `rem` (base: 1rem = 16px)
- **Tipografía**: Epilogue (headlines) + Plus Jakarta Sans (body)
- **Paleta**: `#E8622A` (primary), `#fcf9f4` (background)
- **NO Tailwind** — solo MUI `sx` prop

Ver `CONTEXT.md` para más detalles.

## ♿ Accesibilidad

- WCAG 2.1 AA compliant
- Skip link, landmarks semánticos
- Contraste mínimo 4.5:1
- Touch targets 44×44px
- Focus visible en todos los elementos

## 📝 Licencia

© 2023 Mondi Studio. Todos los derechos reservados.

---

**Hecho con ☕ y algo de maullido en Córdoba, Argentina**
