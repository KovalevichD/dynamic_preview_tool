import {connect} from "react-redux";
import HeaderSection from "./HeaderSection";

const mapStateToProps = (state) => {
    return {
        isDataReady: state.dynamicData.isDataReady
    }
}

const HeaderSectionContainer = connect(mapStateToProps, null)(HeaderSection)

export default HeaderSectionContainer;