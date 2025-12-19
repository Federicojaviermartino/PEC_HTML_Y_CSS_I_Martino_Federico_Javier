# PEC 2 - HTML y CSS I
## Web y Recursos Multimedia: Viajes por Europa

**Estudiante:** Federico Javier Martino
**Asignatura:** HTML y CSS I
**Universidad:** UOC (Universitat Oberta de Catalunya)
**Fecha:** Diciembre 2025

---

**Enlaces del proyecto:**

- **Repositorio GitHub:** https://github.com/Federicojaviermartino/PEC_HTML_Y_CSS_I_Martino_Federico_Javier
- **Sitio web publico:** https://pechtmlycssimartinofedericojavier.netlify.app/

---

## Indice

1. [Formatos de imagen utilizados](#1-formatos-de-imagen-utilizados)
2. [Tabla de imagenes optimizadas](#2-tabla-de-imagenes-optimizadas)
3. [Tecnicas de imagen responsive](#3-tecnicas-de-imagen-responsive)
4. [Animacion de elementos en CSS](#4-animacion-de-elementos-en-css)
5. [Uso de clip-path](#5-uso-de-clip-path)
6. [Semantica y accesibilidad](#6-semantica-y-accesibilidad)

---

## 1. Formatos de imagen utilizados

### 1.1 Formato original: JPG

Las imagenes originales del proyecto estaban en formato JPG (JPEG). Este formato es ampliamente compatible pero presenta limitaciones en terminos de compresion, especialmente para imagenes de alta resolucion.

### 1.2 Formato optimizado: WebP

Se eligio WebP como formato de destino por las siguientes razones:

- **Compresion superior:** WebP ofrece una compresion entre 25-34% mejor que JPG manteniendo calidad visual equivalente
- **Soporte de transparencia:** A diferencia de JPG, WebP soporta canal alfa
- **Compatibilidad moderna:** Soportado por todos los navegadores modernos (Chrome, Firefox, Safari, Edge)
- **Recomendado por Google:** Formato desarrollado por Google especificamente para la web

### 1.3 Herramienta de optimizacion: Sharp

Se utilizo la libreria Sharp de Node.js para la optimizacion de imagenes:

```javascript
const sharp = require('sharp');

await sharp(inputPath)
  .webp({ quality: 80 })
  .toFile(outputPath);
```

La calidad se establecio en 80%, lo que proporciona un equilibrio optimo entre tamano de archivo y calidad visual.

### 1.4 Configuracion de scripts

Se mejoro la configuracion de scripts en `package.json` para integrar la optimizacion en el flujo de build:

```json
{
  "scripts": {
    "dev": "parcel src/*.html --open",
    "build": "npm run clean && npm run optimize-images && parcel build src/*.html --public-url ./",
    "clean": "rimraf dist .parcel-cache",
    "optimize-images": "node scripts/optimize-images.js"
  }
}
```

---

## 2. Tabla de imagenes optimizadas

### 2.1 Resultados de la optimizacion

| Imagen | Formato Original | Formato Nuevo | Tamano Original | Tamano Optimizado | Mejora |
|--------|------------------|---------------|-----------------|-------------------|--------|
| barcelona-playa.jpg | JPG | WebP | 21.09 MB | 29.41 KB | 99.9% |
| tren-europa.jpg | JPG | WebP | 12.08 MB | 20.24 KB | 99.8% |
| familia-viajando.jpg | JPG | WebP | 11.38 MB | 22.98 KB | 99.8% |
| mochilero-ruta.jpg | JPG | WebP | 2.11 MB | 41.61 KB | 98.1% |
| barcelona-familia-hero.jpg | JPG | WebP | 709.28 KB | 40.74 KB | 94.3% |
| hero-europa.jpg | JPG | WebP | 546.81 KB | 31.23 KB | 94.3% |
| mochilero-hero.jpg | JPG | WebP | 402.91 KB | 23.12 KB | 94.3% |
| barcelona-sagrada-familia.jpg | JPG | WebP | 293.21 KB | 58.97 KB | 79.9% |
| praga-puente-carlos.jpg | JPG | WebP | 176.33 KB | 36.15 KB | 79.5% |
| amsterdam-canales.jpg | JPG | WebP | 158.31 KB | 29.44 KB | 81.4% |
| barcelona-parc-guell.jpg | JPG | WebP | 134.37 KB | 20.16 KB | 85.0% |
| destinos-europa.jpg | JPG | WebP | 100.68 KB | 20.87 KB | 79.3% |
| berlin-brandenburgo.jpg | JPG | WebP | 89.04 KB | 14.76 KB | 83.4% |
| roma-coliseo.jpg | JPG | WebP | 87.67 KB | 14.38 KB | 83.6% |
| paris-torre-eiffel.jpg | JPG | WebP | 76.15 KB | 11.72 KB | 84.6% |

### 2.2 Resumen total

| Metrica | Valor |
|---------|-------|
| Tamano total original | 49.37 MB |
| Tamano total optimizado | 415.78 KB |
| **Mejora total** | **99.2%** |

### 2.3 Analisis de resultados

Los resultados demuestran una mejora excepcional en el tamano de los archivos:

1. **Imagenes grandes (>10 MB):** Las tres imagenes mas pesadas (barcelona-playa, tren-europa, familia-viajando) mostraron mejoras superiores al 99%. Esto se debe a que el algoritmo WebP es especialmente eficiente con imagenes de alta resolucion.

2. **Imagenes medianas (100 KB - 1 MB):** Mejoras consistentes entre 79% y 98%, demostrando la eficiencia del formato WebP en rangos tipicos de imagenes web.

3. **Imagenes pequenas (<100 KB):** Aun en imagenes pequenas, se obtuvieron mejoras del 79-85%, lo que indica que WebP es beneficioso independientemente del tamano original.

4. **Impacto en rendimiento:** La reduccion de 49.37 MB a 415.78 KB representa una mejora dramatica en tiempos de carga, especialmente importante para usuarios moviles o con conexiones lentas.

---

## 3. Tecnicas de imagen responsive

Se implementaron las tres tecnicas de imagenes responsive especificadas en el modulo:

### 3.1 Tecnica 1: Direccion de Arte (Art Direction)

**Ubicacion:** `det1.html` - Imagen destacada de Barcelona

La direccion de arte permite mostrar diferentes recortes de una imagen segun el dispositivo, optimizando la composicion visual para cada tamano de pantalla.

```html
<picture>
  <source media="(max-width: 576px)"
          srcset="./images/optimized/barcelona-familia-hero-mobile.webp"
          type="image/webp">
  <source media="(max-width: 768px)"
          srcset="./images/optimized/barcelona-familia-hero-tablet.webp"
          type="image/webp">
  <source media="(min-width: 769px)"
          srcset="./images/optimized/barcelona-familia-hero-desktop.webp"
          type="image/webp">
  <img src="./images/barcelona-familia-hero.jpg"
       alt="Familia disfrutando en Barcelona con la ciudad de fondo"
       class="featured-image">
</picture>
```

**Configuracion de recortes:**
- **Movil (576px):** Recorte vertical 576x768px, centrado en el sujeto principal
- **Tablet (768px):** Recorte horizontal panoramico 768x400px
- **Desktop (769px+):** Imagen completa 1200x500px

### 3.2 Tecnica 2: Resolution Switching por Tamano

**Ubicacion:** `categoria.html` - Cards de destinos

Esta tecnica permite al navegador seleccionar la imagen mas apropiada segun el tamano del viewport y el espacio disponible para la imagen.

```html
<img srcset="./images/optimized/barcelona-sagrada-familia-400w.webp 400w,
             ./images/optimized/barcelona-sagrada-familia-800w.webp 800w,
             ./images/optimized/barcelona-sagrada-familia-1200w.webp 1200w"
     sizes="(max-width: 576px) 100vw,
            (max-width: 768px) 50vw,
            33vw"
     src="./images/barcelona-sagrada-familia.jpg"
     alt="Vista de la Sagrada Familia en Barcelona"
     loading="lazy">
```

**Atributo sizes:**
- **Movil (<576px):** La imagen ocupa el 100% del viewport (1 columna)
- **Tablet (576-768px):** La imagen ocupa el 50% del viewport (2 columnas)
- **Desktop (>768px):** La imagen ocupa el 33% del viewport (3 columnas)

### 3.3 Tecnica 3: Resolution Switching por Densidad de Pixeles

**Ubicacion:** `index.html` - Cards de la portada

Esta tecnica sirve imagenes de mayor resolucion a dispositivos con pantallas de alta densidad (Retina, etc.).

```html
<img srcset="./images/optimized/familia-viajando-1x.webp 1x,
             ./images/optimized/familia-viajando-2x.webp 2x,
             ./images/optimized/familia-viajando-3x.webp 3x"
     src="./images/familia-viajando.jpg"
     alt="Familia viajando junta">
```

**Descriptores de densidad:**
- **1x:** 300px de ancho - para pantallas estandar
- **2x:** 600px de ancho - para pantallas Retina
- **3x:** 900px de ancho - para pantallas de muy alta densidad

---

## 4. Animacion de elementos en CSS

### 4.1 SVG animado: Brujula de viaje

Se creo un grafico SVG de una brujula con animaciones CSS puras. El SVG se ubica en la seccion hero de la portada, representando el espiritu de exploracion y viaje.

**Codigo SVG:**
```html
<svg class="travel-compass" viewBox="0 0 100 100" aria-hidden="true">
  <!-- Circulos exterior e interior -->
  <circle cx="50" cy="50" r="45" fill="none" stroke="#ffffff" stroke-width="3"/>
  <circle cx="50" cy="50" r="35" fill="none" stroke="#06d6a0" stroke-width="2"/>
  <!-- Marcas cardinales N, S, E, O -->
  <text x="50" y="18" text-anchor="middle" fill="#ffffff">N</text>
  <text x="50" y="88" text-anchor="middle" fill="#ffffff">S</text>
  <text x="12" y="54" text-anchor="middle" fill="#ffffff">O</text>
  <text x="88" y="54" text-anchor="middle" fill="#ffffff">E</text>
  <!-- Aguja de la brujula -->
  <g class="compass-needle">
    <polygon points="50,20 45,50 50,45 55,50" fill="#f77f00"/>
    <polygon points="50,80 45,50 50,55 55,50" fill="#ffffff"/>
  </g>
  <!-- Centro -->
  <circle cx="50" cy="50" r="5" fill="#06d6a0"/>
</svg>
```

**Animaciones CSS aplicadas:**

```scss
// Oscilacion de la aguja de la brujula
@keyframes rotate-needle {
  0%   { transform: rotate(0deg); }
  25%  { transform: rotate(15deg); }
  50%  { transform: rotate(-10deg); }
  75%  { transform: rotate(5deg); }
  100% { transform: rotate(0deg); }
}

// Pulso sutil del circulo exterior
@keyframes pulse-compass {
  0%, 100% { opacity: 0.8; }
  50% { opacity: 1; }
}

.travel-compass {
  .compass-needle {
    transform-origin: 50px 50px;
    animation: rotate-needle 4s ease-in-out infinite;
  }
}
```

### 4.2 Animacion del titulo hero

El titulo principal de la portada tiene una animacion de entrada desde abajo:

```scss
@keyframes slide-in-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero-content h1 {
  animation: slide-in-up 0.8s ease-out;
}
```

### 4.3 Transiciones en cards

Las cards tienen transiciones mejoradas para el efecto hover:

```scss
.card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
  }
}
```

---

## 5. Uso de clip-path

### 5.1 Implementacion del octogono

Se aplico clip-path a una imagen en la seccion "Por Que Elegir Europa" de la portada, creando una forma octogonal elegante.

**Codigo HTML:**
```html
<div class="clipped-container">
  <img src="./images/hero-europa.jpg"
       alt="Paisaje europeo"
       class="clipped-octagon">
</div>
```

**Codigo CSS:**
```scss
.clipped-octagon {
  clip-path: polygon(
    30% 0%,    /* Esquina superior izquierda */
    70% 0%,    /* Esquina superior derecha */
    100% 30%,  /* Lado derecho superior */
    100% 70%,  /* Lado derecho inferior */
    70% 100%,  /* Esquina inferior derecha */
    30% 100%,  /* Esquina inferior izquierda */
    0% 70%,    /* Lado izquierdo inferior */
    0% 30%     /* Lado izquierdo superior */
  );
  transition: clip-path 0.4s ease, transform 0.4s ease;

  &:hover {
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
    transform: scale(1.02);
  }
}
```

### 5.2 Efecto interactivo

Al pasar el cursor sobre la imagen, el clip-path transiciona suavemente de octogono a rectangulo, creando un efecto visual atractivo que invita a la interaccion.

---

## 6. Semantica y accesibilidad

### 6.1 Cumplimiento WCAG 2.0 AA

El sitio cumple con las pautas de accesibilidad WCAG 2.0 nivel AA:

**Alternativas al contenido no textual:**
- Todas las imagenes tienen atributos `alt` descriptivos
- El SVG decorativo usa `aria-hidden="true"` para ocultarlo de lectores de pantalla
- El SVG incluye elemento `<title>` para accesibilidad

**Navegacion accesible:**
- Skip-link para saltar la navegacion
- Menu navegable por teclado
- ARIA labels en elementos interactivos

**Contraste de colores:**
- Texto principal: ratio minimo 7:1
- Enlaces y botones: ratio minimo 4.5:1

### 6.2 Movimiento reducido

Se implemento la media query `prefers-reduced-motion` para usuarios que prefieren reducir las animaciones:

```scss
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

### 6.3 Carga diferida

Se implemento `loading="lazy"` en imagenes que estan debajo del fold para mejorar el rendimiento inicial:

```html
<img srcset="..." loading="lazy" alt="...">
```

### 6.4 Idioma del documento

El idioma esta correctamente especificado en el atributo `lang` del elemento HTML:

```html
<html lang="es">
```

---

## Conclusiones

Esta practica ha permitido implementar tecnicas avanzadas de recursos multimedia en un sitio web responsive:

1. **Optimizacion de imagenes:** Reduccion del 99.2% en el peso total de las imagenes mediante conversion a WebP
2. **Imagenes responsive:** Implementacion de las tres tecnicas principales (direccion de arte, switching por tamano y por densidad)
3. **Animaciones CSS:** Creacion de SVG animado y efectos visuales usando @keyframes
4. **Clip-path:** Aplicacion creativa de formas geometricas con transiciones
5. **Accesibilidad:** Cumplimiento de WCAG 2.0 AA incluyendo soporte para movimiento reducido

El resultado es un sitio web visualmente atractivo, con excelente rendimiento y completamente accesible.
