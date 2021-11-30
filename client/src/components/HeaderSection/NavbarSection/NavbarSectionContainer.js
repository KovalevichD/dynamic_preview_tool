import {connect} from "react-redux";
import NavbarSection from "./NavbarSection";

const mapStateToProps = (state) => {
    return {
        isDataReady: state.dynamicData.isDataReady,
        isCreativesReady: state.uploadCreatives.isCreativesReady
    }
}


const ShowSheetsDataContainer = connect(mapStateToProps, null)(NavbarSection)

export default ShowSheetsDataContainer;