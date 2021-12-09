import {connect} from "react-redux";
import GetStaticVariationsProcess from "./GetStaticVariationsProcess";
import {createAllVariations, toggleIsFetching} from "../../../redux/reducers/createAllVariationsReducer";
import {compose} from "redux";
import WithFetchingHoc from "../../../hoc/WithFetchingHoc";

const mapStateToProps = (state) => {
    return {
        snippets: state.dynamicData.snippets,
        creatives: state.uploadCreatives.uploadedFiles,
        isFetching: state.createAllVariations.isFetching,
        isVariationsCreated: state.createAllVariations.isVariationsCreated,
        fileToDownloadName: state.createAllVariations.fileToDownloadName
    }
}

const mapDispatchToProps = {
    createAllVariations,
    toggleIsFetching
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    WithFetchingHoc
)(GetStaticVariationsProcess)