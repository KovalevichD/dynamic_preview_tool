const fsExtra = require("fs-extra");
const path = require("path");
const fs = require("fs");

const fileProcessing = (variationsObj, dirsInfo, mainJsFileName) => {
    const promisesArr = [];

    for (const dirInfo of dirsInfo) {
        const {source, destination, size} = dirInfo;

        fsExtra.ensureDirSync(destination);

        for (const variation in variationsObj) {
            const promise = new Promise(async (resolve, reject) => {
                const snippet = variationsObj[variation];
                const destVariation = path.join(destination, variation + `_${size}`);
                const jsFilePath = path.join(destVariation, mainJsFileName);

                fsExtra.copySync(source, destVariation);

                const data = fs.readFileSync(jsFilePath);
                const codeString = 'var devDynamicContent = '
                    + JSON.stringify(snippet, null, "\t")
                    + '\nEnabler.setDevDynamicContent(devDynamicContent);\n';

                fs.writeFileSync(jsFilePath, codeString + data);

                resolve();
            })
            promisesArr.push(promise);
        }
    }

    return promisesArr;
}

module.exports = fileProcessing;