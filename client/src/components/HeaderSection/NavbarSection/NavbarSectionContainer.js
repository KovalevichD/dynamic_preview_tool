import {connect} from "react-redux";
import NavbarSection from "./NavbarSection";
import {getIsDataReady} from "../../../redux/selectors/dynamicDataSelectors";
import {getIsCreativesReady} from "../../../redux/selectors/uploadCreativesSelectors";

const mapStateToProps = (state) => {
    return {
        isDataReady: getIsDataReady(state),
        isCreativesReady: getIsCreativesReady(state)
    }
}


const ShowSheetsDataContainer = connect(mapStateToProps, null)(NavbarSection)

export default ShowSheetsDataContainer;