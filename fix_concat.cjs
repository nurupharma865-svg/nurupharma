const fs = require('fs');
let lines = fs.readFileSync('public/app.html', 'utf8').split('\n');
let fixCount = 0;

lines = lines.map((line, i) => {
    // Only fix lines with JS string concatenation (contain ' + ')
    if (!line.includes(' + ')) return line;
    
    // On these lines, convert ='...' back to ="..." 
    // These are JS string delimiters that were wrongly converted
    const fixed = line.replace(/='([^']*)'/g, (match, p1) => {
        fixCount++;
        return '="' + p1 + '"';
    });
    return fixed;
});

fs.writeFileSync('public/app.html', lines.join('\n'));
console.log('Fixed ' + fixCount + ' patterns on concatenation lines');
