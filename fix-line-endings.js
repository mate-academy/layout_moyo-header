const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'index.html');
let content = fs.readFileSync(filePath, 'utf8');
content = content.replace(/\r\n|\r|\n/g, '\r\n');
fs.writeFileSync(filePath, content, 'utf8');