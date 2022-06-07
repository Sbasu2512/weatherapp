const {createSlice} = require('@reduxjs/toolkit')

const initial_state = []

const slice = createSlice({
    name:'todo',
    initialState:initial_state,
    reducers:{
        addToDo(state, action){
            // return [...state, action.payload]
            state.push(action.payload); 
        }
    }
})

export const {addToDo} = slice.actions ;
export default slice.reducer ;