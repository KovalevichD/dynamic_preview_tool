const ADD_TOTAL_LIST_OF_SHEETS = 'ADD_TOTAL_LIST_OF_SHEETS';
const ADD_LIST_OF_SHEETS_TO_UPLOAD = 'ADD_LIST_OF_SHEETS_TO_UPLOAD';
const UPDATE_URL_INPUT_TEXT = 'UPDATE_URL_INPUT_TEXT';
const ADD_SHEET_DATA = 'ADD_SHEET_DATA';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const SET_SPREADSHEET_NAME = 'SET_SPREADSHEET_NAME';
const SET_SPREADSHEET_ID = 'SET_SPREADSHEET_ID';
const SET_TYPE = 'SET_TYPE';

const initialState = {
    urlInputText: '',
    spreadsheetName: null,
    spreadsheetId: null,
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
            let index;

            state.sheetData.forEach((sheet, sheetIndex) => {
                if (action.typeInfo.sheetName === sheet.sheetName) index = sheetIndex
            })

            const initSelectedTypes = [...state.sheetData[index].selectedTypes]

            initSelectedTypes[action.typeInfo.index] = action.typeInfo.typeValue

            return {
                ...state,
                sheetData: [
                    ...state.sheetData.slice(0, index),
                    {...state.sheetData[index], selectedTypes: [...initSelectedTypes]},
                    ...state.sheetData.slice(index + 1)
                ]
            }
        case ADD_TOTAL_LIST_OF_SHEETS:
            return {
                ...state,
                urlInputText: '',
                totalListOfSheets: [...action.totalList]
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

export default uploadGSReducer