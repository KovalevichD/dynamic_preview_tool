import {combineReducers, createStore} from "redux";
import descriptionReducer from "./reducers/description-reducer";
import uploadGSReducer from './reducers/uploadGSReducer'

const reducers = combineReducers({
    descriptionReducer,
    uploadGS: uploadGSReducer
})
const store = createStore(reducers)

// const store = createStore(descriptionReducer)

export default store