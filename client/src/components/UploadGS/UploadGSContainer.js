import {compose} from "redux";
import WithNoDataRedirect from "../../hoc/WithNoDataRedirect";
import UploadGS from "./UploadGS";

export default compose(
    WithNoDataRedirect
)(UploadGS)