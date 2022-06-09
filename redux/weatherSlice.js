const {createSlice} = require('@reduxjs/toolkit')

const initial_state = {}

const weatherSlice = createSlice({
    name:'weather',
    initialState:initial_state,
    reducer:{}
})


export default weatherSlice.reducer;