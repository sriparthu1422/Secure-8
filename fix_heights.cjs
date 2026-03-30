const fs = require('fs');
const path = require('path');
const srcDir = path.join(__dirname, 'src');

function traverse(dir) {
    if (!fs.existsSync(dir)) return;
    for (const file of fs.readdirSync(dir)) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) traverse(fullPath);
        else if (fullPath.endsWith('.jsx')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let orig = content;
            
            // Fix Typography Paragraphs: text-slate-400 (or others) -> text-sm sm:text-base lg:text-lg text-slate-400
            content = content.replace(/className=\"([^\"]*?text-slate-[34]00[^\"]*?)\"/g, (match, classes) => {
                if(!classes.includes('text-sm') && !classes.includes('text-base') && !classes.includes('text-lg') && !classes.includes('text-xl') && !classes.includes('text-xs')) {
                    return `className="${classes.trim()} text-sm sm:text-base lg:text-lg"`;
                }
                return match;
            });

            // Fix Heights: h-[200px], h-[300px], h-[400px], h-[500px], h-[600px] -> min-h-[___]
            content = content.replace(/h-\[(1[0-9]{2}|[2-9][0-9]{2})px\]/g, 'min-h-[$1px] w-full');
            
            // Fix w-screen and w-[100vw]
            content = content.replace(/w-screen/g, 'w-full');
            content = content.replace(/w-\[100vw\]/g, 'w-full');
            
            // Fix height on components Hero and others.
            content = content.replace(/lg:min-h-\[calc\(100vh-6rem\)\]/g, 'min-h-[calc(100vh-6rem)] w-full');

            if (content !== orig) {
                fs.writeFileSync(fullPath, content, 'utf8');
                console.log('Fixed:', fullPath);
            }
        }
    }
}
traverse(srcDir);
