const fs = require('fs');
const path = require('path');

const srcDirs = [
    path.join(__dirname, 'src', 'components'),
    path.join(__dirname, 'src', 'pages'),
    path.join(__dirname, 'src', 'layout')
];

function processFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalDetails = content;

    // RULE 1: Spacing System (py)
    content = content.replace(/py-16 md:py-20 lg:py-24/g, 'py-12 sm:py-16 lg:py-20');
    content = content.replace(/py-12 lg:py-24/g, 'py-12 sm:py-16 lg:py-20');
    content = content.replace(/py-24/g, 'py-12 sm:py-16 lg:py-20');

    // RULE 2: Container System
    content = content.replace(/container mx-auto px-4/g, 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8');
    content = content.replace(/container mx-auto/g, 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8');

    // RULE 3: Gap system
    content = content.replace(/gap-8/g, 'gap-6 lg:gap-8');
    // Revert if it became gap-6 lg:gap-6 lg:gap-8
    content = content.replace(/gap-6 lg:gap-6 lg:gap-8/g, 'gap-6 lg:gap-8');
    
    // RULE 4: Cards equal height (flex flex-col h-full)
    // We already checked Cards.jsx and it has flex flex-col h-full.
    
    // RULE 5: Text sizes
    content = content.replace(/text-3xl md:text-4xl/g, 'text-2xl sm:text-3xl lg:text-4xl');

    // Remove overflow-x-hidden from anywhere but MainLayout is already done
    content = content.replace(/overflow-x-hidden/g, '');

    if (content !== originalDetails) {
        fs.writeFileSync(filePath, content, 'utf8');
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

srcDirs.forEach(traverse);
console.log('Refactoring complete.');
