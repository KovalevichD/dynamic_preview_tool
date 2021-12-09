import {connect} from "react-redux";
import GetSheetInfo from "./GetSheetInfo";
import {
    getSheetList,
    resetGsData, toggleIsFetching,
    updateUrlInputText
} from "../../../redux/reducers/uploadGSReducer";
import {resetData} from "../../../redux/reducers/dynamicDataReducer";
import {compose} from "redux";
import WithFetchingHoc from "../../../hoc/WithFetchingHoc";

const mapStateToProps = (state) => {
    return {
        urlInputText: state.uploadGS.urlInputText,
        isFetching: state.uploadGS.isFetching,
        spreadsheetName: state.uploadGS.spreadsheetName,
        spreadsheetUrl: state.uploadGS.spreadsheetUrl
    }
}

const mapDispatchToProps = {
    resetGsData,
    updateUrlInputText,
    resetData,
    toggleIsFetching,
    getSheetList
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    WithFetchingHoc
)(GetSheetInfo)