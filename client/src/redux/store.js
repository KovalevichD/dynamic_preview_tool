import {applyMiddleware, combineReducers, createStore} from "redux";
import dynamicDataReducer from "./reducers/dynamicDataReducer";
import uploadGSReducer from './reducers/uploadGSReducer'
import uploadCreativesReducer from "./reducers/uploadCreativesReducer";
import thunk from 'redux-thunk';

const reducers = combineReducers({
    dynamicData: dynamicDataReducer,
    uploadGS: uploadGSReducer,
    uploadCreatives: uploadCreativesReducer
})
const store = createStore(reducers, applyMiddleware(thunk))

export default store