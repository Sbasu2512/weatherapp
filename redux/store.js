import { configureStore } from "@reduxjs/toolkit";
import ToDoreducer from './slice';
import weatherReducer from './weatherSlice'

const store = configureStore({
    reducer:{
        list: ToDoreducer,
        weather:weatherReducer,
    }
})

export default store;