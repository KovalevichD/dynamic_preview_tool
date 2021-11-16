import {connect} from "react-redux";
import GetSheetInfo from "./GetSheetInfo";
import {
    resetGsDataAC,
    setSheetInfoAC, toggleIsFetchingAC,
    updateUrlInputTextAC
} from "../../../redux/reducers/uploadGSReducer";
import {resetDataAC} from "../../../redux/reducers/dynamicDataReducer";

const mapStateToProps = (state) => {
    return {
        urlInputText: state.uploadGS.urlInputText,
        isFetching: state.uploadGS.isFetching,
        spreadsheetName: state.uploadGS.spreadsheetName,
        spreadsheetUrl: state.uploadGS.spreadsheetUrl
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        updateUrlInputText: (text) => dispatch(updateUrlInputTextAC(text)),
        toggleIsFetching: (isFetching) => dispatch(toggleIsFetchingAC(isFetching)),
        setSheetInfo: (infoObj) => dispatch(setSheetInfoAC(infoObj)),
        resetData: () => dispatch(resetDataAC()),
        resetGsData: () => dispatch(resetGsDataAC())
    }
}

const GetSheetInfoContainer = connect(mapStateToProps, mapDispatchToProps)(GetSheetInfo)

export default GetSheetInfoContainer;