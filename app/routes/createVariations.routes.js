const {Router} = require('express');
const {check, validationResult} = require('express-validator');
const router = Router();
const createVariations = require('../utils/createVariations/createVariations');

// /createVariations/create
router.post('/create',
    [
        check('snippets', 'Wrong data').notEmpty()
    ],
    async (req, res) => {
        try {
            const errors = validationResult(req);

            if (!errors.isEmpty()) {
                return res.status(400).json({errors: errors.array(), message: 'Provided wrong data'});
            }

            const {snippets} = req.body;

            await createVariations(snippets);

            res.status(200).json({message: 'ok'});

        } catch (e) {
            console.log(e)
            res.status(500).json({message: 'Something wrong with creating variations.'});
        }
    })

// /uploadGS/sheetData
// router.post('/sheetData',
//     [
//         check('id', 'Wrong Spreadsheet ID').notEmpty(),
//         check('listOfSheets', 'Wrong Sheet list. Must be a non-empty array').notEmpty().isArray({min: 1})
//     ],
//     async (req, res) => {
//         try {
//             const errors = validationResult(req)
//
//             if (!errors.isEmpty()) {
//                 return res.status(400).json({errors: errors.array(), message: 'Provided wrong data'})
//             }
//
//             const {id, listOfSheets} = req.body
//             const promiseArr = []
//             const connection = await connect()
//
//             listOfSheets.forEach(sheetName => {
//                 promiseArr.push(getSpreadsheetData(id, sheetName, connection))
//             })
//
//             const sheetsData = await Promise.all(promiseArr)
//
//             res.status(200).json({sheetsData})
//
//         } catch (e) {
//             res.status(500).json({message: 'Something wrong with getting spreadsheet data'})
//         }
//     })

module.exports = router;