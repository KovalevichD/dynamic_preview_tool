import {connect} from "react-redux";
import GetStaticVariationsProcess from "./GetStaticVariationsProcess";

const mapStateToProps = (state) => {
    return {
        snippets: state.dynamicData.snippets,
        creatives: state.uploadCreatives.uploadedFiles
    }
}

const GetStaticVariationsProcessContainer = connect(mapStateToProps, {})(GetStaticVariationsProcess);

export default GetStaticVariationsProcessContainer;