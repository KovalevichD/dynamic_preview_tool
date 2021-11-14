const random = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getRandomRowIndexes = (initialIndex, quantity, elementLastIndex) => {
    const randomRowIndexes = [initialIndex];
    const indexesMap = new Set();

    indexesMap.add(initialIndex);

    while (randomRowIndexes.length < quantity) {
        const randomIndex = random(1, elementLastIndex);

        if (!indexesMap.has(randomIndex)) randomRowIndexes.push(randomIndex);
        indexesMap.add(randomIndex);
    }
    return randomRowIndexes;
}

export default getRandomRowIndexes;