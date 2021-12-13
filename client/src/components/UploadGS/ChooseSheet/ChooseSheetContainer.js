import {connect} from "react-redux";
import ChooseSheet from "./ChooseSheet";
import {addListOfSheetsToUpload, getSheetsData} from "../../../redux/reducers/uploadGSReducer";
import {compose} from "redux";
import WithFetchingHoc from "../../../hoc/WithFetchingHoc";
import {
    getIsUploadGSFetching,
    getListOfSheetsToUpload,
    getSpreadsheetId,
    getTotalListOfSheets
} from "../../../redux/selectors/uploadGSSelectors";

const mapStateToProps = (state) => {
    return {
        totalListOfSheets: getTotalListOfSheets(state),
        listOfSheetsToUpload: getListOfSheetsToUpload(state),
        spreadsheetId: getSpreadsheetId(state),
        isFetching: getIsUploadGSFetching(state)
    }
}

const mapDispatchToProps = {
    addListOfSheetsToUpload,
    getSheetsData
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    WithFetchingHoc
)(ChooseSheet)

