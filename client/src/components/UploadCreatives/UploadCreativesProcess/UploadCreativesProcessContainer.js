import {connect} from "react-redux";
import {
    addFileToLoad, deleteFiles,
    removeFilesToLoad, resetFiles,
    setAmountOfFilesToLoad, toggleIsFetching, uploadFiles
} from "../../../redux/reducers/uploadCreativesReducer";
import UploadCreativesProcess from "./UploadCreativesProcess";
import {clearAllVariationsDirectory} from "../../../redux/reducers/createAllVariationsReducer";
import WithFetchingHoc from "../../../hoc/WithFetchingHoc";
import {compose} from "redux";
import {
    getAmountOfFilesToLoad,
    getFilesInFolders,
    getFilesToUpload, getIsCreativesReady, getIsUploadCreativesFetching, getUploadedFiles
} from "../../../redux/selectors/uploadCreativesSelectors";

const mapStateToProps = (state) => {
    return {
        filesInFolders: getFilesInFolders(state),
        filesToUpload: getFilesToUpload(state),
        amountOfFilesToLoad: getAmountOfFilesToLoad(state),
        isFetching: getIsUploadCreativesFetching(state),
        uploadedFiles: getUploadedFiles(state),
        isCreativesReady: getIsCreativesReady(state)
    }
}

const mapDispatchToProps = {
    addFileToLoad,
    removeFilesToLoad,
    setAmountOfFilesToLoad,
    toggleIsFetching,
    resetFiles,
    uploadFiles,
    deleteFiles,
    clearAllVariationsDirectory
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    WithFetchingHoc
)(UploadCreativesProcess)