const path = require('path');
const fs = require('fs-extra');

const uploadCreatives = async () => {
    try {
        const rootFolder = path.join(__dirname, '../../uploads');

        await fs.remove(rootFolder);
    } catch (e) {
        console.error(e);
    }
}

module.exports = uploadCreatives;
