const ADD_TOTAL_LIST_OF_SHEETS = 'ADD_TOTAL_LIST_OF_SHEETS';
const ADD_LIST_OF_SHEETS_TO_UPLOAD = 'ADD_LIST_OF_SHEETS_TO_UPLOAD';
const UPDATE_URL_INPUT_TEXT = 'UPDATE_URL_INPUT_TEXT';
const ADD_SHEET_DATA = 'ADD_SHEET_DATA';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const SET_SPREADSHEET_NAME = 'SET_SPREADSHEET_NAME';
const SET_SPREADSHEET_ID = 'SET_SPREADSHEET_ID';
const SET_TYPE = 'SET_TYPE';
const SET_QUANTITY = 'SET_QUANTITY';
const UPDATE_ELEMENT_NAME = 'UPDATE_ELEMENT_NAME';
const SET_DATA_READY_FLAG = 'SET_DATA_READY_FLAG';
const SET_ACTIVE_STEP_OF_PROGRESS = 'SET_ACTIVE_STEP_OF_PROGRESS';

const initialState = {
    isDataReady: false,
    urlInputText: '',
    spreadsheetName: null,
    spreadsheetId: null,
    activeStepOfProgress: 0,
    isFetching: false,
    totalListOfSheets: [],
    listOfSheetsToUpload: [],
    sheetData: [],
    listOfTypes: ['text', 'exit URL', 'image URL']
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
        case ADD_TOTAL_LIST_OF_SHEETS:
            return {
                ...state,
                urlInputText: '',
                totalListOfSheets: [...action.totalList]
            }
        case SET_DATA_READY_FLAG:
            return {
                ...state,
                isDataReady: action.flag,
            }
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
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case SET_SPREADSHEET_NAME:
            return {
                ...state,
                spreadsheetName: action.spreadsheetName
            }
        case SET_SPREADSHEET_ID:
            return {
                ...state,
                spreadsheetId: action.spreadsheetId
            }
        case SET_ACTIVE_STEP_OF_PROGRESS:
            return {
                ...state,
                activeStepOfProgress: action.step
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
        default:
            return state
    }
}
export const updateUrlInputTextAC = (textStr) => ({type: UPDATE_URL_INPUT_TEXT, newText: textStr})
export const addTotalListOfSheetsAC = (arrList) => ({type: ADD_TOTAL_LIST_OF_SHEETS, totalList: arrList})
export const addListOfSheetsToUploadAC = (arrList) => ({type: ADD_LIST_OF_SHEETS_TO_UPLOAD, listToUpload: arrList})
export const addSheetDataAC = (data) => ({type: ADD_SHEET_DATA, sheetData: data})
export const toggleIsFetchingAC = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching: isFetching})
export const setSpreadSheetNameAC = (name) => ({type: SET_SPREADSHEET_NAME, spreadsheetName: name})
export const setSpreadSheetIdAC = (id) => ({type: SET_SPREADSHEET_ID, spreadsheetId: id})
export const setTypeAC = (typeInfoObj) => ({type: SET_TYPE, typeInfo: typeInfoObj})
export const setQuantityAC = (index, number) => ({type: SET_QUANTITY, index: index, quantity: number})
export const updateElementNameAC = (index, text) => ({type: UPDATE_ELEMENT_NAME, index: index, newElementName: text})
export const setDataReadyFlagAC = (flagBoolean) => ({type: SET_DATA_READY_FLAG, flag: flagBoolean})
export const setActiveStepOfProgressAC = (number) => ({type: SET_ACTIVE_STEP_OF_PROGRESS, step: number})

export default uploadGSReducer