const fs = require('fs');
let content = fs.readFileSync('public/app.html', 'utf8');

// Fix HTML attributes: ="value" -> ='value'
// This is safe because:
// - In JS, assignment always has a space: = "foo" (won't match)
// - In HTML attributes: style="..." -> style='...' (valid HTML)
// - Already-escaped quotes \" are not affected (=\" has backslash before ")
content = content.replace(/="([^"]*)"/g, "='$1'");

fs.writeFileSync('public/app.html', content);

// Count remaining issues
const remaining = (content.match(/="[^"]*"/g) || []).length;
console.log('Fixed. Remaining =" patterns:', remaining);
