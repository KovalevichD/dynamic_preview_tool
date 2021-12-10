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

const mapStateToProps = (state) => {
    return {
        snippets: state.dynamicData.snippets,
        creatives: state.uploadCreatives.uploadedFiles,
        isFetching: getIsFetchingAllVariations(state),
        isVariationsCreated: getIsVariationsCreated(state),
        fileToDownloadName: getFileToDownloadName(state),
        isNoData: state.dynamicData.isDataReady && state.uploadCreatives.isCreativesReady
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