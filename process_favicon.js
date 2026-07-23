const sharp = require('sharp');
const pngToIco = require('png-to-ico').default || require('png-to-ico');
const fs = require('fs');

async function processImage() {
  const inputFile = './public/profile.jpg';
  
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
      
    // Create 512x512 and 192x192 logos
    await sharp(squareBuffer).resize(512, 512).png().toFile('./public/logo512.png');
    console.log('Created ./public/logo512.png');
    
    await sharp(squareBuffer).resize(192, 192).png().toFile('./public/logo192.png');
    console.log('Created ./public/logo192.png');
    
    // Create favicon sizes
    const faviconSize = 256;
    
    const faviconPngBuffer = await sharp(squareBuffer)
      .resize(faviconSize, faviconSize)
      .png()
      .toBuffer();
      
    // Write a temporary PNG for png-to-ico
    fs.writeFileSync('./public/temp_favicon.png', faviconPngBuffer);
    
    const icoBuffer = await pngToIco('./public/temp_favicon.png');
    fs.writeFileSync('./public/favicon.ico', icoBuffer);
    console.log('Created ./public/favicon.ico');
    
    // Cleanup temp
    fs.unlinkSync('./public/temp_favicon.png');
    
    console.log('All icons generated successfully!');
  } catch (error) {
    console.error('Error processing image:', error);
  }
}

processImage();
