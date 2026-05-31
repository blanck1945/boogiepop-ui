# boogiepop-ui

Librería de componentes React compartida entre los seeds de la plataforma Boogiepop.

## Instalación

```bash
npm install boogiepop-ui
```

## Uso

```tsx
import { Button, Card, Input, Select, Text } from 'boogiepop-ui'
import 'boogiepop-ui/styles'
```

## Componentes

- `Button` — primario / secundario. Acepta `href` para renderizar como `<a>`.
- `Card` — contenedor con borde y fondo muted.
- `Input` — campo de texto con label y mensaje de error.
- `Select` — selector con opciones tipadas.
- `Text` — tipografía semántica (`h1`–`h3`, `p`, `span`) con variante muted.

## Design tokens

Tokens CSS disponibles via `--bp-*` tras importar los estilos:

| Variable | Valor |
|----------|-------|
| `--bp-primary` | `#4361ee` |
| `--bp-primary-hover` | `#3451d1` |
| `--bp-accent` | `#3a0ca3` |
| `--bp-bg` | `#ffffff` |
| `--bp-muted-bg` | `#f0f2f6` |
| `--bp-body` | `#1a1a2e` |
| `--bp-muted` | `#6c757d` |
| `--bp-border` | `#cfd3dc` |

## Clases CSS utilitarias

Disponibles globalmente tras `import 'boogiepop-ui/styles'`:

- `.bp-btn-primary` / `.bp-btn-secondary` / `.bp-btn-sm`
- `.bp-card`
- `.bp-input` / `.bp-select` / `.bp-label` / `.bp-field` / `.bp-error-msg`
- `.bp-inline-code`
- `.bp-muted`

## Build y publicación

```bash
npm run build      # compila a dist/
npm publish --access public
```
