const path = require('path');
const fs = require('fs-extra');

const uploadCreatives = async (files, webkitRelativePath) => {
    try {
        const rootFolder = path.join(__dirname, '../../uploads');
        const uploadedFiles = {};

        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            const fileName = file.name;
            const inputPath = webkitRelativePath[i];
            const fileNameIndex = inputPath.indexOf(fileName);
            const folder = inputPath.slice(0, fileNameIndex - 1);
            const pathToSave = path.join(rootFolder, folder);

            await fs.ensureDirSync(pathToSave);
            await file.mv(path.join(pathToSave + '/' + fileName))

            const splittedFolder = folder.split('/');
            const creativeFolder = splittedFolder[splittedFolder.length - 1];

            uploadedFiles.hasOwnProperty(creativeFolder)
                ? uploadedFiles[creativeFolder].push(fileName)
                : uploadedFiles[creativeFolder] = [fileName];
        }

        return uploadedFiles;
    } catch (e) {
        console.error(e)
    }
}

module.exports = uploadCreatives;
