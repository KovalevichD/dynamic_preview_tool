const getDirectoriesInfo = require("./getDirectoriesInfo");
const fileProcessing = require("./fileProcessing");
const path = require("path");
const zipDirectory = require("./zipDirectory");

const createVariations = async (variationsObj) => {
    try {
        const destRootDir = path.join(__dirname, '../../allVariations/creatives');
        const mainJsFileName = 'initial.js'; //TODO needs to de sent from UI
        const dirsInfo = await getDirectoriesInfo(destRootDir);
        const fileProcessingPromises = fileProcessing(variationsObj, dirsInfo, mainJsFileName);

        await Promise.all(fileProcessingPromises);

        return await zipDirectory(destRootDir);
    } catch (e) {
        console.log(e);
    }
}

module.exports = createVariations;