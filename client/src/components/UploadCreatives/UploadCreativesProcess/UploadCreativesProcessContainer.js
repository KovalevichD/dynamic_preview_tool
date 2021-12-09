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

const mapStateToProps = (state) => {
    return {
        filesInFolders: state.uploadCreatives.filesInFolders,
        filesToUpload: state.uploadCreatives.filesToUpload,
        amountOfFilesToLoad: state.uploadCreatives.amountOfFilesToLoad,
        isFetching: state.uploadCreatives.isFetching,
        uploadedFiles: state.uploadCreatives.uploadedFiles,
        isCreativesReady: state.uploadCreatives.isCreativesReady
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