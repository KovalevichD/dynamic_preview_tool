const {Router} = require('express');
const {check, validationResult} = require('express-validator');
const router = Router();
const createVariations = require('../utils/createVariations/createVariations');
const path = require("path");
const clearDirectory = require("../utils/createVariations/clearDirectory");

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

            await clearDirectory();

            const fileName = await createVariations(snippets);

            res.status(200).json({fileName});
        } catch (e) {
            console.log(e)
            res.status(500).json({message: 'Something wrong with creating variations.'});
        }
    })

// /createVariations/download
router.get('/download',
    async (req, res) => {
        try {
            const filePath = path.join(__dirname, '../allVariations/creatives.zip');

            res.download(filePath);

        } catch (e) {
            res.status(500).json({message: 'Something wrong with downloading data.'})
        }
    })

// /createVariations/delete
router.delete('/delete',
    async (req, res) => {
        try {
            await clearDirectory();

            res.status(200).json({message: 'The directory with all variations was successfully reset.'});

        } catch (e) {
            res.status(500).json({message: 'Something wrong with removing data.'})
        }
    })

module.exports = router;