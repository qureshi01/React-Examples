import {configureStore} from "@reduxjs/toolkit";
import sliceReducer from "../slice/slice";
const store = configureStore({
    reducer:{
        "customer":sliceReducer
    }
})
export default store;