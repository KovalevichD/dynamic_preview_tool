import {connect} from "react-redux";
import ShowSheetsData from "./ShowSheetsData";
import {
    setDataReadyFlagAC,
    setQuantityAC,
    setTypeAC, updateElementNameAC,
} from "../../../redux/reducers/uploadGSReducer";

const mapStateToProps = (state) => {
    return {
        sheetData: state.uploadGS.sheetData,
        listOfTypes: state.uploadGS.listOfTypes
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setType: (typeObj) => dispatch(setTypeAC(typeObj)),
        setQuantity: (index, number) => dispatch(setQuantityAC(index, number)),
        updateElementName: (index, text) => dispatch(updateElementNameAC(index, text)),
        setDataReadyFlag: (flag) => dispatch(setDataReadyFlagAC(flag))
    }
}

const ShowSheetsDataContainer = connect(mapStateToProps, mapDispatchToProps)(ShowSheetsData)

export default ShowSheetsDataContainer;