import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const publicDir = './public';
const files = fs.readdirSync(publicDir);

console.log('Starting image compression...');

for (const file of files) {
  if (file.endsWith('.jpg') || file.endsWith('.jpeg') || file.endsWith('.png')) {
    const filePath = path.join(publicDir, file);
    const statBefore = fs.statSync(filePath);
    
    // Read buffer
    const buffer = fs.readFileSync(filePath);
    
    try {
      const compressedBuffer = await sharp(buffer)
        .resize({ width: 1200, height: 1200, fit: 'inside', withoutEnlargement: true })
        .jpeg({ quality: 80, mozjpeg: true })
        .toBuffer();
      
      fs.writeFileSync(filePath, compressedBuffer);
      const statAfter = fs.statSync(filePath);
      
      const beforeKB = (statBefore.size / 1024).toFixed(1);
      const afterKB = (statAfter.size / 1024).toFixed(1);
      const saved = ((1 - statAfter.size / statBefore.size) * 100).toFixed(1);
      
      console.log(`✓ ${file}: ${beforeKB} KB -> ${afterKB} KB (${saved}% smaller)`);
    } catch (err) {
      console.error(`Error compressing ${file}:`, err.message);
    }
  }
}

console.log('All images optimized successfully!');
