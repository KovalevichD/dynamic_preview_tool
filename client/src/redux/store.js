import {combineReducers, createStore} from "redux";
import createCodeSnippetsReducer from "./reducers/createCodeSnippetsReducer";
import uploadGSReducer from './reducers/uploadGSReducer'

const reducers = combineReducers({
    createCodeSnippetsReducer: createCodeSnippetsReducer,
    uploadGS: uploadGSReducer
})
const store = createStore(reducers)

export default store