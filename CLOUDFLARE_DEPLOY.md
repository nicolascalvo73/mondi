# Configuración de Cloudflare Pages

Este proyecto usa Next.js con `output: 'export'` para generar un sitio estático.

## Configuración en Cloudflare Pages Dashboard

### Build Settings:
- **Framework preset**: None (o Next.js Static HTML Export)
- **Build command**: `npm run build`
- **Build output directory**: `out`
- **Root directory**: `/`

### Environment Variables:
Agregar las siguientes variables de entorno en Cloudflare Pages:

```
NODE_VERSION=18.17.0
NPM_FLAGS=--legacy-peer-deps
```

### Variables de entorno de la aplicación:
```
NEXT_PUBLIC_WEB3FORMS_KEY=tu_clave_aqui
NEXT_PUBLIC_EMAIL=tu_email_aqui
NEXT_PUBLIC_WHATSAPP=tu_numero_aqui
```

## Notas Importantes

1. **NO usar @cloudflare/next-on-pages**: Este proyecto usa static export, no necesita adaptadores de Cloudflare.

2. **El archivo `.npmrc`** contiene `legacy-peer-deps=true` para resolver conflictos de dependencias durante el build.

3. **El directorio de salida es `out/`**: Cloudflare Pages debe servir los archivos desde este directorio.

4. **Imágenes no optimizadas**: Las imágenes usan `unoptimized: true` porque el static export no soporta optimización de imágenes de Next.js.

## Troubleshooting

Si el build falla con errores de dependencias:
- Verificar que `NPM_FLAGS=--legacy-peer-deps` esté configurado en las variables de entorno
- Verificar que el archivo `.npmrc` esté en el repositorio
- Asegurar que `NODE_VERSION=18.17.0` esté configurado

## Deploy Manual

Para probar el build localmente:
```bash
npm install --legacy-peer-deps
npm run build
```

El sitio estático estará en el directorio `out/`
