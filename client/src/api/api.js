import axios from 'axios';

const instanceSpreadsheet = axios.create({
    headers: {
        'Content-Type': 'application/json'
    }
});

export const spreadsheetAPI = {
    getSheetList(url) {
        return instanceSpreadsheet.post('/uploadGS/sheetInfo', {url})
    },
    getSheetsData(id, listOfSheets) {
        return instanceSpreadsheet.post('/uploadGS/sheetData', {id, listOfSheets})
    }
};

export const uploadCreativesAPI = {
    uploadFiles(files) {
        return axios.post('/uploadCreatives/upload', files, {headers: {'Content-Type': 'multipart/form-data'}})
    },
    deleteFiles() {
        return axios.delete('/uploadCreatives/delete')
    }
};

export const createAllVariationsAPI = {
    createVariations(snippets) {
        return axios.post('/createVariations/create', {snippets}, {headers: {'Content-Type': 'application/json'}})
    },
    downloadArchive() {
        return axios.get('/createVariations/download', {responseType: 'blob'})
    }
};

