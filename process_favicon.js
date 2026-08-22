const sharp = require('sharp');
const fs = require('fs');

async function processImage() {
  const inputFile = './public/profile_zoomed.jpg';
  
  try {
    const metadata = await sharp(inputFile).metadata();
    const size = Math.min(metadata.width, metadata.height);
    
    // First, crop a center square
    const squareBuffer = await sharp(inputFile)
      .extract({
        left: Math.floor((metadata.width - size) / 2),
        top: Math.floor((metadata.height - size) / 2),
        width: size,
        height: size
      })
      .toBuffer();
      
    // Create a circular SVG mask and apply it
    const circleSvg = `<svg width="${size}" height="${size}"><circle cx="${size/2}" cy="${size/2}" r="${size/2}" fill="#000" /></svg>`;
    const circleBuffer = await sharp(squareBuffer)
      .composite([{ input: Buffer.from(circleSvg), blend: 'dest-in' }])
      .png()
      .toBuffer();
      
    // Generate icons of various sizes
    const sizes = [
      { size: 512, path: './public/logo512.png' },
      { size: 192, path: './public/logo192.png' },
      { size: 180, path: './public/apple-touch-icon.png' },
      { size: 144, path: './public/favicon-144.png' },
      { size: 96, path: './public/favicon-96.png' },
      { size: 48, path: './public/favicon-48.png' },
      { size: 32, path: './public/favicon-32.png' }
    ];

    for (const item of sizes) {
      await sharp(circleBuffer)
        .resize(item.size, item.size, { fit: 'cover' })
        .png()
        .toFile(item.path);
      console.log(`Created ${item.path}`);
    }
      
    // Create favicon.ico (256x256 PNG format inside .ico file, universally supported)
    await sharp(circleBuffer)
      .resize(256, 256, { fit: 'cover' })
      .png()
      .toFile('./public/favicon.ico');
    console.log('Created ./public/favicon.ico');

    console.log('All zoomed headshot icons generated successfully!');
  } catch (error) {
    console.error('Error processing image:', error);
  }
}

processImage();


