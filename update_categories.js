const fs = require('fs');
const path = require('path');

const htmlPath = path.join('d:', 'Digi Partner Website-20260307T122447Z-1-001', 'Digi Partner Website', 'portfolio.html');
let htmlContent = fs.readFileSync(htmlPath, 'utf8');

// 1. Remove Digi filter button
htmlContent = htmlContent.replace('<button class="filter-btn" data-filter="digi">Digi</button>', '');

// 2. We need to parse all <div class="p-card reveal" data-category="digi">
// and replace data-category="digi" with "Catring" for "The matki" and "real-estate" for the rest.
// We also need to replace <span class="p-cat">Digi</span> with "Catering" and "Real Estate".

// We can do this with Regex or string manipulation.
// A safe way is to split by p-card blocks or use a global replace function.

htmlContent = htmlContent.replace(/<div class="p-card reveal" data-category="digi">([\s\S]*?)<\/div>\s*<\/div>/g, (match, innerHtml) => {
    let newCategory = 'real-estate';
    let newLabel = 'Real Estate';
    
    if (innerHtml.includes('The matki')) {
        newCategory = 'Catring';
        newLabel = 'Catering';
    }
    
    // Replace data-category in the outer div. Since match includes the outer div, we can just replace 'digi'
    let newMatch = match.replace('data-category="digi"', `data-category="${newCategory}"`);
    newMatch = newMatch.replace('<span class="p-cat">Digi</span>', `<span class="p-cat">${newLabel}</span>`);
    
    return newMatch;
});

fs.writeFileSync(htmlPath, htmlContent, 'utf8');
console.log("Categories updated.");
