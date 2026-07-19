const fs = require('fs');
const path = require('path');

const publicDir = 'c:/Users/ASUS/AppData/Local/CapCut/Videos/New folder/portfolio/public';
const sourceFile = path.join(publicDir, 'profile.jpg');

const destinations = [
  path.join(publicDir, 'favicon.ico'),
  path.join(publicDir, 'logo192.png'),
  path.join(publicDir, 'logo512.png')
];

try {
  destinations.forEach(dest => {
    fs.copyFileSync(sourceFile, dest);
    console.log(`Successfully copied profile.jpg to ${path.basename(dest)}`);
  });
  console.log('All icons generated successfully!');
} catch (e) {
  console.error('Error copying icons:', e.message);
}
