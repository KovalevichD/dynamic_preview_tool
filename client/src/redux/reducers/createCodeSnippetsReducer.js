const SET_DATA_FROM_GS = 'SET_DATA_FROM_GS';

const initialState = {
    snippets: []
}

const createCodeSnippetsReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_DATA_FROM_GS:
            return {
                ...state,
                snippets: [...action.dataArr]
            }
        default:
            return state
    }
}

export const setDataFromGsAc = (data) => ({type: SET_DATA_FROM_GS, dataArr: data})

export default createCodeSnippetsReducer