import {connect} from "react-redux";
import {
    addFileToLoad,
    removeFilesToLoad,
    resetFilesToLoad,
    setAmountOfFilesToLoad, toggleIsFetching
} from "../../redux/reducers/uploadCreativesReducer";
import UploadCreatives from "./UploadCreatives";

const mapStateToProps = (state) => {
    return {
        filesInFolders: state.uploadCreatives.filesInFolders,
        filesToUpload: state.uploadCreatives.filesToUpload,
        amountOfFilesToLoad: state.uploadCreatives.amountOfFilesToLoad,
        isFetching: state.uploadCreatives.isFetching
    }
}
const UploadCreativesContainer = connect(mapStateToProps, {
    addFileToLoad,
    removeFilesToLoad,
    resetFilesToLoad,
    setAmountOfFilesToLoad,
    toggleIsFetching
})(UploadCreatives)

export default UploadCreativesContainer;