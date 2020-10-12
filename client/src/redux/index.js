import { combineReducers, createStore } from "redux";
import { reducer as formReducer } from 'redux-form'
import apartsReducer from "./apartsReducer";
import authReducer from "./authReducer";

const reducers = combineReducers({
    aparts: apartsReducer,
    auth: authReducer,
    form: formReducer
})

const store = createStore(reducers)

window.store = store
export default store