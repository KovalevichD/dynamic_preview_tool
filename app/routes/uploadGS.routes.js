const {Router} = require('express');
const {check, validationResult} = require('express-validator');
const getSpreadsheetInfo = require("../utils/googleSheets/getSpreadsheetInfo");
const getSpreadsheetData = require("../utils/googleSheets/getSpreadsheetData");
const connect = require('../utils/googleSheets/connect');
const router = Router();

// /uploadGS/sheetInfo
router.post('/sheetInfo',
    [
        check('url', 'Wrong URL').isURL()
    ],
    async (req, res) => {
        try {
            const errors = validationResult(req)

            if (!errors.isEmpty()) {
                return res.status(400).json({errors: errors.array(), message: 'Provided wrong URL'})
            }

            const {url} = req.body
            const spreadsheetId = new RegExp("/spreadsheets/d/([a-zA-Z0-9-_]+)").exec(url)[1];
            const connection = await connect()
            const spreadsheetInfo = await getSpreadsheetInfo(url, spreadsheetId, connection)
            // const data = await getData(url, spreadsheetId, connection)

            res.status(200).json({spreadsheetInfo})

        } catch (e) {
            res.status(500).json({message: 'Something wrong with uploading GS'})
        }
    })

// /uploadGS/sheetData
router.post('/sheetData',
    [
        check('id', 'Wrong Spreadsheet ID').notEmpty(),
        check('listOfSheets', 'Wrong Sheet list. Must be a non-empty array').notEmpty().isArray({min: 1})
    ],
    async (req, res) => {
        try {
            const errors = validationResult(req)

            if (!errors.isEmpty()) {
                return res.status(400).json({errors: errors.array(), message: 'Provided wrong data'})
            }

            const {id, listOfSheets} = req.body
            const promiseArr = []
            const connection = await connect()

            listOfSheets.forEach(sheetName => {
                promiseArr.push(getSpreadsheetData(id, sheetName, connection))
            })

            const sheetsData = await Promise.all(promiseArr)

            res.status(200).json({sheetsData})

        } catch (e) {
            res.status(500).json({message: 'Something wrong with getting spreadsheet data'})
        }
    })

module.exports = router;