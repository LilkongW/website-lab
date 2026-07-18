# LAB-FIS — Laboratorio de Física Aplicada (ULA)

Sitio web del Laboratorio de Física Aplicada, adscrito a la Universidad de Los Andes, Mérida, Venezuela.

## Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4
- Turbopack

## Rutas

| Ruta | Página |
|------|--------|
| `/` | Inicio |
| `/investigacion` | Áreas de investigación |
| `/servicios` | Servicios |
| `/equipo` | Equipo |
| `/publicaciones` | Publicaciones |
| `/galeria` | Galería |
| `/contacto` | Contacto |

## Comandos

```bash
# Desarrollo (Fast Refresh)
npm run dev

# Build de producción
npm run build

# Iniciar servidor de producción
npm run start

# Linter
npm run lint

# Forzar polling en WSL si no detecta cambios
CHOKIDAR_USEPOLLING=1 npm run dev

# Limpiar caché y rebuild
rm -rf .next && npm run dev
```

## Estructura

```
app/              → Rutas y layouts
components/
├── ui/           → Componentes reutilizables
├── layout/       → Header, Footer
└── sections/     → Secciones de página
constants/        → Datos del sitio
hooks/           → Custom hooks
types/           → Interfaces TypeScript
public/
├── images/       → Imágenes
│   └── team/     → Fotos del equipo
└── docs/         → Documentos
```

## Convenciones

- Los datos editables van en `constants/index.ts`
- Tipografías: Inter (títulos/texto), Geist Mono (código)
- Sin `next.config.js` explícito a menos que se requiera
- Animaciones scroll-reveal con `AnimatedSection`
