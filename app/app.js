const express = require('express')
const config = require('config')
const uploadGS = require('./routes/uploadGS.routes')

const app = express()

app.use(express.json({extended: true}))
app.use('/uploadGS', uploadGS)

const PORT = config.get('port') || 5000

app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`))