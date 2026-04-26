# Mondi Studio

Sitio web de diseño y desarrollo web Mondi Studio.

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

## 📋 Changelog

### [1.0.2] - 2026-03-18

#### 🎯 Reposicionamiento: De negocio local a estudio nacional

**Estrategia**: Posicionar a Mondi Studio como estudio nacional con base en Córdoba, manteniendo la identidad local como diferencial.

#### 📝 Copy & Traducciones
- **Hero location**: `"Córdoba, Argentina"` → `"Argentina"`
- **Hero subtitle**: Agregado "Trabajamos con profesionales, emprendedores y PyMEs de todo el país"
- **SobreMiSection**: Agregado "Trabajo desde Córdoba pero con clientes en todo el país"
- **SobreMiSection**: Agregado "Sin importar dónde estés en Argentina"
- **Footer tagline**: `"Comunicación directa, sin estructuras de agencia"` → `"Base en Córdoba, clientes en toda Argentina"`

#### 🔍 SEO Nacional
- **Title**: `"Diseño Web en Argentina"` → `"Diseño Web Profesional en Argentina"`
- **Description**: Actualizada de alcance local a nacional
- **Keywords**: Ampliados de 11 a 16 términos
  - Agregados: `agencia web Argentina`, `diseño web Buenos Aires`, `diseño web Rosario`, `web profesional emprendedores Argentina`
- **OpenGraph**: Títulos y descripciones actualizados a alcance nacional
- **Twitter Card**: Descripciones actualizadas

#### 🏗️ JSON-LD Schema Optimizado
- **alternateName**: String → Array `["Mondi Studio Argentina", "Mondi Studio Córdoba", "Diseño web Argentina"]`
- **founder.jobTitle**: `"Software Engineer"` → `"Desarrollador Frontend Senior"`
- **founder.worksFor**: Agregado objeto Organization
- **areaServed**: Ampliado de 5 a 7 ciudades (+ Tucumán, Santa Fe)
- **serviceType**: Ampliado de 6 a 9 servicios (+ Configuración Tienda Nube, Shopify, Desarrollo VTEX)
- **hasOfferCatalog**: Agregada 4ta oferta (Mantenimiento web mensual USD 80)
- **paymentAccepted**: Agregado "Crypto"

#### 🗺️ Sitemap Optimizado
- **URLs**: `blog?slug=${slug}` → `blog/${slug}` (rutas limpias)
- **lastModified**: Estático → Dinámico basado en `publishedAt` de cada post

#### 📱 Blog Metadata Completa
- **Nuevo archivo**: `app/blog/layout.tsx` para metadata (resuelve conflicto con `'use client'`)
- **OpenGraph completo**: En blog y posts individuales con `type: 'article'`, `publishedTime`, `authors`
- **Twitter Cards**: Configuradas en todos los posts
- **Canonical URLs**: En todas las páginas del blog
- **Imágenes dinámicas**: `post.mainImage?.asset?.url || '/og-image.png'`

#### ⚙️ Variables de Entorno
- **Nombre corregido**: `NEXT_PUBLIC_WHATSAPP` → `NEXT_PUBLIC_WHATSAPP_NUMBER`
- **URL corregida**: `https://mondistudio.com.ar` → `https://www.mondistudio.com.ar`
- **Reorganización**: Agrupado por categorías (Site, Sanity, Contacto, Google, Web3Forms)

#### ✅ Identidad de Marca Preservada
- Footer: `"Creado con 🤍 y maullidos 🐱 desde Córdoba, Argentina 🇦🇷"`
- Chip "Hecho en Córdoba" en SobreMiSection
- JSON-LD incluye "Mondi Studio Córdoba" en `alternateName`
- Coordenadas geográficas de Córdoba preservadas
- Testimonios con ubicaciones específicas intactos

---

### [1.0.1] - 2026-03-18

#### 💰 Precios
- **Mantenimiento básico** reducido de USD 80 a **USD 60/mes**
- **Mantenimiento premium** reducido de USD 150 a **USD 120/mes**
- Actualizado en los 3 idiomas (es/en/pt)

#### 🎨 Mejoras de UI
- **Logo de Empretienda** agrandado al 100% del contenedor
- **Logo de PayPal** reducido al 60% para mejor proporción
- **Logo de Mercado Pago** agrandado al 150% para mejor visibilidad
- **Versión centrada** en el footer entre copyright y texto de Córdoba

#### 🧭 Navegación
- **Link al Blog** agregado en navegación del footer

#### 👤 Perfil
- Título actualizado de "Desarrollador Frontend" a **"Software Engineer"** en JSON-LD y sección Sobre Mí

---

### [1.0.0] - 2026-03-18

#### 🎯 SEO & Optimización
- **Metadata completo** con keywords geo-específicos para Córdoba
- **JSON-LD Schema.org** para ProfessionalService y BlogPosting
- **Sitemap dinámico** con rutas del blog desde Sanity CMS
- **Robots.txt** optimizado con bloqueo de bots de IA (GPTBot, ChatGPT-User)
- **OpenGraph y Twitter Cards** para redes sociales
- **Google Search Console** integration preparada
- **Canonical URLs** en todas las páginas
- **Rich Snippets** con catálogo de servicios y precios

#### 🎨 Mejoras de UI/UX
- **Corrección de aspect ratio** en imágenes de logos (Tienda Nube, VTEX)
- **Prop `sizes`** agregado a todas las imágenes con `fill` para mejor performance
- **Versión visible** en el footer (v1.0.0)
- **Título del blog** corregido de azul a negro para mejor legibilidad

#### 🏗️ Arquitectura
- **Next.js 15.1.6** con App Router
- **TypeScript strict mode**
- **Material UI 5** con styled-components
- **Sanity CMS** para gestión de contenido del blog
- **Cloudflare Pages** ready para deploy

#### 📦 Componentes
- Navbar con navegación sticky
- Footer con información de contacto y versión
- Hero Section con CTA optimizado
- Secciones: Servicios, Proceso, Plataformas, Precios, Sobre Mí, Contacto
- Blog con listado y vista de posts individuales
- Sistema de temas (light/dark mode)
- Internacionalización (es/en/pt) con next-intl

#### 🔧 Configuración
- Variables de entorno para Web3Forms, WhatsApp, Email
- Sanity CMS configurado con schemas para posts
- Build optimizado para static export
- Webpack config para compatibilidad con React 19

#### 📱 Accesibilidad
- WCAG 2.1 AA compliant
- Skip links y landmarks semánticos
- Contraste mínimo 4.5:1
- Touch targets 44×44px
- Focus visible en todos los elementos interactivos

#### 🌍 SEO Local
- Geolocalización de Córdoba (-31.4201, -64.1888)
- Keywords: "diseño web Córdoba", "tienda online Córdoba", "VTEX Córdoba"
- Área de servicio: Córdoba + Argentina
- Horarios de atención en schema
- Métodos de pago especificados

---

**Hecho con ☕ y algo de maullido en Córdoba, Argentina**
