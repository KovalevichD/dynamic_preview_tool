import uploadCreativesReducer, {
    addFilesUploadedToServer,
    resetFiles,
    toggleIsCreativesReady,
    toggleIsFetching
} from "./uploadCreativesReducer";

const state = {
    filesInFolders: {},
    filesToUpload: [],
    uploadedFiles: {},
    amountOfFilesToLoad: null,
    isFetching: false,
    isCreativesReady: false
}

describe('Testing upload creatives reducer', () => {

    it('1. Should return the initial state ==> handle RESET_FILES',
        () => {
            const action = resetFiles();
            const newState = uploadCreativesReducer(state, action);

            expect(newState.filesInFolders).toStrictEqual({});
            expect(newState.filesToUpload).toStrictEqual([]);
            expect(newState.uploadedFiles).toStrictEqual({});
            expect(newState.amountOfFilesToLoad).toBeNull();
            expect(newState.isFetching).toBe(false);
            expect(newState.isCreativesReady).toBe(false);
        }
    );

    it('2. Should switch "isFetching" property to value TRUE  ==> handle TOGGLE_IS_FETCHING',
        () => {
            const action = toggleIsFetching(true);
            const newState = uploadCreativesReducer(state, action);

            expect(newState.isFetching).toBe(true);
        }
    );

    it('3. Should switch "isCreativesReady" property to value TRUE  ==> handle TOGGLE_IS_CREATIVES_READY',
        () => {
            const action = toggleIsCreativesReady(true);
            const newState = uploadCreativesReducer(state, action);

            expect(newState.isCreativesReady).toBe(true);
        }
    );

    it('4. Should add files uploaded to the server  ==> handle ADD_FILES_UPLOADED_TO_SERVER',
        () => {
            const uploadedCreatives = {creative: ["file1.js", "file2.js"]}

            const action = addFilesUploadedToServer(uploadedCreatives);
            const newState = uploadCreativesReducer(state, action);

            expect(Object.keys(newState.uploadedFiles).length).not.toBe(0);
        }
    );
});

