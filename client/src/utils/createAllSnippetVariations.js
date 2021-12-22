const createAllSnippetVariations = array => {
    const allVariants = new Map();
    const max = array.length - 1;
    const recursivePass = (objInit, string, i) => {
        for (let j = 0; j < array[i].length; j++) {
            let cloneString = string
            const cloneObj = JSON.parse(JSON.stringify(objInit))
            const name = array[i][j].elementName
            const value = array[i][j].dynamicData
            const uniqueString = array[i][j].uniqueString

            cloneObj[name] = value;
            cloneString += `|${uniqueString}`

            i === max ? allVariants.set(cloneString, cloneObj) : recursivePass(cloneObj, cloneString, i + 1);
        }
    }

    recursivePass({}, '', 0);

    return allVariants;
}

export default createAllSnippetVariations;
