import {connect} from "react-redux";
import ChooseSheet from "./ChooseSheet";
import {
    addListOfSheetsToUploadAC,
    toggleIsFetchingAC
} from "../../../redux/reducers/uploadGSReducer";
import {addDataAC} from "../../../redux/reducers/dynamicDataReducer";

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
        addData: (data) => dispatch(addDataAC(data))
    }
}

const ChooseSheetContainer = connect(mapStateToProps, mapDispatchToProps)(ChooseSheet);

export default ChooseSheetContainer;

