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
import {
    getIsUploadGSFetching,
    getSpreadsheetName,
    getSpreadsheetUrl,
    getUrlInputText
} from "../../../redux/selectors/uploadGSSelectors";

const mapStateToProps = (state) => {
    return {
        urlInputText: getUrlInputText(state),
        isFetching: getIsUploadGSFetching(state),
        spreadsheetName: getSpreadsheetName(state),
        spreadsheetUrl: getSpreadsheetUrl(state)
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