const ADD_FILE_TO_LOAD = 'ADD_FILE_TO_LOAD';
const REMOVE_FILES_TO_LOAD = 'REMOVE_FILES_TO_LOAD';
const RESET_FILES = 'RESET_FILES';
const SET_AMOUNT_OF_FILES_TO_LOAD = 'SET_AMOUNT_OF_FILES_TO_LOAD';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const ADD_FILES_UPLOADED_TO_SERVER = 'ADD_FILES_UPLOADED_TO_SERVER';

const initialState = {
    filesInFolders: {},
    filesToUpload: [],
    uploadedFiles: {},
    amountOfFilesToLoad: null,
    isFetching: false
}

const uploadCreativesReducer = (state = initialState, action) => {
    switch (action.type) {
        case RESET_FILES:
            return initialState;
        case ADD_FILES_UPLOADED_TO_SERVER:
            return {
                ...state,
                uploadedFiles: action.uploadedFiles,
            }
        case ADD_FILE_TO_LOAD:
            const splitFilePath = action.file.webkitRelativePath.split('/');
            const folder = splitFilePath[splitFilePath.length - 2];

            const addFileNewObj = {...state.filesInFolders};

            addFileNewObj.hasOwnProperty(folder)
                ? addFileNewObj[folder].push(action.file.name)
                : addFileNewObj[folder] = [action.file.name];

            return {
                ...state,
                filesInFolders: addFileNewObj,
                filesToUpload: [...state.filesToUpload, action.file]
            }
        case REMOVE_FILES_TO_LOAD:
            const removeFolderNewObj = {...state.filesInFolders};

            delete removeFolderNewObj[action.folderName];

            const filesToUploadCloneArr = state.filesToUpload;

            const filesToUploadNewArr = filesToUploadCloneArr.filter(elem => {
                return elem.webkitRelativePath.indexOf(action.folderName) === -1
            })

            let amountOfFiles = filesToUploadNewArr.length !== 0 ? filesToUploadNewArr.length : null;

            return {
                ...state,
                filesInFolders: removeFolderNewObj,
                filesToUpload: filesToUploadNewArr,
                amountOfFilesToLoad: amountOfFiles
            }
        case SET_AMOUNT_OF_FILES_TO_LOAD:
            return {
                ...state,
                amountOfFilesToLoad: action.amountOfFiles
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        default:
            return state
    }
}
export const addFileToLoad = (file) => ({type: ADD_FILE_TO_LOAD, file: file});
export const removeFilesToLoad = (folder) => ({type: REMOVE_FILES_TO_LOAD, folderName: folder});
export const resetFiles = () => ({type: RESET_FILES});
export const setAmountOfFilesToLoad = (amount) => ({type: SET_AMOUNT_OF_FILES_TO_LOAD, amountOfFiles: amount});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching: isFetching});
export const addFilesUploadedToServer = (uploadedFiles) => ({type: ADD_FILES_UPLOADED_TO_SERVER, uploadedFiles: uploadedFiles});


export default uploadCreativesReducer