import {connect} from "react-redux";
import ShowSheetsData from "./ShowSheetsData";
import {
    addCodeSnippets,
    setDataReadyFlag,
    setType,
    setQuantity,
    updateElementName
} from "../../../redux/reducers/dynamicDataReducer";

const mapStateToProps = (state) => {
    return {
        data: state.dynamicData.data,
        listOfTypes: state.dynamicData.listOfTypes
    }
}

const ShowSheetsDataContainer = connect(mapStateToProps, {
    addCodeSnippets,
    setDataReadyFlag,
    setType,
    setQuantity,
    updateElementName
})(ShowSheetsData)

export default ShowSheetsDataContainer;