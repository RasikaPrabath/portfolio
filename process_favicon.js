const sharp = require('sharp');
const pngToIco = require('png-to-ico');
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
      
    // Function to create a circular image of a given size
    const createCircularImage = async (sizePx, outputPath) => {
      const circleSvg = `<svg width="${sizePx}" height="${sizePx}"><circle cx="${sizePx / 2}" cy="${sizePx / 2}" r="${sizePx / 2}" fill="white"/></svg>`;
      const circleBuffer = Buffer.from(circleSvg);
      
      const resized = await sharp(squareBuffer)
        .resize(sizePx, sizePx)
        .toBuffer();
        
      await sharp(resized)
        .composite([{
          input: circleBuffer,
          blend: 'dest-in'
        }])
        .png()
        .toFile(outputPath);
      console.log(`Created ${outputPath}`);
    };

    // Create 512x512 and 192x192 logos
    await createCircularImage(512, './public/logo512.png');
    await createCircularImage(192, './public/logo192.png');
    
    // Create 256x256 circular image for favicon to get high quality
    const faviconSize = 256;
    const circleSvg = `<svg width="${faviconSize}" height="${faviconSize}"><circle cx="${faviconSize / 2}" cy="${faviconSize / 2}" r="${faviconSize / 2}" fill="white"/></svg>`;
    const circleBuffer = Buffer.from(circleSvg);
    
    const resizedFavicon = await sharp(squareBuffer)
      .resize(faviconSize, faviconSize)
      .toBuffer();
      
    const faviconPngBuffer = await sharp(resizedFavicon)
      .composite([{
        input: circleBuffer,
        blend: 'dest-in'
      }])
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
