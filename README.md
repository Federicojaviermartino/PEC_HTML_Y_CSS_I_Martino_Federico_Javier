# Viajes por Europa

Portal web sobre viajes en familia y mochilero por Europa. Proyecto educativo para la asignatura HTML y CSS I.

## Descripción

Sitio web responsive que presenta información sobre destinos turísticos europeos, con enfoque en viajes familiares y experiencias de mochilero.

## Tecnologías Utilizadas

- HTML5 semántico
- CSS3 con preprocesador SCSS
- JavaScript (ES6+)
- Parcel como bundler
- Babel para transpilación
- PostCSS con Autoprefixer
- Leaflet para mapas interactivos

## Estructura del Proyecto

```
src/
├── index.html           # Página principal
├── categoria.html       # Listado de destinos
├── det1.html           # Detalle: Barcelona
├── det2.html           # Detalle: Ámsterdam-Berlín
├── links.html          # Créditos y enlaces
├── styles/
│   ├── main.scss
│   ├── _variables.scss
│   ├── _mixins.scss
│   └── _layout.scss
├── scripts/
│   └── main.js
└── images/
```

## Instalación y Uso

### Instalación de dependencias

```bash
npm install
```

### Desarrollo

```bash
npm run dev
```

El sitio estará disponible en `http://localhost:1234`

### Producción

```bash
npm run build
```

Los archivos de producción se generarán en la carpeta `dist/`

## Funcionalidades

- Diseño responsive (móvil, tablet, desktop)
- Menú de navegación hamburguesa en móvil
- Galería de imágenes con lightbox
- Buscador de destinos con filtrado en tiempo real
- Mapas interactivos con Leaflet
- Animaciones al hacer scroll
- Compatibilidad con navegadores antiguos

## Accesibilidad

El sitio cumple con las pautas WCAG 2.0 nivel AA:

- HTML semántico
- Atributos alt en imágenes
- Contraste de color adecuado
- Navegación por teclado
- Enlaces "saltar al contenido"
- Atributos ARIA apropiados

## Créditos

- Imágenes: Unsplash
- Mapas: OpenStreetMap via Leaflet
- Desarrollo: Proyecto educativo UOC

## Licencia

Proyecto educativo sin fines comerciales.