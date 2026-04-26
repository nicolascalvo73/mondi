# Blog con Sanity CMS - Guía de Setup

Este documento explica cómo configurar y usar el blog implementado con Sanity v3 en el proyecto Mondi Studio.

## 📦 Dependencias Instaladas

```bash
npm install next-sanity@^9 @sanity/image-url @portabletext/react
npm install --save-dev @sanity/types
```

## 📁 Archivos Creados

### Configuración de Sanity
- `src/sanity/client.ts` - Cliente de Sanity configurado
- `src/sanity/schemas/post.ts` - Schema del modelo Post
- `src/sanity/queries.ts` - Queries GROQ para obtener posts
- `src/sanity/types.ts` - Interfaces TypeScript

### Páginas del Blog
- `src/app/blog/page.tsx` - Listado de artículos
- `src/app/blog/[slug]/page.tsx` - Detalle de artículo

### Componentes
- `src/components/blog/PostCard.tsx` - Card de preview del post
- `src/components/blog/PostBody.tsx` - Renderizado de Portable Text

### Configuración
- `next.config.mjs` - Agregado dominio de Sanity para imágenes
- `.env.local.example` - Variables de entorno necesarias
- `messages/es.json`, `messages/pt.json`, `messages/en.json` - Traducciones del link "Blog"
- `src/components/layout/Navbar.tsx` - Agregado link al blog

## 🚀 Configuración Inicial

### 1. Crear Proyecto en Sanity

```bash
# Instalar Sanity CLI globalmente
npm install -g @sanity/cli

# Crear nuevo proyecto
sanity init

# Seguir el wizard:
# - Crear nuevo proyecto
# - Nombre: "Mondi Studio Blog"
# - Dataset: production
# - Output path: ./sanity-studio (o la carpeta que prefieras)
```

### 2. Configurar el Studio de Sanity

Crear el archivo `sanity-studio/sanity.config.ts`:

```typescript
import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import post from '../src/sanity/schemas/post'

export default defineConfig({
  name: 'default',
  title: 'Mondi Studio Blog',
  projectId: 'TU_PROJECT_ID', // Obtener de sanity.io
  dataset: 'production',
  plugins: [deskTool(), visionTool()],
  schema: {
    types: [post],
  },
})
```

### 3. Variables de Entorno

Copiar `.env.local.example` a `.env.local` y completar:

```bash
# Sanity CMS
NEXT_PUBLIC_SANITY_PROJECT_ID=tu_project_id_aqui
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=tu_token_aqui  # Opcional, solo si necesitas escribir desde Next.js
```

Para obtener el `projectId`:
1. Ir a https://www.sanity.io/manage
2. Seleccionar tu proyecto
3. Copiar el Project ID

### 4. Iniciar el Studio de Sanity

```bash
cd sanity-studio
npm install
npm run dev
```

El studio estará disponible en `http://localhost:3333`

### 5. Crear Contenido

1. Acceder al Studio en `http://localhost:3333`
2. Hacer login con tu cuenta de Sanity
3. Crear un nuevo artículo:
   - Título
   - Slug (se genera automáticamente del título)
   - Extracto (máximo 200 caracteres)
   - Imagen principal con texto alternativo
   - Fecha de publicación
   - Autor
   - Categorías (tags)
   - Contenido (Portable Text con H2, H3, listas, imágenes, etc.)

### 6. Publicar Contenido

Hacer click en "Publish" en el Studio para que el contenido esté disponible en la API.

## 🎨 Características del Blog

### Página de Listado (`/blog`)
- Grid responsive: 3 columnas desktop, 2 tablet, 1 mobile
- Cards con imagen, categorías, título, extracto y fecha
- Estado vacío con mensaje "Próximamente"
- Metadata SEO optimizado

### Página de Detalle (`/blog/[slug]`)
- Breadcrumbs: Inicio → Blog → Título
- Categorías como chips
- Imagen principal responsive (16:9)
- Contenido renderizado con componentes MUI
- Botón "Volver al blog"
- generateStaticParams para static export

### Componentes Portable Text
- **H2, H3**: Tipografía Epilogue
- **Párrafos**: Typography body1
- **Blockquotes**: Borde izquierdo naranja (#E8622A)
- **Links**: Color primario con underline on hover
- **Listas**: Bullets y numeradas con spacing correcto
- **Imágenes**: Responsive con borderRadius 0.5rem

## 📱 Responsive Design

Todas las dimensiones en **rem** (base 16px):
- Spacing mínimo: 0.0625rem
- Padding de secciones: 6rem (mobile) / 5rem (detalle)
- Border radius cards: 1rem
- Border radius imágenes: 0.5rem

## 🌐 Internacionalización

El link "Blog" en el Navbar está traducido en 3 idiomas:
- 🇦🇷 Español: "Blog"
- 🇧🇷 Portugués: "Blog"
- 🇺🇸 Inglés: "Blog"

## 🚢 Deploy en Cloudflare Pages

El blog funciona con `output: 'export'` (static export):

1. **Build**: `npm run build`
2. **Output**: Carpeta `out/`
3. **generateStaticParams**: Genera rutas estáticas para cada post en build time

### Variables de Entorno en Cloudflare Pages

Agregar en el dashboard de Cloudflare Pages:
```
NEXT_PUBLIC_SANITY_PROJECT_ID=tu_project_id
NEXT_PUBLIC_SANITY_DATASET=production
```

## 📝 Crear Nuevo Artículo.

1. Acceder al Studio de Sanity
2. Click en "Create" → "Artículo"
3. Completar todos los campos
4. Agregar contenido con el editor Portable Text
5. Click en "Publish"
6. Hacer rebuild del sitio Next.js para que aparezca

## 🔧 Mantenimiento

### Actualizar Schema
Si modificas `src/sanity/schemas/post.ts`:
1. Reiniciar el Studio de Sanity
2. Los cambios se aplicarán automáticamente

### Agregar Nuevos Tipos de Contenido
Editar el schema en Portable Text para agregar:
- Nuevos estilos de bloques
- Componentes personalizados
- Tipos de anotaciones

### Optimización de Imágenes
Las imágenes de Sanity se sirven desde `cdn.sanity.io` con optimización automática.

## 🎯 Próximos Pasos

1. **Deploy del Studio**: Hacer deploy del Studio de Sanity para acceso remoto
2. **Webhooks**: Configurar webhooks para rebuild automático en Cloudflare Pages
3. **Categorías**: Crear página de filtrado por categoría
4. **Búsqueda**: Agregar búsqueda de artículos
5. **Related Posts**: Mostrar posts relacionados en el detalle

## 📚 Recursos

- [Documentación de Sanity](https://www.sanity.io/docs)
- [Portable Text](https://portabletext.org/)
- [Next.js con Sanity](https://www.sanity.io/plugins/next-sanity)
- [GROQ Query Language](https://www.sanity.io/docs/groq)

## ⚠️ Notas Importantes

- El blog usa **static export**, por lo que necesitas rebuild para ver nuevos posts
- Las imágenes requieren `unoptimized: true` en Next.js config
- El Studio de Sanity es una aplicación separada del sitio Next.js
- Los posts se obtienen en build time, no en runtime
