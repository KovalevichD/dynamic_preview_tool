import {connect} from "react-redux";
import ChooseSheet from "./ChooseSheet";
import {addListOfSheetsToUpload, getSheetsData} from "../../../redux/reducers/uploadGSReducer";
import {compose} from "redux";
import WithFetchingHoc from "../../../hoc/WithFetchingHoc";

const mapStateToProps = (state) => {
    return {
        totalListOfSheets: state.uploadGS.totalListOfSheets,
        listOfSheetsToUpload: state.uploadGS.listOfSheetsToUpload,
        spreadsheetId: state.uploadGS.spreadsheetId,
        isFetching: state.uploadGS.isFetching
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
// const ChooseSheetContainer = connect(mapStateToProps, {
//     addListOfSheetsToUpload,
//     getSheetsData
// })(ChooseSheet);
//
// export default ChooseSheetContainer;

