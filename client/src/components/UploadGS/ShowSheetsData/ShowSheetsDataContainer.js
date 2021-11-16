import {connect} from "react-redux";
import ShowSheetsData from "./ShowSheetsData";
import {addCodeSnippetsAc, setDataReadyFlagAC, setTypeAC, setQuantityAC, updateElementNameAC} from "../../../redux/reducers/dynamicDataReducer";

const mapStateToProps = (state) => {
    return {
        data: state.dynamicData.data,
        listOfTypes: state.dynamicData.listOfTypes
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setType: (typeObj) => dispatch(setTypeAC(typeObj)),
        setQuantity: (index, number) => dispatch(setQuantityAC(index, number)),
        updateElementName: (index, text) => dispatch(updateElementNameAC(index, text)),
        setDataReadyFlag: (flag) => dispatch(setDataReadyFlagAC(flag)),
        addCodeSnippets: (data) => dispatch(addCodeSnippetsAc(data))
    }
}

const ShowSheetsDataContainer = connect(mapStateToProps, mapDispatchToProps)(ShowSheetsData)

export default ShowSheetsDataContainer;