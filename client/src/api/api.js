import axios from 'axios';

const instance = axios.create({
    headers: {
        'Content-Type': 'application/json'
    }
});

const instance2 = axios.create({
    headers: {
        'Content-Type': 'multipart/form-data'
    }
});

export const getSheetsList = async (url) => {
    return await instance.post('/uploadGS/sheetInfo', {url})
}

export const getSheetsData = async (id, listOfSheets) => {
    return await instance.post('/uploadGS/sheetData', {id, listOfSheets})
}

export const uploadFile = async (file) => {
    return await instance2.post('/uploadCreatives/upload', {file})
}

