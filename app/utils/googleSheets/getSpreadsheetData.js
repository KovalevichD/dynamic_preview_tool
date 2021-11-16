const getSpreadsheetData = async (sheetId, sheetName, connection) => {
    const options = {
        spreadsheetId: sheetId,
        range: sheetName
    }

    const data = await connection.spreadsheets.values.get(options)
    return {
        element: sheetName,
        data: data.data.values
    }
};

module.exports = getSpreadsheetData;