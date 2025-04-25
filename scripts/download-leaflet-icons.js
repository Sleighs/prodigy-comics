const https = require('https');
const fs = require('fs');
const path = require('path');

const icons = [
  {
    url: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon.png',
    filename: 'marker-icon.png'
  },
  {
    url: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x.png',
    filename: 'marker-icon-2x.png'
  },
  {
    url: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-shadow.png',
    filename: 'marker-shadow.png'
  }
];

const publicImagesDir = path.join(__dirname, '../public/images');

// Create directory if it doesn't exist
if (!fs.existsSync(publicImagesDir)) {
  fs.mkdirSync(publicImagesDir, { recursive: true });
}

icons.forEach(icon => {
  const filePath = path.join(publicImagesDir, icon.filename);
  
  https.get(icon.url, (response) => {
    const fileStream = fs.createWriteStream(filePath);
    response.pipe(fileStream);
    
    fileStream.on('finish', () => {
      fileStream.close();
      console.log(`Downloaded ${icon.filename}`);
    });
  }).on('error', (err) => {
    console.error(`Error downloading ${icon.filename}: ${err.message}`);
  });
}); 