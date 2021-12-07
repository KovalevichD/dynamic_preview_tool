const archiver = require('archiver');
const fs = require("fs");
const path = require("path");

const zipDirectory = (destRootDir) => {
    const archive = archiver('zip', {zlib: {level: 9}});
    const archiveName = 'creatives.zip';
    const archivePath = path.join(destRootDir, `../${archiveName}`);
    const stream = fs.createWriteStream(archivePath);

    return new Promise((resolve, reject) => {
        archive
            .directory(destRootDir, false)
            .on('error', err => reject(err))
            .pipe(stream);

        stream.on('close', () => resolve(archiveName));
        archive.finalize()
    });
}

module.exports = zipDirectory;
