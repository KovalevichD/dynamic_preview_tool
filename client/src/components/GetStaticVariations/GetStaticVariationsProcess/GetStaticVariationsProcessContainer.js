import {connect} from "react-redux";
import GetStaticVariationsProcess from "./GetStaticVariationsProcess";
import {createAllVariations, toggleIsFetching} from "../../../redux/reducers/createAllVariationsReducer";

const mapStateToProps = (state) => {
    return {
        snippets: state.dynamicData.snippets,
        creatives: state.uploadCreatives.uploadedFiles,
        isFetching: state.createAllVariations.isFetching,
        isVariationsCreated: state.createAllVariations.isVariationsCreated,
        fileToDownloadName: state.createAllVariations.fileToDownloadName
    }
}

const GetStaticVariationsProcessContainer = connect(mapStateToProps, {
    createAllVariations,
    toggleIsFetching
})(GetStaticVariationsProcess);

export default GetStaticVariationsProcessContainer;