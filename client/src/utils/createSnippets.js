import getRandomRowIndexes from "./getRandomRowIndexes";
import processValueBasedOnType from "./processValueBasedOnType";
import createAllSnippetVariations from "./createAllSnippetVariations";

const createSnippets = (data) => {
    const snippets = [];

    data.forEach(element => {
        const elementTitles = element.data[0];
        const elementName = element.elementName;
        const quantity = element.quantity;
        const types = element.selectedTypes;
        const elementSnippets = [];

        for (let i = 1; i < element.data.length; i++) {
            const devDynamicContent = {dynamicData: [], uniqueString: '', elementName};
            const randomRowIndexes = getRandomRowIndexes(i, quantity, element.data.length - 1);

            for (let j = 0; j < quantity; j++) {
                const elementObj = {};
                const rowIndex = randomRowIndexes[j];

                for (let k = 0; k < types.length; k++) {
                    const objValue = element.data[rowIndex][k];
                    const objType = types[k];

                    elementObj[elementTitles[k]] = processValueBasedOnType(objValue, objType)
                }

                devDynamicContent.dynamicData.push(elementObj);
            }
            devDynamicContent.uniqueString = `${elementName}(${element.data[i][0]})`
            elementSnippets.push(devDynamicContent);
        }
        snippets.push(elementSnippets);
    })
    return createAllSnippetVariations(snippets)
}
export default createSnippets;