import {connect} from "react-redux";
import HeaderSection from "./HeaderSection";

const mapStateToProps = (state) => {
    return {
        spreadsheetName: state.uploadGS.spreadsheetName,
        listOfSheetsToUpload: state.uploadGS.listOfSheetsToUpload
    }
}

const HeaderSectionContainer = connect(mapStateToProps, null)(HeaderSection)

export default HeaderSectionContainer;