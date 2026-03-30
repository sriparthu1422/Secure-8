const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src', 'pages');

function replaceDivsWithLayoutContainer(content) {
    let changed = false;
    let newContent = content;
    const regex = /<div\s+className=["'{`]?([^"'{`>]*?)max-w-7xl mx-auto px-4 sm:px-6 lg:px-8([^"'{`>]*?)["'{`]?\s*>/;

    while (true) {
        let match = regex.exec(newContent);
        if (!match) break;
        
        let startIndex = match.index;
        let matchText = match[0];
        let matchLen = matchText.length;
        
        let i = startIndex + matchLen;
        let divCount = 1;
        
        while (i < newContent.length && divCount > 0) {
            if (newContent.substring(i, i + 4) === '<div') {
                divCount++;
            } else if (newContent.substring(i, i + 5) === '</div') {
                divCount--;
                if (divCount === 0) {
                    break;
                }
            }
            i++;
        }
        
        if (divCount === 0) {
            let head = newContent.substring(0, startIndex);
            let tail = newContent.substring(i + 6); // past </div> (which is length 6)
            let middle = newContent.substring(startIndex + matchLen, i); // the content inside the matched div
            
            let preClasses = match[1].trim();
            let postClasses = match[2].trim();
            
            // Remove w-full if present
            preClasses = preClasses.replace(/w-full\s*/g, '');
            postClasses = postClasses.replace(/w-full\s*/g, '');
            
            let extraClasses = (preClasses + ' ' + postClasses).trim();
            
            // Construct replacement
            let newStartTag = `<LayoutContainer`;
            if (extraClasses) {
                newStartTag += ` className="${extraClasses}"`;
            }
            newStartTag += `>`;
            
            newContent = head + newStartTag + middle + '</LayoutContainer>' + tail;
            changed = true;
            
            // Re-apply regex from the beginning as length has changed
        } else {
             // In case of parsing mismatch, replace the match text with something else temporarily or break
             break;
        }
    }
    
    if (changed) {
        if (!newContent.includes('import LayoutContainer')) {
            const reactImportRegex = /import React.*?;\n/;
            let reactMatch = reactImportRegex.exec(newContent);
            if (reactMatch) {
                let insertIdx = reactMatch.index + reactMatch[0].length;
                newContent = newContent.substring(0, insertIdx) + 
                    `import LayoutContainer from '../components/LayoutContainer';\n` + 
                    newContent.substring(insertIdx);
            } else {
                newContent = `import LayoutContainer from '../components/LayoutContainer';\n` + newContent;
            }
        }
    }
    
    return { newContent, changed };
}

function processFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let { newContent, changed } = replaceDivsWithLayoutContainer(content);
    
    if (changed) {
        fs.writeFileSync(filePath, newContent, 'utf8');
        console.log(`Updated: ${filePath}`);
    }
}

function traverse(dir) {
    if (!fs.existsSync(dir)) return;
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            traverse(fullPath);
        } else if (fullPath.endsWith('.jsx')) {
            processFile(fullPath);
        }
    }
}

traverse(srcDir);
