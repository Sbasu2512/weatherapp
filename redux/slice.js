const {createSlice} = require('@reduxjs/toolkit')

const initial_state = []

const slice = createSlice({
    name:'todo',
    initialState:initial_state,
    reducers:{
        addToDo(state, action){
            // return [...state, action.payload]
            state.push(action.payload); 
        },
        completeToDo(state,action){
            // console.log(action.payload);
            state.map((item) => {
                if(item.id == action.payload){
                    item.is_completed = true
                }
            })
        }
    }
})

export const {addToDo, completeToDo} = slice.actions ;
export const getAllTasks = (state) => state.list
export default slice.reducer ;