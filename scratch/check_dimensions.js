const fs = require('fs');

try {
  const fd = fs.openSync('c:/Users/ASUS/AppData/Local/CapCut/Videos/New folder/portfolio/public/profile.jpg', 'r');
  const buffer = Buffer.alloc(24);
  fs.readSync(fd, buffer, 0, 24, 0);
  fs.closeSync(fd);
  
  if (buffer[0] === 0x89 && buffer[1] === 0x50 && buffer[2] === 0x4E && buffer[3] === 0x47) {
    const width = buffer.readUInt32BE(16);
    const height = buffer.readUInt32BE(20);
    console.log('PNG dimensions:', { width, height });
  } else {
    console.log('Not a valid PNG');
  }
} catch (e) {
  console.error('Error:', e.message);
}


