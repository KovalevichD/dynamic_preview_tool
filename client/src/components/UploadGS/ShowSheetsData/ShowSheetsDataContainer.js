import {connect} from "react-redux";
import ShowSheetsData from "./ShowSheetsData";
import {
    addCodeSnippets,
    setDataReadyFlag,
    setType,
    setQuantity,
    updateElementName, setDynamicId
} from "../../../redux/reducers/dynamicDataReducer";
import {getData, getListOfTypes} from "../../../redux/selectors/dynamicDataSelectors";

const mapStateToProps = (state) => {
    return {
        data: getData(state),
        listOfTypes: getListOfTypes(state)
    }
}

const ShowSheetsDataContainer = connect(mapStateToProps, {
    addCodeSnippets,
    setDataReadyFlag,
    setType,
    setQuantity,
    updateElementName,
    setDynamicId
})(ShowSheetsData)

export default ShowSheetsDataContainer;