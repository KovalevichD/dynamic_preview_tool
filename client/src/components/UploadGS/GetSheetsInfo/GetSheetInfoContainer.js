import {connect} from "react-redux";
import GetSheetInfo from "./GetSheetInfo";
import {
    resetGsData,
    setSheetInfo, toggleIsFetching,
    updateUrlInputText
} from "../../../redux/reducers/uploadGSReducer";
import {resetData} from "../../../redux/reducers/dynamicDataReducer";

const mapStateToProps = (state) => {
    return {
        urlInputText: state.uploadGS.urlInputText,
        isFetching: state.uploadGS.isFetching,
        spreadsheetName: state.uploadGS.spreadsheetName,
        spreadsheetUrl: state.uploadGS.spreadsheetUrl
    }
}

const GetSheetInfoContainer = connect(mapStateToProps, {
    resetGsData,
    setSheetInfo,
    toggleIsFetching,
    updateUrlInputText,
    resetData
})(GetSheetInfo)

export default GetSheetInfoContainer;