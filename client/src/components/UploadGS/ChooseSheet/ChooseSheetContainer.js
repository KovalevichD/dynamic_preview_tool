import {connect} from "react-redux";
import ChooseSheet from "./ChooseSheet";
import {addListOfSheetsToUpload, getSheetsData} from "../../../redux/reducers/uploadGSReducer";

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
    getSheetsData
})(ChooseSheet);

export default ChooseSheetContainer;

