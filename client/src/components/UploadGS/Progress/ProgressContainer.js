import {connect} from "react-redux";
import Progress from "./Progress";

const mapStateToProps = (state) => {
    return {
        totalListOfSheetsLength: state.uploadGS.totalListOfSheets.length,
        sheetDataLength: state.uploadGS.sheetData.length,
        activeStepOfProgress: state.uploadGS.activeStepOfProgress
    }
}

const ShowSheetsDataContainer = connect(mapStateToProps, null)(Progress)

export default ShowSheetsDataContainer;