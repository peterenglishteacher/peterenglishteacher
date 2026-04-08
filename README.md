# Peter Brown | English Teacher

Landing page profesional y bilingüe (ES/EN) para un profesor de inglés nativo.

## Stack

- **Next.js 16** con App Router
- **React 19** + **TypeScript**
- **Tailwind CSS 4**
- **Zod** para validaciones
- **Resend** para envío de emails
- **Server Actions** para el formulario

## Inicio rápido

```bash
# Instalar dependencias
npm install

# Copiar variables de entorno
cp .env.local.example .env.local

# Editar las variables de entorno con tu clave de Resend
# RESEND_API_KEY=re_tu_clave_aqui

# Iniciar en desarrollo
npm run dev
```

## Configuración de Resend

1. Crea una cuenta en [resend.com](https://resend.com)
2. Obtén tu API Key
3. Configura tu dominio (para producción) o usa el dominio de pruebas
4. Añade las variables en `.env.local`:
   ```
   RESEND_API_KEY=re_tu_clave_aqui
   EMAIL_FROM=hello@peterenglishteacher.com
   EMAIL_TO=peterbrown1978.pb@gmail.com
   ```

## Despliegue en Vercel

1. Sube el repositorio a GitHub
2. Importa el proyecto en [vercel.com](https://vercel.com)
3. Configura las variables de entorno en el panel de Vercel:
   - `RESEND_API_KEY`
   - `EMAIL_FROM`
   - `EMAIL_TO`
4. Conecta el dominio `peterenglishteacher.com`
5. Vercel desplegará automáticamente en cada push

## Estructura del proyecto

```
src/
├── app/              # App Router (layouts, pages, actions)
├── components/       # Componentes React
│   ├── layout/       # Header, Footer, WhatsAppButton
│   ├── sections/     # Secciones de la landing
│   └── ui/           # Componentes reutilizables
├── content/          # Textos en ES e EN
├── lib/              # Utilidades (i18n, email, SEO, validaciones)
├── constants/        # Datos de contacto y marca
└── types/            # TypeScript types
```

## Idiomas

La web se sirve en dos rutas:
- `/es` — Español (por defecto)
- `/en` — English

Los textos están centralizados en `src/content/es.ts` y `src/content/en.ts`.
