import {createAllVariationsAPI} from "../../api/api";

const TOGGLE_IS_FETCHING_ALL_VARIATIONS = 'automation-toolkit/createAllVariations/TOGGLE_IS_FETCHING_ALL_VARIATIONS';
const TOGGLE_IS_VARIATIONS_CREATED = 'automation-toolkit/createAllVariations/TOGGLE_IS_VARIATIONS_CREATED';
const SET_FILE_TO_DOWNLOAD_NAME = 'automation-toolkit/createAllVariations/SET_FILE_TO_DOWNLOAD_NAME';
const RESET_DATA_ALL_VARIATIONS = 'automation-toolkit/createAllVariations/RESET_DATA_ALL_VARIATIONS';

const initialState = {
    isFetching: false,
    isVariationsCreated: false,
    fileToDownloadName: ''
}

const createAllVariationsReducer = (state = initialState, action) => {

    switch (action.type) {
        case RESET_DATA_ALL_VARIATIONS:
            return initialState;
        case TOGGLE_IS_FETCHING_ALL_VARIATIONS:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case TOGGLE_IS_VARIATIONS_CREATED:
            return {
                ...state,
                isVariationsCreated: action.isVariationsCreated
            }
        case SET_FILE_TO_DOWNLOAD_NAME:
            return {
                ...state,
                fileToDownloadName: action.fileToDownloadName
            }
        default:
            return state
    }
}

export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING_ALL_VARIATIONS, isFetching: isFetching});
export const toggleIsVariationsCreated = (isCreated) => ({type: TOGGLE_IS_VARIATIONS_CREATED, isVariationsCreated: isCreated});
export const setFileToDownloadName = (fileName) => ({type: SET_FILE_TO_DOWNLOAD_NAME, fileToDownloadName: fileName});
export const resetData = () => ({type: RESET_DATA_ALL_VARIATIONS})

export const createAllVariations = (snippetsObj) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true));

        const res = await createAllVariationsAPI.createVariations(snippetsObj);

        dispatch(toggleIsFetching(false));
        dispatch(setFileToDownloadName(res.data.fileName));
        dispatch(toggleIsVariationsCreated(true));
    }
}

export const clearAllVariationsDirectory = () => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true));

        await createAllVariationsAPI.clearDirectory();

        dispatch(resetData());
    }
}

export default createAllVariationsReducer;