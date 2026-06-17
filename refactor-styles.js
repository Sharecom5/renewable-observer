const fs = require('fs');
const path = require('path');

const walkSync = (dir, filelist = []) => {
  fs.readdirSync(dir).forEach(file => {
    const dirFile = path.join(dir, file);
    try {
      filelist = walkSync(dirFile, filelist);
    } catch (err) {
      if (err.code === 'ENOTDIR' || err.code === 'EBADF') filelist.push(dirFile);
      else throw err;
    }
  });
  return filelist;
};

const files = walkSync('./src/app').filter(f => f.endsWith('.tsx'));

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  // Remove heavily rounded corners
  content = content.replace(/rounded-(2xl|3xl|xl|full)/g, '');
  
  // Remove shadows
  content = content.replace(/shadow-(sm|md|lg)/g, '');
  content = content.replace(/shadow-sm/g, '');
  
  // Replace tinted backgrounds with transparent or white (which is default bg-background)
  content = content.replace(/bg-muted/g, 'bg-background border-y border-border');
  content = content.replace(/bg-primary\/5/g, 'bg-background border-t-4 border-t-primary border-x border-b border-border');
  content = content.replace(/bg-card/g, 'bg-background');

  // Fix multiple spaces that might result from replacing with empty string
  content = content.replace(/ {2,}/g, ' ');

  if (content !== original) {
    fs.writeFileSync(file, content);
    console.log(`Updated ${file}`);
  }
});
