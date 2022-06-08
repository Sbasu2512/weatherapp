import { configureStore } from "@reduxjs/toolkit";
import reducer from './slice';

const store = configureStore({
    reducer:{
        list: reducer,
    }
})

export default store;