import {connect} from "react-redux";
import ChooseSheet from "./ChooseSheet";
import {
    addListOfSheetsToUpload,
    toggleIsFetching
} from "../../../redux/reducers/uploadGSReducer";
import {addData} from "../../../redux/reducers/dynamicDataReducer";

const mapStateToProps = (state) => {
    return {
        totalListOfSheets: state.uploadGS.totalListOfSheets,
        listOfSheetsToUpload: state.uploadGS.listOfSheetsToUpload,
        spreadsheetId: state.uploadGS.spreadsheetId,
        isFetching: state.uploadGS.isFetching
    }
}

const ChooseSheetContainer = connect(mapStateToProps, {
    addListOfSheetsToUpload,
    toggleIsFetching,
    addData
})(ChooseSheet);

export default ChooseSheetContainer;

