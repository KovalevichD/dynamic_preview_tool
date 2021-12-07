const path = require('path');
const fs = require('fs-extra');

const clearDirectory = async () => {
    try {
        const rootFolder = path.join(__dirname, '../../allVariations');

        await fs.remove(rootFolder);
    } catch (e) {
        console.error(e);
    }
}

module.exports = clearDirectory;
