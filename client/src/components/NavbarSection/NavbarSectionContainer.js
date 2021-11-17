import {connect} from "react-redux";
import NavbarSection from "./NavbarSection";

const mapStateToProps = (state) => {
    return {
        isDataReady: state.dynamicData.isDataReady
    }
}


const ShowSheetsDataContainer = connect(mapStateToProps, null)(NavbarSection)

export default ShowSheetsDataContainer;