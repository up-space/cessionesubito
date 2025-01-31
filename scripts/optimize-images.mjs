import imagemin from 'imagemin';
import imageminWebp from 'imagemin-webp';
import { promises as fs } from 'fs';
import path from 'path';

const QUALITY = 80; // Good balance between quality and size
const PUBLIC_DIR = './public';

async function optimizeImages() {
  try {
    // Get all image files
    const files = await fs.readdir(PUBLIC_DIR);
    const imageFiles = files.filter(file => 
      /\.(jpg|jpeg|png)$/i.test(file)
    );

    // Process each image
    for (const file of imageFiles) {
      const inputPath = path.join(PUBLIC_DIR, file);
      const outputPath = path.join(PUBLIC_DIR, path.dirname(file));
      
      console.log(`Converting ${file} to WebP...`);
      
      await imagemin([inputPath], {
        destination: outputPath,
        plugins: [
          imageminWebp({
            quality: QUALITY,
            method: 6, // Highest compression method
          })
        ]
      });
    }

    console.log('✅ All images have been optimized and converted to WebP!');
  } catch (error) {
    console.error('Error optimizing images:', error);
  }
}

optimizeImages(); 