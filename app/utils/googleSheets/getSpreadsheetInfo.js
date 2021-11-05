const getSpreadsheetInfo = async (spreadsheetUrl, spreadsheetId, connection) => {
    try {
        const sheetData = await connection.spreadsheets.get({
            spreadsheetId: spreadsheetId
        })

        console.log(sheetData.data.properties.title)
        const spreadsheetName = sheetData.data.properties.title
        const listOfSheets = sheetData.data.sheets.map((sheet) => sheet.properties.title)

        return {
            spreadsheetId,
            spreadsheetName,
            listOfSheets,
            spreadsheetUrl
        }
    } catch (e) {
        console.error(e.message)
    }
}

module.exports =  getSpreadsheetInfo