const processValueBasedOnType = (objValue, objType) => {
    // this is a trick for Googlesheet APIv4 specificity => https://stackoverflow.com/questions/38442634/googlesheet-apiv4-getting-empty-cells
    if (typeof objValue === "undefined") return '';

    switch (objType) {
        case 'Boolean':
            return objValue.toLowerCase() === 'true';
        case 'Exit URL':
        case 'Image URL':
            return {Url: objValue};
        case 'DateTime':
            //2011-10-10T14:48:00.000+09:00
            //11/24/2021 00:00 (-05:00)
            //TODO parse date
            console.log(Date.parse("2021-11-24T00:00-05:00"))
            return {RawValue: objValue, UtcValue: ''};
        default:
            return objValue;
    }
}

export default processValueBasedOnType;