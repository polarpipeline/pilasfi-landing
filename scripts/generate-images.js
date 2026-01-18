const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const PUBLIC_DIR = path.join(__dirname, '../public');

// SVG for the logo icon
const logoSvg = `
<svg width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#6366F1"/>
      <stop offset="100%" style="stop-color:#06B6D4"/>
    </linearGradient>
  </defs>
  <rect width="512" height="512" rx="102" fill="url(#bgGradient)"/>
  <path d="M288 96L160 272H240L224 416L352 240H272L288 96Z" fill="white" stroke="white" stroke-width="8" stroke-linejoin="round"/>
</svg>
`;

// OG Image SVG (1200x630)
const ogImageSvg = `
<svg width="1200" height="630" viewBox="0 0 1200 630" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f0f23"/>
      <stop offset="50%" style="stop-color:#1a1a2e"/>
      <stop offset="100%" style="stop-color:#16213e"/>
    </linearGradient>
    <linearGradient id="accentGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#6366F1"/>
      <stop offset="100%" style="stop-color:#06B6D4"/>
    </linearGradient>
    <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#6366F1"/>
      <stop offset="100%" style="stop-color:#06B6D4"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="630" fill="url(#bgGrad)"/>

  <!-- Decorative circles -->
  <circle cx="1000" cy="100" r="200" fill="#6366F1" fill-opacity="0.1"/>
  <circle cx="200" cy="500" r="150" fill="#06B6D4" fill-opacity="0.1"/>

  <!-- Logo icon -->
  <g transform="translate(80, 80)">
    <rect width="80" height="80" rx="16" fill="url(#logoGrad)"/>
    <path d="M45 15L25 42H37L34 65L55 38H43L45 15Z" fill="white" stroke="white" stroke-width="1.5" stroke-linejoin="round"/>
  </g>

  <!-- Logo text -->
  <text x="180" y="138" font-family="Inter, -apple-system, BlinkMacSystemFont, sans-serif" font-size="42" font-weight="700" fill="white">
    Pilas<tspan fill="url(#accentGrad)">Fi</tspan>
  </text>

  <!-- Main headline -->
  <text x="80" y="280" font-family="Inter, -apple-system, BlinkMacSystemFont, sans-serif" font-size="64" font-weight="800" fill="white">
    Controla tus gastos
  </text>
  <text x="80" y="360" font-family="Inter, -apple-system, BlinkMacSystemFont, sans-serif" font-size="64" font-weight="800" fill="url(#accentGrad)">
    en pareja
  </text>
  <text x="80" y="440" font-family="Inter, -apple-system, BlinkMacSystemFont, sans-serif" font-size="64" font-weight="800" fill="white">
    automáticamente
  </text>

  <!-- Tagline -->
  <text x="80" y="510" font-family="Inter, -apple-system, BlinkMacSystemFont, sans-serif" font-size="24" fill="#9CA3AF">
    La app de finanzas personales #1 en Ecuador • 100% Gratis
  </text>

  <!-- Phone mockup hint -->
  <g transform="translate(900, 150)">
    <rect x="0" y="0" width="200" height="400" rx="30" fill="#1a1a1a" stroke="#333" stroke-width="2"/>
    <rect x="10" y="10" width="180" height="380" rx="24" fill="#1a1a2e"/>

    <!-- Mini UI elements -->
    <rect x="20" y="50" width="160" height="80" rx="12" fill="url(#accentGrad)"/>
    <text x="30" y="80" font-family="Inter, sans-serif" font-size="12" fill="rgba(255,255,255,0.8)">Presupuesto del mes</text>
    <text x="30" y="110" font-family="Inter, sans-serif" font-size="24" font-weight="700" fill="white">$2,500</text>

    <rect x="20" y="150" width="75" height="60" rx="8" fill="rgba(255,255,255,0.1)"/>
    <rect x="105" y="150" width="75" height="60" rx="8" fill="rgba(255,255,255,0.1)"/>

    <rect x="20" y="230" width="160" height="40" rx="8" fill="rgba(255,255,255,0.05)"/>
    <rect x="20" y="280" width="160" height="40" rx="8" fill="rgba(255,255,255,0.05)"/>
    <rect x="20" y="330" width="160" height="40" rx="8" fill="rgba(255,255,255,0.05)"/>
  </g>

  <!-- Bottom bar -->
  <rect x="0" y="590" width="1200" height="40" fill="url(#accentGrad)"/>
  <text x="600" y="618" font-family="Inter, sans-serif" font-size="18" font-weight="600" fill="white" text-anchor="middle">
    pilasfi.com • Descarga gratis en App Store y Google Play
  </text>
</svg>
`;

// Square OG image (1200x1200)
const ogImageSquareSvg = `
<svg width="1200" height="1200" viewBox="0 0 1200 1200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f0f23"/>
      <stop offset="50%" style="stop-color:#1a1a2e"/>
      <stop offset="100%" style="stop-color:#16213e"/>
    </linearGradient>
    <linearGradient id="accentGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#6366F1"/>
      <stop offset="100%" style="stop-color:#06B6D4"/>
    </linearGradient>
  </defs>

  <rect width="1200" height="1200" fill="url(#bgGrad2)"/>

  <!-- Decorative circles -->
  <circle cx="1000" cy="200" r="300" fill="#6366F1" fill-opacity="0.1"/>
  <circle cx="200" cy="1000" r="250" fill="#06B6D4" fill-opacity="0.1"/>

  <!-- Logo -->
  <g transform="translate(450, 200)">
    <rect width="300" height="300" rx="60" fill="url(#accentGrad2)"/>
    <path d="M169 45L94 162H139L127 247L202 130H157L169 45Z" fill="white" stroke="white" stroke-width="6" stroke-linejoin="round"/>
  </g>

  <!-- Text -->
  <text x="600" y="600" font-family="Inter, -apple-system, sans-serif" font-size="72" font-weight="700" fill="white" text-anchor="middle">
    Pilas<tspan fill="url(#accentGrad2)">Fi</tspan>
  </text>

  <text x="600" y="720" font-family="Inter, sans-serif" font-size="48" font-weight="800" fill="white" text-anchor="middle">
    Controla tus gastos
  </text>
  <text x="600" y="790" font-family="Inter, sans-serif" font-size="48" font-weight="800" fill="url(#accentGrad2)" text-anchor="middle">
    en pareja
  </text>
  <text x="600" y="860" font-family="Inter, sans-serif" font-size="48" font-weight="800" fill="white" text-anchor="middle">
    automáticamente
  </text>

  <text x="600" y="960" font-family="Inter, sans-serif" font-size="28" fill="#9CA3AF" text-anchor="middle">
    La app de finanzas personales #1 en Ecuador
  </text>
  <text x="600" y="1010" font-family="Inter, sans-serif" font-size="28" fill="#9CA3AF" text-anchor="middle">
    100% Gratis • 7 Bancos Soportados
  </text>

  <!-- Bottom bar -->
  <rect x="0" y="1140" width="1200" height="60" fill="url(#accentGrad2)"/>
  <text x="600" y="1180" font-family="Inter, sans-serif" font-size="24" font-weight="600" fill="white" text-anchor="middle">
    pilasfi.com
  </text>
</svg>
`;

// Icon sizes to generate
const iconSizes = [16, 32, 72, 96, 128, 144, 152, 180, 192, 384, 512];

async function generateImages() {
  console.log('🎨 Generating PilasFi images...\n');

  // Generate logo PNG
  console.log('📱 Generating logo.png...');
  await sharp(Buffer.from(logoSvg))
    .resize(512, 512)
    .png()
    .toFile(path.join(PUBLIC_DIR, 'logo.png'));

  // Generate all icon sizes
  for (const size of iconSizes) {
    const filename = size === 180 ? 'apple-touch-icon.png' : `icon-${size}.png`;
    console.log(`📱 Generating ${filename}...`);
    await sharp(Buffer.from(logoSvg))
      .resize(size, size)
      .png()
      .toFile(path.join(PUBLIC_DIR, filename));
  }

  // Generate favicon-16x16 and favicon-32x32
  console.log('📱 Generating favicon-16x16.png...');
  await sharp(Buffer.from(logoSvg))
    .resize(16, 16)
    .png()
    .toFile(path.join(PUBLIC_DIR, 'favicon-16x16.png'));

  console.log('📱 Generating favicon-32x32.png...');
  await sharp(Buffer.from(logoSvg))
    .resize(32, 32)
    .png()
    .toFile(path.join(PUBLIC_DIR, 'favicon-32x32.png'));

  // Generate favicon.ico (using 32x32 as base)
  console.log('📱 Generating favicon.ico...');
  await sharp(Buffer.from(logoSvg))
    .resize(32, 32)
    .toFormat('png')
    .toFile(path.join(PUBLIC_DIR, 'favicon.ico'));

  // Generate OG image
  console.log('🖼️  Generating og-image.png (1200x630)...');
  await sharp(Buffer.from(ogImageSvg))
    .resize(1200, 630)
    .png()
    .toFile(path.join(PUBLIC_DIR, 'og-image.png'));

  // Generate square OG image
  console.log('🖼️  Generating og-image-square.png (1200x1200)...');
  await sharp(Buffer.from(ogImageSquareSvg))
    .resize(1200, 1200)
    .png()
    .toFile(path.join(PUBLIC_DIR, 'og-image-square.png'));

  // Generate logo-512 for ai-plugin.json
  console.log('📱 Generating logo-512.png...');
  await sharp(Buffer.from(logoSvg))
    .resize(512, 512)
    .png()
    .toFile(path.join(PUBLIC_DIR, 'logo-512.png'));

  console.log('\n✅ All images generated successfully!');
  console.log('\nGenerated files:');
  console.log('  - logo.png (512x512)');
  console.log('  - logo-512.png (512x512)');
  iconSizes.forEach(size => {
    const name = size === 180 ? 'apple-touch-icon.png' : `icon-${size}.png`;
    console.log(`  - ${name} (${size}x${size})`);
  });
  console.log('  - favicon-16x16.png');
  console.log('  - favicon-32x32.png');
  console.log('  - favicon.ico');
  console.log('  - og-image.png (1200x630)');
  console.log('  - og-image-square.png (1200x1200)');
}

generateImages().catch(console.error);
