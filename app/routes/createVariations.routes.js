const {Router} = require('express');
const {check, validationResult} = require('express-validator');
const router = Router();
const createVariations = require('../utils/createVariations/createVariations');
const path = require("path");

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

// /createVariations/download
router.get('/download',
    async (req, res) => {
        try {
            const filePath = path.join(__dirname, '../allVariations/creatives.zip');
            res.download(filePath);
            // res.status(200).json({message: 'downloaded'})

        } catch (e) {
            res.status(500).json({message: 'Something wrong with downloading data.'})
        }
    })

module.exports = router;