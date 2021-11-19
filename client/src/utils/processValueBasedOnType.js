const processValueBasedOnType = (objValue, objType) => {
    // this is a trick for Googlesheet APIv4 specificity => https://stackoverflow.com/questions/38442634/googlesheet-apiv4-getting-empty-cells
    if (typeof objValue === "undefined") return '';

    try {
        switch (objType) {
            case 'Boolean':
                if (objValue.toLowerCase() === 'true' || objValue.toLowerCase() === 'false') {
                    return objValue.toLowerCase() === 'true';
                } else {
                    throw new Error('The value is not a boolean')
                }
            case 'Exit URL':
            case 'Image URL':
                return {Url: objValue};
            case 'DateTime':
                const splitRawDateTime = objValue.split(' ');
                const splitDate = splitRawDateTime[0].split('/');
                const formattedDate = `${splitDate[2]}-${splitDate[0]}-${splitDate[1]}`;
                const time = `T${splitRawDateTime[1]}`;
                const timeZone = splitRawDateTime[2].substring(1, splitRawDateTime[2].length - 1);
                const isoFormatDate = formattedDate + time + timeZone;
                const parsedDate = Date.parse(isoFormatDate);

                return {RawValue: objValue, UtcValue: parsedDate};
            default:
                return objValue;
        }
    } catch (e) {
        return objValue;
    }

}

export default processValueBasedOnType;
