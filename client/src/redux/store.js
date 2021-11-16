import {combineReducers, createStore} from "redux";
import dynamicDataReducer from "./reducers/dynamicDataReducer";
import uploadGSReducer from './reducers/uploadGSReducer'

const reducers = combineReducers({
    dynamicData: dynamicDataReducer,
    uploadGS: uploadGSReducer
})
const store = createStore(reducers)

export default store