import axios from 'axios';

const instance = axios.create({
    headers: {
        'Content-Type': 'application/json'
    }
});

export const getSheetsList = async (url) => {
    return await instance.post('/uploadGS/sheetInfo', {url})
}

export const getSheetsData = async (id, listOfSheets) => {
    return await instance.post('/uploadGS/sheetData', {id, listOfSheets})
}

