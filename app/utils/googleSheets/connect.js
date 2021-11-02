const { google } = require("googleapis");
const config = require('config')

const client_email = config.get('googleAPI_client_email')
const private_key = config.get('googleAPI_private_key')

const connect = async () => {
    try {
        const client = new google.auth.JWT(
            client_email,
            null,
            private_key,
            ["https://www.googleapis.com/auth/spreadsheets"]
        );

        await client.authorize();

        const connection = google.sheets({
            version: "v4",
            auth: client,
        });

        console.log('Connected to Google Spreadsheets')

        return connection;
    } catch (e) {
        console.error(e.message)
    }
};

module.exports = connect;