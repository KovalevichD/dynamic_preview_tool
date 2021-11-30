import {connect} from "react-redux";
import {
    addFilesUploadedToServer,
    addFileToLoad,
    removeFilesToLoad, resetFiles,
    setAmountOfFilesToLoad, toggleIsCreativesReady, toggleIsFetching
} from "../../../redux/reducers/uploadCreativesReducer";
import UploadCreativesProcess from "./UploadCreativesProcess";

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
const UploadCreativesContainer = connect(mapStateToProps, {
    addFileToLoad,
    removeFilesToLoad,
    resetFiles,
    setAmountOfFilesToLoad,
    toggleIsFetching,
    addFilesUploadedToServer,
    toggleIsCreativesReady
})(UploadCreativesProcess)

export default UploadCreativesContainer;