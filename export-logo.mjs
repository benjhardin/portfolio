import sharp from 'sharp'

const svgTransparent = `<svg width="512" height="512" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="hexGrad" x1="10%" y1="0%" x2="90%" y2="100%">
      <stop offset="0%" stop-color="#7dd8f5"/>
      <stop offset="100%" stop-color="#29b5e8"/>
    </linearGradient>
  </defs>
  <polygon points="50,8 87.7,29 87.7,71 50,92 12.3,71 12.3,29" stroke="url(#hexGrad)" stroke-width="2.5" fill="none" stroke-linejoin="round"/>
  <g stroke="url(#hexGrad)" stroke-width="1.5" stroke-linecap="round" opacity="0.8">
    <line x1="50" y1="8" x2="44" y2="3"/><line x1="50" y1="8" x2="56" y2="3"/>
    <line x1="87.7" y1="29" x2="93.7" y2="25"/><line x1="87.7" y1="29" x2="91.7" y2="35"/>
    <line x1="87.7" y1="71" x2="93.7" y2="75"/><line x1="87.7" y1="71" x2="91.7" y2="65"/>
    <line x1="50" y1="92" x2="44" y2="97"/><line x1="50" y1="92" x2="56" y2="97"/>
    <line x1="12.3" y1="71" x2="6.3" y2="75"/><line x1="12.3" y1="71" x2="8.3" y2="65"/>
    <line x1="12.3" y1="29" x2="6.3" y2="25"/><line x1="12.3" y1="29" x2="8.3" y2="35"/>
  </g>
  <text x="50" y="62" text-anchor="middle" font-family="system-ui, sans-serif" font-weight="900" font-size="30" letter-spacing="-1.5" fill="#29b5e8">BH</text>
</svg>`

const svgFavicon = `<svg width="512" height="512" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="hexGrad" x1="10%" y1="0%" x2="90%" y2="100%">
      <stop offset="0%" stop-color="#7dd8f5"/>
      <stop offset="100%" stop-color="#29b5e8"/>
    </linearGradient>
    <linearGradient id="hexGradFill" x1="10%" y1="0%" x2="90%" y2="100%">
      <stop offset="0%" stop-color="#1a4a6e"/>
      <stop offset="100%" stop-color="#0c2a42"/>
    </linearGradient>
  </defs>
  <polygon points="50,8 87.7,29 87.7,71 50,92 12.3,71 12.3,29" fill="url(#hexGradFill)"/>
  <polygon points="50,8 87.7,29 87.7,71 50,92 12.3,71 12.3,29" stroke="url(#hexGrad)" stroke-width="2.5" fill="none" stroke-linejoin="round"/>
  <g stroke="url(#hexGrad)" stroke-width="1.5" stroke-linecap="round" opacity="0.6">
    <line x1="50" y1="8" x2="44" y2="3"/><line x1="50" y1="8" x2="56" y2="3"/>
    <line x1="87.7" y1="29" x2="93.7" y2="25"/><line x1="87.7" y1="29" x2="91.7" y2="35"/>
    <line x1="87.7" y1="71" x2="93.7" y2="75"/><line x1="87.7" y1="71" x2="91.7" y2="65"/>
    <line x1="50" y1="92" x2="44" y2="97"/><line x1="50" y1="92" x2="56" y2="97"/>
    <line x1="12.3" y1="71" x2="6.3" y2="75"/><line x1="12.3" y1="71" x2="8.3" y2="65"/>
    <line x1="12.3" y1="29" x2="6.3" y2="25"/><line x1="12.3" y1="29" x2="8.3" y2="35"/>
  </g>
  <text x="50" y="62" text-anchor="middle" font-family="system-ui, sans-serif" font-weight="900" font-size="30" letter-spacing="-1.5" fill="#7dd8f5">BH</text>
</svg>`

// Transparent PNG for Downloads
await sharp(Buffer.from(svgTransparent))
  .png()
  .toFile('/Users/benhardin/Downloads/bh-logo-transparent.png')

// Favicon sizes for the site (with dark fill so it shows on light browser tabs)
await sharp(Buffer.from(svgFavicon)).resize(32, 32).png().toFile('/Users/benhardin/website/public/favicon-32.png')
await sharp(Buffer.from(svgFavicon)).resize(180, 180).png().toFile('/Users/benhardin/website/public/apple-touch-icon.png')

console.log('Done!')
