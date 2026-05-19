# Configuración de Cloudflare Pages

## Configuración en Cloudflare Pages Dashboard

### Build Settings:
- **Framework preset**: Next.js
- **Build command**: `bash build.sh`
- **Build output directory**: `.next`
- **Root directory**: `/`

### Environment Variables:
```
NODE_VERSION=20
GITHUB_TOKEN=<personal_access_token_con_acceso_a_mondilabs>
```

> `GITHUB_TOKEN` solo es necesario si `mondilabs` es un repo privado.
> Crear en GitHub: Settings → Developer settings → Personal access tokens → con permiso `repo`.

### Variables de entorno de la aplicación:
```
NEXT_PUBLIC_WEB3FORMS_KEY=tu_clave_aqui
NEXT_PUBLIC_EMAIL=tu_email_aqui
NEXT_PUBLIC_WHATSAPP=tu_numero_aqui
```

## Cómo funciona el embed de mondilabs

`build.sh` hace:
1. Clona `mondilabs` y lo compila (Vite, con `base: '/labs/'`)
2. Copia el dist a `public/labs/`
3. Compila mondi (Next.js) — incluye `public/labs/` en el deploy

Cloudflare sirve `/labs/` desde `public/labs/index.html` directamente.

## Deploy Manual

```bash
bash build.sh
```
