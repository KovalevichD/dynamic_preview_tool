const archiver = require('archiver');
const fs = require("fs");
const path = require("path");

const zipDirectory = (destRootDir) => {
    const archive = archiver('zip', {zlib: {level: 9}});
    const archivePath = path.join(destRootDir, '../creatives.zip');
    const stream = fs.createWriteStream(archivePath);

    return new Promise((resolve, reject) => {
        archive
            .directory(destRootDir, false)
            .on('error', err => reject(err))
            .pipe(stream);

        stream.on('close', () => resolve());
        archive.finalize()
    });
}

module.exports = zipDirectory;
