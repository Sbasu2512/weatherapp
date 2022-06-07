import { configureStore } from "@reduxjs/toolkit";
import reducer from './slice';

const store = configureStore({
    reducer:{
        add: reducer,
    }
})

export default store;