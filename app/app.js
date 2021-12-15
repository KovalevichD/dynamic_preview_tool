const express = require('express');
const fileUpload = require('express-fileupload');
const config = require('config');
const uploadGS = require('./routes/uploadGS.routes');
const uploadCreatives = require('./routes/uploadCreatives.routes');
const createVariations = require('./routes/createVariations.routes');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, '../client/build')));

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});
app.use(express.json({limit: '50mb', extended: true}));
app.use(fileUpload());
app.use('/uploadGS', uploadGS);
app.use('/uploadCreatives', uploadCreatives);
app.use('/createVariations', createVariations);

const PORT = config.get('port') || 5000;

app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`));