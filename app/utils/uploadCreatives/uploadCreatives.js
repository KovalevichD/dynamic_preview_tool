const path = require('path');
const fs = require('fs-extra');

const uploadCreatives = async (files, webkitRelativePath) => {
    //TODO return error if file was uploaded instead of folder
    const foldersStr = [];

    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const fileName = file.name;
        const inputPath = webkitRelativePath[i];
        const fileNameIndex = inputPath.indexOf(fileName);
        let folders = null;

        if (fileNameIndex !== 0) folders = inputPath.slice(0, fileNameIndex - 1)
        foldersStr.push(folders)
        const pathToSave = path.join(__dirname, '../../uploadedCreatives', folders)

        await fs.ensureDirSync(pathToSave);
        await file.mv(path.join(pathToSave + '/' + fileName))
    }
    return foldersStr;
}

module.exports = uploadCreatives;
