const fs = require('fs');
for (const file of ['index.html','src/styles.css','src/app.js']) {
  if (!fs.existsSync(file) || fs.statSync(file).size === 0) throw new Error(`${file} is missing or empty`);
}
console.log('Static application files validated.');
