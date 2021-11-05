const ADD_LIST_OF_SHEETS_TO_UPLOAD = 'ADD_LIST_OF_SHEETS_TO_UPLOAD';
const UPDATE_URL_INPUT_TEXT = 'UPDATE_URL_INPUT_TEXT';
const ADD_SHEET_DATA = 'ADD_SHEET_DATA';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const SET_TYPE = 'SET_TYPE';
const SET_QUANTITY = 'SET_QUANTITY';
const UPDATE_ELEMENT_NAME = 'UPDATE_ELEMENT_NAME';
const SET_DATA_READY_FLAG = 'SET_DATA_READY_FLAG';
const RESET_DATA = 'RESET_DATA';


const SET_SHEET_INFO = 'SET_SHEET_INFO';

const initialState = {
    isDataReady: false,
    urlInputText: '',
    spreadsheetUrl: null,
    spreadsheetName: null,
    spreadsheetId: null,
    isFetching: false,
    totalListOfSheets: [],
    listOfSheetsToUpload: [],
    sheetData: [],
    listOfTypes: ['text', 'boolean', 'exit URL', 'image URL']
}

const uploadGSReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_SHEET_DATA:
            const processedData = [];

            action.sheetData.forEach(data => {
                const dataObj = {
                    sheetName: data.sheetName,
                    elementName: data.sheetName,
                    quantity: 1,
                    selectedTypes: Array(data.data[0].length).fill('text'),
                    data: data.data
                }

                processedData.push(dataObj)
            })

            return {
                ...state,
                sheetData: processedData
            }
        case SET_TYPE:
            const initSelectedTypes = [...state.sheetData[action.typeInfo.sheetIndex].selectedTypes]

            initSelectedTypes[action.typeInfo.rowIndex] = action.typeInfo.typeValue

            return {
                ...state,
                sheetData: [
                    ...state.sheetData.slice(0, action.typeInfo.sheetIndex),
                    {...state.sheetData[action.typeInfo.sheetIndex], selectedTypes: [...initSelectedTypes]},
                    ...state.sheetData.slice(action.typeInfo.sheetIndex + 1)
                ]
            }
        case RESET_DATA:
            return initialState
        case SET_DATA_READY_FLAG:
            return {
                ...state,
                isDataReady: action.flag,
            }
        case ADD_LIST_OF_SHEETS_TO_UPLOAD://
            return {
                ...state,
                listOfSheetsToUpload: [...action.listToUpload]
            }
        case UPDATE_URL_INPUT_TEXT:
            return {
                ...state,
                urlInputText: action.newText
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case SET_QUANTITY:
            return {
                ...state,
                sheetData: [
                    ...state.sheetData.slice(0, action.index),
                    {...state.sheetData[action.index], quantity: action.quantity},
                    ...state.sheetData.slice(action.index + 1)
                ]
            }
        case UPDATE_ELEMENT_NAME:
            return {
                ...state,
                sheetData: [
                    ...state.sheetData.slice(0, action.index),
                    {...state.sheetData[action.index], elementName: action.newElementName},
                    ...state.sheetData.slice(action.index + 1)
                ]
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
export const updateUrlInputTextAC = (textStr) => ({type: UPDATE_URL_INPUT_TEXT, newText: textStr})
export const addListOfSheetsToUploadAC = (arrList) => ({type: ADD_LIST_OF_SHEETS_TO_UPLOAD, listToUpload: arrList})
export const addSheetDataAC = (data) => ({type: ADD_SHEET_DATA, sheetData: data})
export const toggleIsFetchingAC = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching: isFetching})
export const setTypeAC = (typeInfoObj) => ({type: SET_TYPE, typeInfo: typeInfoObj})
export const setQuantityAC = (index, number) => ({type: SET_QUANTITY, index: index, quantity: number})
export const updateElementNameAC = (index, text) => ({type: UPDATE_ELEMENT_NAME, index: index, newElementName: text})
export const setDataReadyFlagAC = (flagBoolean) => ({type: SET_DATA_READY_FLAG, flag: flagBoolean})
export const resetDataAC = () => ({type: RESET_DATA})


export const setSheetInfoAC = (infoObj) => ({type: SET_SHEET_INFO, info: infoObj})

export default uploadGSReducer