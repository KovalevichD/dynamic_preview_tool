import {connect} from "react-redux";
import GetStaticVariationsProcess from "./GetStaticVariationsProcess";
import {createAllVariations, toggleIsFetching} from "../../../redux/reducers/createAllVariationsReducer";
import {compose} from "redux";
import WithFetchingHoc from "../../../hoc/WithFetchingHoc";
import WithNoDataRedirect from "../../../hoc/WithNoDataRedirect";
import {
    getFileToDownloadName,
    getIsFetchingAllVariations,
    getIsVariationsCreated
} from "../../../redux/selectors/allVariationsSelectors";
import {getIsDataReady, getSnippets} from "../../../redux/selectors/dynamicDataSelectors";
import {getIsCreativesReady, getUploadedFiles} from "../../../redux/selectors/uploadCreativesSelectors";

const mapStateToProps = (state) => {
    return {
        snippets: getSnippets(state),
        creatives: getUploadedFiles(state),
        isFetching: getIsFetchingAllVariations(state),
        isVariationsCreated: getIsVariationsCreated(state),
        fileToDownloadName: getFileToDownloadName(state),
        isNoData: getIsDataReady(state) && getIsCreativesReady(state)
    }
}

const mapDispatchToProps = {
    createAllVariations,
    toggleIsFetching
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    WithFetchingHoc,
    WithNoDataRedirect
)(GetStaticVariationsProcess)