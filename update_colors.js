import fs from 'fs';
import path from 'path';

const srcDir = 'd:/secure 8/cyber-landing/src';

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        if (isDirectory) {
            walkDir(dirPath, callback);
        } else {
            callback(path.join(dir, f));
        }
    });
}

walkDir(srcDir, function (filePath) {
    if (filePath.endsWith('.jsx')) {
        let raw = fs.readFileSync(filePath, 'utf8');
        let mod = raw;

        // Replace hardcoded blue RBGA with Neon Green RGBA for shadows
        mod = mod.replace(/rgba\(59,\s*130,\s*246/g, 'rgba(57, 255, 136');
        mod = mod.replace(/rgba\(59,130,246/g, 'rgba(57, 255, 136');
        // Replace primary button hover hover:bg-blue-600 => hover:bg-[#0E6B3A]
        mod = mod.replace(/hover:bg-blue-600/g, 'hover:bg-[#0E6B3A]');
        // Also from-accent-blue/10 -> from-accent-blue/10 is fine since we remapped it in css

        if (mod !== raw) {
            fs.writeFileSync(filePath, mod, 'utf8');
            console.log('Updated: ' + filePath);
        }
    }
});
console.log('Done replacement');
