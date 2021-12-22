import createAllVariationsReducer, {
    resetData, setFileToDownloadName,
    toggleIsFetching,
    toggleIsVariationsCreated
} from "./createAllVariationsReducer";

const state = {
    isFetching: false,
    isVariationsCreated: false,
    fileToDownloadName: ''
}

describe('Testing create all variations reducer', () => {
    it('1. Should return the initial state ==> handle RESET_DATA_ALL_VARIATIONS',
        () => {
            const action = resetData();
            const newState = createAllVariationsReducer(state, action);

            expect(newState.isFetching).toBe(false);
            expect(newState.isVariationsCreated).toBe(false);
            expect(newState.fileToDownloadName).toBe('');
        }
    );

    it('2. Should switch "isFetching" property to value TRUE  ==> handle TOGGLE_IS_FETCHING_ALL_VARIATIONS',
        () => {
            const action = toggleIsFetching(true);
            const newState = createAllVariationsReducer(state, action);

            expect(newState.isFetching).toBe(true);
        }
    );

    it('3. Should switch "isVariationsCreated" property to value TRUE  ==> handle TOGGLE_IS_VARIATIONS_CREATED',
        () => {
            const action = toggleIsVariationsCreated(true);
            const newState = createAllVariationsReducer(state, action);

            expect(newState.isVariationsCreated).toBe(true);
        }
    );

    it('4. Should set the file name for download correctly  ==> handle SET_FILE_TO_DOWNLOAD_NAME',
        () => {
            const action = setFileToDownloadName('archive.zip');
            const newState = createAllVariationsReducer(state, action);

            expect(newState.fileToDownloadName).toBe('archive.zip');
        }
    );
});