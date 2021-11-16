import {connect} from "react-redux";
import Progress from "./Progress";
import {withRouter} from "react-router-dom";

const mapStateToProps = (state) => {
    return {
        totalListOfSheetsLength: state.uploadGS.totalListOfSheets.length,
        sheetDataLength: state.dynamicData.data.length
    }
}

const WithRouterProgress = withRouter(Progress)

const ShowSheetsDataContainer = connect(mapStateToProps, null)(WithRouterProgress)

export default ShowSheetsDataContainer;