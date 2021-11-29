import {combineReducers, createStore} from "redux";
import dynamicDataReducer from "./reducers/dynamicDataReducer";
import uploadGSReducer from './reducers/uploadGSReducer'
import uploadCreativesReducer from "./reducers/uploadCreativesReducer";

const reducers = combineReducers({
    dynamicData: dynamicDataReducer,
    uploadGS: uploadGSReducer,
    uploadCreatives: uploadCreativesReducer
})
const store = createStore(reducers)

export default store