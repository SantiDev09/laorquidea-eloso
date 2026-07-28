# La Orquídea y el Oso — Landing Page Fase 1
### Misión Comercial Sudáfrica / África 2026

Landing page comercial trilingüe (Español · Inglés · Francés) orientada a
compradores internacionales en Sudáfrica y África Occidental, construida
según el alcance de **Fase 1** del proyecto.

Sitio de referencia de marca: https://fincaslaorquideayeloso.com

---

## 1. Estructura del proyecto

```
landing-page/
│
├── index.html                # HTML + CSS + JS (animaciones, formulario, menú, i18n)
│
├── languages/
│   ├── es.json                # Textos en español (idioma por defecto)
│   ├── en.json                # Textos en inglés
│   ├── fr.json                # Textos en francés
│   └── language.js            # Motor de traducción (i18n)
│
├── assets/
│   ├── images/                # Ilustraciones SVG placeholder + logo + og:image
│   ├── videos/                # Video de fondo del Hero (opcional)
│   ├── documents/             # PDFs descargables (brochure e Índice O&O)
│   └── favicon.ico
│
└── README.md
```

Todo el CSS y JavaScript de animaciones, formulario y menú vive dentro de
`index.html` (tal como se pidió), mientras que los textos en los tres idiomas
viven en `languages/*.json` para que cualquier persona sin conocimientos
técnicos pueda editarlos.

---

## 2. Qué cubre esta Fase 1

- ✅ Landing en 3 idiomas (ES / EN / FR) con selector en el header y menú móvil.
- ✅ Hero con propuesta de valor para el mercado africano + insignia
  "Misión Comercial Sudáfrica 2026".
- ✅ Sección **Producto exportable** con descargas de brochure (EN/FR).
- ✅ Sección **Origen**.
- ✅ Sección **Certified Origin Program O&O** con descargas del Índice O&O
  (EN/FR) y espacio preparado para video de presentación.
- ✅ Sección **Trazabilidad** con la explicación del espacio a preparar
  (marcado como "Próximamente").
- ✅ Botones de descarga que **no redireccionan** a otras páginas — solo
  descargan el PDF correspondiente.
- ✅ Formulario de contacto con validación y estados de envío/éxito/error.
- ✅ Diseño responsive (mobile-first) con animaciones al hacer scroll,
  contador animado de estadísticas de impacto, y micro-interacciones.
- ✅ SEO básico: metaetiquetas, Open Graph, Twitter Card, `hreflang` ES/EN/FR,
  datos estructurados (JSON-LD) y contenido semántico.
- ✅ Respeta `prefers-reduced-motion` para accesibilidad.

---

## 3. Sobre la paleta de colores y el manual de marca

Intenté acceder a la carpeta de Mega con el manual de marca que compartiste,
pero **ese dominio está bloqueado en este entorno de trabajo** y no pude
consultarlo. Para no detener el desarrollo, definí una paleta propia coherente
con la identidad visual actual de fincaslaorquideayeloso.com (tonos bosque,
tierra y dorado, ligados al concepto "café que regenera el bosque"):

```css
--color-bg:      #F6F1E4;  /* fondo crema/pergamino */
--color-forest:  #24402B;  /* verde bosque — color principal */
--color-forest-dark: #152417;
--color-bark:    #4B2E1E;  /* marrón tierra/café */
--color-gold:    #C08829;  /* dorado — acentos y CTAs */
--color-orchid:  #9C5A82;  /* guiño a "Orquídea" */
```

**Para ajustar los colores al manual de marca real**, solo necesitas editar
las variables dentro de `:root { ... }` al inicio del `<style>` en
`index.html` (sección "TOKENS"). Todo el sitio usa esas variables, así que un
solo cambio se propaga a botones, textos, fondos, íconos, etc.

Tipografías usadas (Google Fonts, ya enlazadas en `index.html`):
- **Fraunces** — títulos (serif con carácter, orgánica).
- **Work Sans** — cuerpo de texto e interfaz.

---

## 4. Cómo editar los textos (sin tocar código)

Todo el copy de la landing está en:
- `languages/es.json`
- `languages/en.json`
- `languages/fr.json`

Cada archivo tiene la misma estructura de claves (`hero.title`,
`product.text`, `contact.form.submit`, etc.). Edita el valor de la clave en
el idioma correspondiente y guarda — no es necesario tocar `index.html`.

---

## 5. Cómo reemplazar los archivos descargables

Los botones de descarga ya apuntan a rutas fijas dentro de
`assets/documents/`. Actualmente contienen **PDFs de marcador de posición**
(placeholder) generados para que el sitio funcione de inmediato:

| Botón en el sitio | Archivo a reemplazar |
|---|---|
| Brochure (Inglés) | `assets/documents/brochure-en.pdf` |
| Brochure (Francés) | `assets/documents/brochure-fr.pdf` |
| Índice O&O (Inglés) | `assets/documents/indice-oo-en.pdf` |
| Índice O&O (Francés) | `assets/documents/indice-oo-fr.pdf` |

Cuando Mulita entregue los archivos finales, **solo reemplaza el PDF
manteniendo exactamente el mismo nombre de archivo** — no se necesita ningún
cambio en el código.

---

## 6. Imágenes y video

- Las imágenes actuales son **ilustraciones SVG originales** (no fotografías
  de terceros) usadas como marcador visual profesional, para evitar cualquier
  problema de derechos de autor mientras se incorpora fotografía real de la
  finca. Ver `assets/images/README.md` para el detalle de qué reemplazar y
  dónde.
- El Hero está preparado para reproducir automáticamente un video de fondo:
  agrega `assets/videos/hero-loop.mp4` y aparecerá solo; si no existe, el
  sitio usa la ilustración de respaldo sin errores visibles para el usuario.

---

## 7. Formulario de contacto — conectar a un backend real

Fase 1 entrega el formulario **funcional en el frontend** (validación,
estados de carga/éxito/error, accesible). El envío final a un correo o CRM
requiere conectarlo a un servicio, por ejemplo:

**Opción rápida (sin backend propio) — Formspree:**
1. Crea una cuenta en https://formspree.io y un formulario nuevo.
2. En `index.html`, cambia:
   ```html
   <form class="contact-form" id="contactForm" novalidate>
   ```
   por:
   ```html
   <form class="contact-form" id="contactForm" novalidate
         action="https://formspree.io/f/TU_ID" method="POST">
   ```
3. En el bloque `<script>`, dentro de `form.addEventListener('submit', ...)`,
   reemplaza la simulación (`setTimeout(...)`) por un `fetch()` real al mismo
   endpoint. El código ya deja marcado con un comentario
   `NOTA PARA DESARROLLO` exactamente dónde hacer el cambio.

**Opción con backend propio:** apunta el `fetch()` a tu propio endpoint (por
ejemplo una función serverless que envíe el correo con SendGrid/SES).

---

## 8. Publicar en GitHub / GitHub Pages

```bash
cd landing-page
git init
git add .
git commit -m "Landing Fase 1 — Misión Comercial Sudáfrica 2026"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/TU_REPO.git
git push -u origin main
```

Luego, en GitHub: **Settings → Pages → Deploy from a branch → main / (root)**.
El sitio quedará publicado en `https://TU_USUARIO.github.io/TU_REPO/`.

Si vas a usar un dominio propio (por ejemplo
`mision-africa.fincaslaorquideayeloso.com`), agrega un archivo `CNAME` en la
raíz del repositorio con ese dominio y configura el registro DNS tipo `CNAME`
apuntando a `TU_USUARIO.github.io`.

> Nota: las URLs de `canonical`, Open Graph y `hreflang` en `index.html`
> usan `https://mision-africa.fincaslaorquideayeloso.com/` como ejemplo.
> Actualízalas con el dominio final antes de publicar.

---

## 9. Redirección desde www.fincaslaorquideayeloso.com

El alcance de Fase 1 pide que `www.fincaslaorquideayeloso.com` redirija a
esta landing básica. Esto se configura **desde el hosting/DNS del sitio
principal (WordPress)**, no desde este repositorio. Dos formas típicas:

- **Redirección 301 a nivel de servidor/hosting** hacia la URL final de esta
  landing (por ejemplo con un plugin de redirecciones de WordPress, o una
  regla en `.htaccess` / panel de hosting).
- **Subdominio dedicado** (recomendado): publicar esta landing en un
  subdominio como `mision-africa.fincaslaorquideayeloso.com` vía GitHub
  Pages + CNAME, y redirigir el dominio principal hacia ese subdominio.

---

## 10. SEO básico incluido

- `<title>` y `<meta name="description">` (se actualizan dinámicamente según
  el idioma activo).
- Open Graph y Twitter Card para vistas previas al compartir.
- `hreflang` para ES/EN/FR + `x-default`.
- Datos estructurados JSON-LD tipo `Organization`.
- HTML semántico (`header`, `main`, `section`, `footer`) y atributos `alt`/
  `aria-label` en elementos interactivos e íconos.
- El idioma seleccionado queda reflejado en la URL (`?lang=en`, `?lang=fr`),
  lo que permite compartir enlaces directos a cada versión.

Para profundizar el SEO en una fase posterior se recomienda: `sitemap.xml`,
`robots.txt`, versión indexable por ruta (`/en/`, `/fr/`) y Google Search
Console.

---

## 11. Accesibilidad y rendimiento

- Se respeta `prefers-reduced-motion` (desactiva animaciones para quienes lo
  configuran en su sistema).
- Foco visible en enlaces y campos de formulario.
- Contraste de color verificado sobre los tokens definidos.
- Sin dependencias externas pesadas: solo Google Fonts vía CDN; el resto es
  HTML/CSS/JS nativo, sin frameworks, para máxima velocidad de carga.

---

## 12. Pendientes para fases siguientes

- Reemplazar ilustraciones SVG por fotografía/video real de finca.
- Reemplazar PDFs placeholder por los brochures e Índice O&O finales (Mulita).
- Ajustar la paleta de color al manual de marca oficial (documento de Mega).
- Conectar el formulario de contacto a un envío real (ver sección 7).
- Construir el módulo de trazabilidad por lote (sección `#trazabilidad`).
- Configurar la redirección desde `www.fincaslaorquideayeloso.com`.