import {connect} from "react-redux";
import ShowSheetsData from "./ShowSheetsData";
import {setTypeAC} from "../../../redux/reducers/uploadGSReducer";

const mapStateToProps = (state) => {
    return {
        sheetData: state.uploadGS.sheetData,
        listOfTypes: state.uploadGS.listOfTypes
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setType: (typeObj) => dispatch(setTypeAC(typeObj))
    }
}

const ShowSheetsDataContainer = connect(mapStateToProps, mapDispatchToProps)(ShowSheetsData)

export default ShowSheetsDataContainer;