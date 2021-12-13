import {connect} from "react-redux";
import Progress from "./Progress";
import {withRouter} from "react-router-dom";
import {getSheetDataLength} from "../../../redux/selectors/dynamicDataSelectors";
import {getTotalListOfSheetsLength} from "../../../redux/selectors/uploadGSSelectors";

const mapStateToProps = (state) => {
    return {
        totalListOfSheetsLength: getTotalListOfSheetsLength(state),
        sheetDataLength: getSheetDataLength(state)
    }
}

const WithRouterProgress = withRouter(Progress)

const ShowSheetsDataContainer = connect(mapStateToProps, null)(WithRouterProgress)

export default ShowSheetsDataContainer;