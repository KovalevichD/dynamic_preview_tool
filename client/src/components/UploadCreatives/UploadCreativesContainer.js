import {connect} from "react-redux";
import {
    addFilesUploadedToServer,
    addFileToLoad,
    removeFilesToLoad, resetFiles,
    setAmountOfFilesToLoad, toggleIsFetching
} from "../../redux/reducers/uploadCreativesReducer";
import UploadCreatives from "./UploadCreatives";

const mapStateToProps = (state) => {
    return {
        filesInFolders: state.uploadCreatives.filesInFolders,
        filesToUpload: state.uploadCreatives.filesToUpload,
        amountOfFilesToLoad: state.uploadCreatives.amountOfFilesToLoad,
        isFetching: state.uploadCreatives.isFetching,
        uploadedFiles: state.uploadCreatives.uploadedFiles
    }
}
const UploadCreativesContainer = connect(mapStateToProps, {
    addFileToLoad,
    removeFilesToLoad,
    resetFiles,
    setAmountOfFilesToLoad,
    toggleIsFetching,
    addFilesUploadedToServer
})(UploadCreatives)

export default UploadCreativesContainer;