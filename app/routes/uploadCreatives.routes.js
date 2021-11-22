const {Router} = require('express');
const {check, validationResult} = require('express-validator');
const uploadCreatives = require("../utils/uploadCreatives/uploadCreatives");
const router = Router();

// /uploadCreatives/upload
router.post('/upload',
    [
        // check('files', 'No file uploaded').notEmpty(),
    ],
    async (req, res) => {
        try {
            //TODO add custom validators

            const folders = await uploadCreatives(req.files.files, req.body.webkitRelativePath)

            res.status(200).json({folders: folders})

        } catch (e) {
            console.log(e)
            res.status(500).json({message: 'Something wrong with loading files'})
        }
    })

module.exports = router;