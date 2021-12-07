import {applyMiddleware, combineReducers, createStore} from "redux";
import dynamicDataReducer from "./reducers/dynamicDataReducer";
import uploadGSReducer from './reducers/uploadGSReducer'
import uploadCreativesReducer from "./reducers/uploadCreativesReducer";
import createAllVariationsReducer from "./reducers/createAllVariationsReducer";
import thunk from 'redux-thunk';

const reducers = combineReducers({
    dynamicData: dynamicDataReducer,
    uploadGS: uploadGSReducer,
    uploadCreatives: uploadCreativesReducer,
    createAllVariations: createAllVariationsReducer
})
const store = createStore(reducers, applyMiddleware(thunk))

export default store