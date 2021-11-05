import {connect} from "react-redux";
import GetSheetInfo from "./GetSheetInfo";
import {
    addListOfSheetsToUploadAC,
    addTotalListOfSheetsAC, setActiveStepOfProgressAC, setSpreadSheetIdAC, setSpreadSheetNameAC, toggleIsFetchingAC,
    updateUrlInputTextAC
} from "../../../redux/reducers/uploadGSReducer";

const mapStateToProps = (state) => {
    return {
        urlInputText: state.uploadGS.urlInputText,
        isFetching: state.uploadGS.isFetching
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        updateUrlInputText: (text) => dispatch(updateUrlInputTextAC(text)),
        addTotalListOfSheets: (list) => dispatch(addTotalListOfSheetsAC(list)),
        addListOfSheetsToUpload: (list) => dispatch(addListOfSheetsToUploadAC(list)),
        toggleIsFetching: (isFetching) => dispatch(toggleIsFetchingAC(isFetching)),
        setSpreadSheetName: (name) => dispatch(setSpreadSheetNameAC(name)),
        setSpreadSheetId: (id) => dispatch(setSpreadSheetIdAC(id)),
        setActiveStepOfProgress: (step) => dispatch(setActiveStepOfProgressAC(step))
    }
}

const GetSheetInfoContainer = connect(mapStateToProps, mapDispatchToProps)(GetSheetInfo)

export default GetSheetInfoContainer;