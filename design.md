# Mondi Studio — Design System

Referencia canónica del sistema de diseño. Toda decisión visual debe tener su origen aquí. Si el código no coincide con este documento, el código está mal.

---

## Stack de estilos

- **UI Library**: Material UI v5
- **Estilo**: exclusivamente `sx` prop y `styled()` de MUI
- **Prohibido**: Tailwind, `px` para dimensiones/espaciado/tipografía (excepción: el `fontSize: '16px'` del `:root` en `CssBaseline`), CSS modules

---

## Sistema de dimensiones

Base: `1rem = 16px`. Toda medida de layout, spacing y tipografía va en `rem`.

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

**Spacing MUI**: `theme.spacing(n) = n × 0.5rem`. Ejemplos: `spacing(2) = 1rem`, `spacing(4) = 2rem`, `spacing(8) = 4rem`.

---

## Paleta de colores

### Colores base (modo claro)

| Token                  | Hex        | Uso                                     |
|------------------------|------------|-----------------------------------------|
| `background.default`   | `#fcf9f4`  | Fondo general de página                 |
| `background.paper`     | `#ffffff`  | Superficies elevadas (cards, navbar bg) |
| `primary.main`         | `#E8622A`  | Acento, CTAs, íconos activos            |
| `primary.dark`         | `#a43700`  | Hover de primary                        |
| `primary.contrastText` | `#ffffff`  | Texto sobre fondo primary               |
| `secondary.main`       | `#4d635a`  | Acento secundario (verde oscuro)        |
| `secondary.contrastText` | `#ffffff` | Texto sobre fondo secondary            |
| `text.primary`         | `#1c1c19`  | Texto principal                         |
| `text.secondary`       | `#594139`  | Texto secundario / subtítulos           |

### Superficies de contenedor

| Nombre           | Hex        | Uso                                          |
|------------------|------------|----------------------------------------------|
| Surface 1        | `#f0ede9`  | Mantenimiento paper, fondo de íconos de logos |
| Surface 2        | `#f6f3ee`  | Fondo de secciones alternativas (Servicios, Testimonios) |
| Surface 3        | `#e5e2dd`  | Card VTEX en Servicios                       |
| Surface verde    | `#cfe8dc`  | Chips de plataformas, valores, ecommerce     |
| Surface verde texto | `#354b43` | Texto sobre surface verde                  |
| Inverse surface  | `#31302d`  | Sección Contacto (dark panel)                |
| Proceso bg       | `#2D4A3E`  | Sección Proceso (fijo, sin dark mode)        |

### Colores especiales hardcodeados

| Uso                          | Hex                        |
|------------------------------|----------------------------|
| Borde de cards               | `rgba(224, 191, 180, 0.25)` |
| Borde hover de cards         | `rgba(232, 98, 42, 0.3)`   |
| Borde de Dividers y footer   | `rgba(224, 191, 180, 0.15)` |
| Shadow del botón primary     | `rgba(232, 98, 42, 0.32)`  |
| Focus outline                | `#E8622A`                  |
| Texto en inverse surface     | `#f3f0eb`                  |
| Texto secundario en inverse  | `rgba(243, 240, 235, 0.7)` |
| Highlight de contact title   | `#ffb59a`                  |
| Chips de desarrollo custom   | `#e0bfb4` / `#594139`      |

### Modo oscuro

El tema se instancia con `getTheme('light')` por defecto. El modo oscuro se activa mediante `ThemeContext`. Cambios clave en dark mode:

| Token              | Dark mode                  |
|--------------------|----------------------------|
| `background.default` | `#1c1c19`                |
| `background.paper`   | `#2a2a27`                |
| `text.primary`       | `#f3f0eb`                |
| `text.secondary`     | `#c4b5ae`                |
| Surface 1/2          | `#2a2a27`                |
| Surface verde        | `#354b43` / texto `#cfe8dc` |
| Section alternativa  | `#1a1a17`                |

Cuando un color depende del modo, usar siempre el callback:
```tsx
backgroundColor: (theme) =>
  theme.palette.mode === 'light' ? '#cfe8dc' : '#354b43'
```

---

## Tipografía

| Rol               | Fuente              | Variable CSS              | Pesos               |
|-------------------|---------------------|---------------------------|---------------------|
| Headlines (h1–h4) | Unbounded           | `var(--font-unbounded)`   | 400, 700, 900       |
| Body / UI         | Inter               | `var(--font-inter)`       | 400, 500, 600, 700  |
| Precios / tags    | JetBrains Mono      | `var(--font-mono)`        | 400, 700            |

### Escala tipográfica (desde `theme.ts`)

| Variante  | Fuente     | Tamaño                              | Weight | Line-height | Notas                    |
|-----------|------------|-------------------------------------|--------|-------------|--------------------------|
| h1        | Unbounded  | `clamp(1.875rem, 4vw, 3.25rem)`     | 900    | 1.05        | letter-spacing -0.03em   |
| h2        | Unbounded  | `clamp(1.375rem, 3vw, 2.375rem)`    | 700    | 1.1         | letter-spacing -0.02em   |
| h3        | Unbounded  | `clamp(1.0625rem, 1.5vw, 1.625rem)` | 700    | 1.2         | letter-spacing -0.01em   |
| h4        | Unbounded  | `1.0625rem`                         | 700    | —           | letter-spacing -0.01em   |
| body1     | Inter      | `1.0625rem`                         | 400    | 1.65        |                          |
| body2     | Inter      | `0.9375rem`                         | 400    | 1.6         |                          |
| caption   | Inter      | `0.75rem`                           | 700    | —           | uppercase, letter-spacing 0.08em |

Los `<em>` decorativos dentro de títulos usan **solo `color: 'primary.main'`** (sin italic — Unbounded no tiene italic nativo).

---

## Componentes globales (theme overrides)

### Button

- `textTransform: 'none'`
- Fuente: Jakarta, weight 700, size `1rem`
- `borderRadius: '9999rem'` (pill)
- Padding: `0.75rem 2rem`
- Hover contained: `scale(1.04)`, `boxShadow: '0 0.375rem 1.25rem rgba(232,98,42,0.32)'`
- Outlined secondary: borde `#E8E2DA`, hover bg `#f0ede9`

### Card

- `borderRadius: '1rem'`
- `border: '0.0625rem solid rgba(224,191,180,0.25)'`
- `boxShadow: 'none'`
- Hover: `borderColor: rgba(232,98,42,0.3)`, `translateY(-0.125rem)`

### TextField

- `variant: 'standard'` por defecto (solo border-bottom)
- Underline before: `rgba(255,255,255,0.2)`
- Underline after (focus): `#E8622A`
- En sección Contacto (fondo oscuro): label y texto en `#f3f0eb`, overrides inline

### Chip

- `borderRadius: '9999rem'`
- Weight 700, size `0.75rem`, letter-spacing 0.05em
- Height `1.75rem`

### Navbar (AppBar)

- `position: 'sticky'`
- Altura: `5rem`
- Fondo translúcido + `backdropFilter: 'blur(1.5rem)'`
- Light: `rgba(252,249,244,0.8)` | Dark: `rgba(28,28,25,0.8)`
- Borde inferior: `0.0625rem solid rgba(224,191,180,0.15)`
- `boxShadow: 'none'`

---

## Layout y estructura de secciones

Todas las secciones usan `<Box component="section">` con `id` para scroll anchor. El layout interno siempre usa `<Container maxWidth="lg">`.

### Padding vertical por sección

| Sección      | py MUI | rem equiv. |
|--------------|--------|------------|
| Hero         | pt 8, pb 16 | 4rem top, 8rem bottom |
| Todas las demás | py 12 | 6rem arriba y abajo |

### Bento grid (ServiciosSection)

Patrón de grid asimétrico con `Grid container spacing={3}`:
- Fila 1: card 8/12 cols + card 4/12 cols (featured orange)
- Fila 2: card 4/12 cols (green) + card 8/12 cols
- Fila 3: card 12/12 cols con borde primary

### Números gigantes decorativos (ProcesoSection)

```tsx
fontSize: 'clamp(5rem, 10vw, 8rem)'
color: 'rgba(248, 245, 240, 0.06)'  // casi invisible, solo textura
position: 'absolute', zIndex: 0
```
El contenido real queda en `zIndex: 1` por encima.

### Panel oscuro (ContactoSection)

`backgroundColor: '#31302d'` con `borderRadius: '1.5rem'`. Grid 6/6: formulario a la izquierda, imagen decorativa a la derecha (oculta en mobile con `display: { xs: 'none', md: 'flex' }`).

---

## Animaciones e interacciones

| Patrón                     | Implementación                                          |
|----------------------------|---------------------------------------------------------|
| Hover botón primary        | `transform: scale(1.04)` + shadow naranja               |
| Hover card                 | `translateY(-0.125rem)`, borde cambia a naranja         |
| Hover logo plataforma      | `filter: grayscale(1)` → `grayscale(0)` on hover       |
| Hover ícono rotate         | `rotate(15deg)` (BusinessIcon en ServiciosSection)      |
| Ghost image hover          | `opacity: 0.15` → `1` en card de landing               |
| Code emoji hover           | `scale(1.1) rotate(5deg)`                               |
| Transition estándar        | `0.2s ease` para transform/border/opacity               |
| Transition de filtros      | `0.3s ease`                                             |

---

## Accesibilidad

- **Skip link**: primer elemento del `<body>`, visible en focus, background `#E8622A`
- **Un solo `<h1>`** por página
- **Landmarks semánticos**: `<nav>`, `<main id="main-content">`, `<section>`, `<footer>`
- **Focus visible**: `outline: 0.1875rem solid #E8622A`, `outlineOffset: 0.1875rem`
- **Touch targets**: mínimo `2.75rem × 2.75rem` (`44px`)
- **Contraste**: mínimo 4.5:1 (WCAG 2.1 AA)
- **Alt text** en todas las imágenes

---

## Internacionalización

El sitio soporta 3 idiomas: `es` (AR), `pt` (BR), `en` (US). Todo copy va en `messages/{locale}.json` y se accede con `useTranslations()`. El copy en español usa registro rioplatense (vos/te, nunca usted).

---

## Orden de secciones (home)

```
Navbar (sticky)
  Hero
  Servicios
  Proceso
  Plataformas
  Precios
  Testimonios
  SobreMí
  Contacto
Footer
WhatsAppButton (fixed)
```

---

## Reglas de codificación

1. Nunca `px` salvo el `fontSize: '16px'` del `:root`
2. Nunca Tailwind
3. Dark mode siempre mediante callback `(theme) => theme.palette.mode === 'light' ? A : B`
4. Cards sin `boxShadow`, el borde hace el trabajo
5. Botones: siempre pill (`borderRadius: '9999rem'`)
6. Formulario de contacto: Web3Forms, sin API Routes propias
7. Static export: sin SSR ni API Routes
