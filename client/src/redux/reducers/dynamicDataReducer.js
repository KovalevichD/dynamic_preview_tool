const ADD_CODE_SNIPPETS = 'ADD_CODE_SNIPPETS';
const SET_DATA_READY_FLAG = 'SET_DATA_READY_FLAG';
const ADD_DATA = 'ADD_DATA';
const SET_TYPE = 'SET_TYPE';
const SET_QUANTITY = 'SET_QUANTITY';
const UPDATE_ELEMENT_NAME = 'UPDATE_ELEMENT_NAME';
const RESET_DATA = 'RESET_DATA';

const initialState = {
    isDataReady: false,
    listOfTypes: ['Text', 'Boolean', 'Exit URL', 'Image URL', 'DateTime'],
    snippets: [],
    data: []
}

const dynamicDataReducer = (state = initialState, action) => {
    switch(action.type) {
        case RESET_DATA:
            return initialState
        case ADD_DATA:
            const processedData = [];

            action.data.forEach(data => {
                const dataObj = {
                    elementName: data.element,
                    quantity: 1,
                    selectedTypes: Array(data.data[0].length).fill('text'),
                    data: data.data
                }

                processedData.push(dataObj)
            })

            return {
                ...state,
                data: processedData
            }
        case SET_TYPE:
            const initSelectedTypes = [...state.data[action.typeInfo.elementIndex].selectedTypes]

            initSelectedTypes[action.typeInfo.rowIndex] = action.typeInfo.typeValue

            return {
                ...state,
                data: [
                    ...state.data.slice(0, action.typeInfo.elementIndex),
                    {...state.data[action.typeInfo.elementIndex], selectedTypes: [...initSelectedTypes]},
                    ...state.data.slice(action.typeInfo.elementIndex + 1)
                ]
            }
        case SET_QUANTITY:
            return {
                ...state,
                data: [
                    ...state.data.slice(0, action.index),
                    {...state.data[action.index], quantity: action.quantity},
                    ...state.data.slice(action.index + 1)
                ]
            }
        case UPDATE_ELEMENT_NAME:
            return {
                ...state,
                data: [
                    ...state.data.slice(0, action.index),
                    {...state.data[action.index], elementName: action.newElementName},
                    ...state.data.slice(action.index + 1)
                ]
            }
        case ADD_CODE_SNIPPETS:
            return {
                ...state,
                snippets: [...action.dataArr]
            }
        case SET_DATA_READY_FLAG:
            return {
                ...state,
                isDataReady: action.flag,
            }
        default:
            return state
    }
}

export const resetDataAC = () => ({type: RESET_DATA})
export const addDataAC = (data) => ({type: ADD_DATA, data: data})
export const setTypeAC = (typeInfoObj) => ({type: SET_TYPE, typeInfo: typeInfoObj})
export const setQuantityAC = (index, number) => ({type: SET_QUANTITY, index: index, quantity: number})
export const updateElementNameAC = (index, text) => ({type: UPDATE_ELEMENT_NAME, index: index, newElementName: text})
export const addCodeSnippetsAc = (data) => ({type: ADD_CODE_SNIPPETS, dataArr: data})
export const setDataReadyFlagAC = (flagBoolean) => ({type: SET_DATA_READY_FLAG, flag: flagBoolean})

export default dynamicDataReducer