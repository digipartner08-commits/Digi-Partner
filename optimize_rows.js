const fs = require('fs');
const path = require('path');

const htmlPath = path.join('d:', 'Digi Partner Website-20260307T122447Z-1-001', 'Digi Partner Website', 'index.html');
let html = fs.readFileSync(htmlPath, 'utf8');

const rowRegex = /<div class="tilted-row (left|right)">([\s\S]*?)<\/div>/g;
let matches = [];
let m;
while ((m = rowRegex.exec(html)) !== null) {
  matches.push({ full: m[0], type: m[1], content: m[2] });
}

if (matches.length > 0) {
    matches.forEach(match => {
      // Extract all tilted-items
      let items = match.content.match(/<div class="tilted-item">.*?<\/div>\s*/g) || [];
      // To ensure no duplicates from the previous script run are taken as unique, we filter out unique src's?
      // Since it was [original items] + comment + [duplicate items], we can just take first 15.
      let uniqueItems = items.slice(0, 15);
      
      let duplicatedItems = [...uniqueItems, ...uniqueItems];
      
      let newRow = `<div class="tilted-row ${match.type}">\n                    ` +
                   duplicatedItems.join('                    ') + 
                   `\n                </div>`;
      html = html.replace(match.full, newRow);
    });

    fs.writeFileSync(htmlPath, html, 'utf8');
    console.log('Successfully sliced HTML rows to 15 items + 15 duplicates (total 30 per row).');
} else {
    console.log('Could not find any tilted rows.');
}
