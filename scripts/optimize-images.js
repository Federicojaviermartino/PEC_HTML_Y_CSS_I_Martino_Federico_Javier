const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const INPUT_DIR = path.join(__dirname, '..', 'src', 'images');
const OUTPUT_DIR = path.join(__dirname, '..', 'src', 'images', 'optimized');
const QUALITY = 80;

const WIDTHS = [400, 800, 1200, 1600];

const ART_DIRECTION_CONFIG = {
  'barcelona-familia-hero': {
    mobile: { width: 576, height: 768, fit: 'cover', position: 'center' },
    tablet: { width: 768, height: 400, fit: 'cover', position: 'center' },
    desktop: { width: 1200, height: 500, fit: 'cover', position: 'center' }
  }
};

const DENSITY_IMAGES = ['destinos-europa', 'familia-viajando', 'mochilero-ruta'];
const DENSITY_BASE_WIDTH = 300;

const results = [];

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

function formatSize(bytes) {
  if (bytes >= 1024 * 1024) {
    return (bytes / (1024 * 1024)).toFixed(2) + ' MB';
  }
  return (bytes / 1024).toFixed(2) + ' KB';
}

function calculateImprovement(original, optimized) {
  return ((1 - optimized / original) * 100).toFixed(1) + '%';
}

async function processImage(inputPath, outputPath, options = {}) {
  const { width, height, fit, position } = options;

  let pipeline = sharp(inputPath);

  if (width || height) {
    pipeline = pipeline.resize(width, height, {
      fit: fit || 'inside',
      position: position || 'center',
      withoutEnlargement: true
    });
  }

  await pipeline
    .webp({ quality: QUALITY })
    .toFile(outputPath);

  return fs.statSync(outputPath).size;
}

async function processArtDirection(filename, baseName) {
  const inputPath = path.join(INPUT_DIR, filename);
  const config = ART_DIRECTION_CONFIG[baseName];

  if (!config) return;

  console.log(`  Procesando direccion de arte para ${baseName}...`);

  await processImage(
    inputPath,
    path.join(OUTPUT_DIR, `${baseName}-mobile.webp`),
    config.mobile
  );

  await processImage(
    inputPath,
    path.join(OUTPUT_DIR, `${baseName}-tablet.webp`),
    config.tablet
  );

  await processImage(
    inputPath,
    path.join(OUTPUT_DIR, `${baseName}-desktop.webp`),
    config.desktop
  );
}

async function processResolutionSwitching(filename, baseName, originalSize) {
  const inputPath = path.join(INPUT_DIR, filename);

  console.log(`  Generando tamanos responsive para ${baseName}...`);

  let bestSize = originalSize;

  for (const width of WIDTHS) {
    const outputPath = path.join(OUTPUT_DIR, `${baseName}-${width}w.webp`);
    const size = await processImage(inputPath, outputPath, { width });

    if (size < bestSize) {
      bestSize = size;
    }
  }

  return bestSize;
}

async function processDensitySwitching(filename, baseName) {
  const inputPath = path.join(INPUT_DIR, filename);

  if (!DENSITY_IMAGES.includes(baseName)) return;

  console.log(`  Generando versiones por densidad para ${baseName}...`);

  await processImage(
    inputPath,
    path.join(OUTPUT_DIR, `${baseName}-1x.webp`),
    { width: DENSITY_BASE_WIDTH }
  );

  await processImage(
    inputPath,
    path.join(OUTPUT_DIR, `${baseName}-2x.webp`),
    { width: DENSITY_BASE_WIDTH * 2 }
  );

  await processImage(
    inputPath,
    path.join(OUTPUT_DIR, `${baseName}-3x.webp`),
    { width: DENSITY_BASE_WIDTH * 3 }
  );
}

async function main() {
  console.log('=== Optimizacion de imagenes PEC2 ===\n');

  const images = fs.readdirSync(INPUT_DIR)
    .filter(file => /\.(jpg|jpeg|png)$/i.test(file));

  console.log(`Encontradas ${images.length} imagenes para procesar\n`);

  for (const filename of images) {
    const inputPath = path.join(INPUT_DIR, filename);
    const baseName = path.basename(filename, path.extname(filename));
    const originalSize = fs.statSync(inputPath).size;

    console.log(`Procesando: ${filename} (${formatSize(originalSize)})`);

    const webpPath = path.join(OUTPUT_DIR, `${baseName}.webp`);
    const webpSize = await processImage(inputPath, webpPath);

    if (ART_DIRECTION_CONFIG[baseName]) {
      await processArtDirection(filename, baseName);
    }

    const bestSize = await processResolutionSwitching(filename, baseName, webpSize);

    await processDensitySwitching(filename, baseName);

    results.push({
      imagen: filename,
      formatoAntiguo: path.extname(filename).toUpperCase().replace('.', ''),
      formatoNuevo: 'WebP',
      tamanoOriginal: originalSize,
      tamanoNuevo: bestSize,
      mejora: calculateImprovement(originalSize, bestSize)
    });

    console.log(`  WebP: ${formatSize(webpSize)} (${calculateImprovement(originalSize, webpSize)} de mejora)\n`);
  }

  results.sort((a, b) => b.tamanoOriginal - a.tamanoOriginal);

  const tablePath = path.join(OUTPUT_DIR, 'optimization-results.json');
  fs.writeFileSync(tablePath, JSON.stringify(results, null, 2));

  console.log('\n=== RESUMEN DE OPTIMIZACION ===\n');
  console.log('| Imagen | Formato Antiguo | Formato Nuevo | Tamano Original | Tamano Nuevo | Mejora |');
  console.log('|--------|-----------------|---------------|-----------------|--------------|--------|');

  let totalOriginal = 0;
  let totalNuevo = 0;

  for (const result of results) {
    totalOriginal += result.tamanoOriginal;
    totalNuevo += result.tamanoNuevo;
    console.log(`| ${result.imagen} | ${result.formatoAntiguo} | ${result.formatoNuevo} | ${formatSize(result.tamanoOriginal)} | ${formatSize(result.tamanoNuevo)} | ${result.mejora} |`);
  }

  console.log('\n--- TOTAL ---');
  console.log(`Tamano original total: ${formatSize(totalOriginal)}`);
  console.log(`Tamano optimizado total: ${formatSize(totalNuevo)}`);
  console.log(`Mejora total: ${calculateImprovement(totalOriginal, totalNuevo)}`);
  console.log(`\nResultados guardados en: ${tablePath}`);
}

main().catch(console.error);
