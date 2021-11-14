import store from '../redux/store';
import getRandomRowIndexes from "./getRandomRowIndexes";

const createSnippets = () => {
    const data = store.getState().uploadGS.sheetData;
    const snippets = [];

    data.forEach(element => {
        const elementTitles = element.data[0];
        const elementName = element.elementName;
        const quantity = element.quantity;
        const elementSnippets = [];

        for (let i = 1; i < element.data.length; i++) {
            const devDynamicContent = {[elementName]: []};
            const randomRowIndexes = getRandomRowIndexes(i, quantity, element.data.length - 1);

            for (let j = 0; j < quantity; j++) {
                const elementObj = {};
                const rowIndex = randomRowIndexes[j];

                for (let k = 0; k < element.data[i].length; k++) {
                    elementObj[elementTitles[k]] = element.data[rowIndex][k];
                }

                devDynamicContent[elementName].push(elementObj);
            }
            elementSnippets.push(devDynamicContent);
        }
        snippets.push(elementSnippets);
    })
    return snippets;
}

export default createSnippets;