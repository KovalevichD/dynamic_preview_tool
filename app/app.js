const express = require('express')
const fileUpload = require('express-fileupload');
const config = require('config')
const uploadGS = require('./routes/uploadGS.routes')
const uploadCreatives = require('./routes/uploadCreatives.routes')

const app = express()

app.use(express.json({extended: true}))
app.use(fileUpload());
app.use('/uploadGS', uploadGS)
app.use('/uploadCreatives', uploadCreatives)

const PORT = config.get('port') || 5000

app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`))