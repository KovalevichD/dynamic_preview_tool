import {compose} from "redux";
import WithNoDataRedirect from "../../hoc/WithNoDataRedirect";
import UploadGS from "./UploadGS";
import {connect} from "react-redux";
import {getIsCreativesReady} from "../../redux/selectors/uploadCreativesSelectors";

const mapStateToProps = (state) => {
    return {
        isNoData: getIsCreativesReady(state)
    }
}
export default compose(
    connect(mapStateToProps, {}),
    WithNoDataRedirect
)(UploadGS)