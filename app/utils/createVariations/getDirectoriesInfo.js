const path = require("path");
const glob = require("glob");

const getDirectoriesInfo = (destRootDir) => {
    return new Promise(async (resolve, reject) => {
        const pattern = path.join(__dirname, '../../uploads/**/initial.js');

        try {
            await glob(pattern, (err, files) => {
                const srcDirPaths = [];

                files.forEach(file => {
                    const pathsObj = {}
                    const splittedFileName = file.split('/');
                    const size = splittedFileName[splittedFileName.length - 2];
                    const srcDirArr = splittedFileName.slice(0, -1);
                    const srcDirPath = srcDirArr.join('/');
                    const destDir = path.join(destRootDir, size);

                    pathsObj.source = srcDirPath;
                    pathsObj.destination = destDir;
                    pathsObj.size = size;
                    srcDirPaths.push(pathsObj);
                });
                resolve(srcDirPaths);
            });
        } catch (e) {
            reject(e);
        }
    })
}

module.exports = getDirectoriesInfo;