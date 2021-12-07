import {spreadsheetAPI} from "../../api/api";
import {addData} from "./dynamicDataReducer";

const ADD_LIST_OF_SHEETS_TO_UPLOAD = 'ADD_LIST_OF_SHEETS_TO_UPLOAD';
const UPDATE_URL_INPUT_TEXT = 'UPDATE_URL_INPUT_TEXT';
const TOGGLE_IS_FETCHING_UPLOAD_GS = 'TOGGLE_IS_FETCHING_UPLOAD_GS';
const SET_TYPE = 'SET_TYPE';
const RESET_DATA = 'RESET_DATA';
const SET_SHEET_INFO = 'SET_SHEET_INFO';

const initialState = {
    urlInputText: '',
    spreadsheetUrl: null,
    spreadsheetName: null,
    spreadsheetId: null,
    isFetching: false,
    totalListOfSheets: [],
    listOfSheetsToUpload: []
}

const uploadGSReducer = (state = initialState, action) => {
    switch (action.type) {
        case RESET_DATA:
            return initialState
        case ADD_LIST_OF_SHEETS_TO_UPLOAD:
            return {
                ...state,
                listOfSheetsToUpload: [...action.listToUpload]
            }
        case UPDATE_URL_INPUT_TEXT:
            return {
                ...state,
                urlInputText: action.newText
            }
        case TOGGLE_IS_FETCHING_UPLOAD_GS:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case SET_SHEET_INFO:
            return {
                ...state,
                urlInputText: '',
                spreadsheetId: action.info.spreadsheetId,
                spreadsheetName: action.info.spreadsheetName,
                spreadsheetUrl: action.info.spreadsheetUrl,
                listOfSheetsToUpload: [...action.info.listOfSheets],
                totalListOfSheets: [...action.info.listOfSheets]
            }
        default:
            return state
    }
}
export const updateUrlInputText = (textStr) => ({type: UPDATE_URL_INPUT_TEXT, newText: textStr});
export const addListOfSheetsToUpload = (arrList) => ({type: ADD_LIST_OF_SHEETS_TO_UPLOAD, listToUpload: arrList});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING_UPLOAD_GS, isFetching: isFetching});
export const setType = (typeInfoObj) => ({type: SET_TYPE, typeInfo: typeInfoObj});
export const resetGsData = () => ({type: RESET_DATA});
export const setSheetInfo = (infoObj) => ({type: SET_SHEET_INFO, info: infoObj});

export const getSheetList = (urlInputText) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true));

        const spreadsheetInfo = await spreadsheetAPI.getSheetList(urlInputText);

        dispatch(setSheetInfo(spreadsheetInfo.data.spreadsheetInfo));
        dispatch(toggleIsFetching(false));
    }
}

export const getSheetsData = (spreadsheetId, listOfSheetsToUpload) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true));

        const spreadsheetData = await spreadsheetAPI.getSheetsData(spreadsheetId, listOfSheetsToUpload);

        dispatch(toggleIsFetching(false));
        dispatch(addData(spreadsheetData.data.sheetsData));
    }
}

export default uploadGSReducer;