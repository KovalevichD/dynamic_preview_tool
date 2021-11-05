import {connect} from "react-redux";
import ChooseSheet from "./ChooseSheet";
import {
    addListOfSheetsToUploadAC,
    addSheetDataAC,
    setActiveStepOfProgressAC,
    toggleIsFetchingAC
} from "../../../redux/reducers/uploadGSReducer";

const mapStateToProps = (state) => {
    return {
        totalListOfSheets: state.uploadGS.totalListOfSheets,
        listOfSheetsToUpload: state.uploadGS.listOfSheetsToUpload,
        spreadsheetId: state.uploadGS.spreadsheetId,
        isFetching: state.uploadGS.isFetching
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addListOfSheetsToUpload: (list) => dispatch(addListOfSheetsToUploadAC(list)),
        toggleIsFetching: (isFetching) => dispatch(toggleIsFetchingAC(isFetching)),
        addSheetData: (data) => dispatch(addSheetDataAC(data)),
        setActiveStepOfProgress: (step) => dispatch(setActiveStepOfProgressAC(step))
    }
}

const ChooseSheetContainer = connect(mapStateToProps, mapDispatchToProps)(ChooseSheet);

export default ChooseSheetContainer;

