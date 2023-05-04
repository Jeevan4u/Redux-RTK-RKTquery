import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    numOfCake : 10
}
const cakeSlice = createSlice({
    name : 'cake',
    initialState ,
    reducers : {
        ordered : (state )=>{
            state.numOfCake = state.numOfCake - 1
        },
        restocked : (state,action)=>{
            state.numOfCake = state.numOfCake + action.payload
        }
    }
})

// module.exports = cakeSlice.reducer
export default cakeSlice.reducer
// module.exports.cakeAction = cakeSlice.actions
export const {ordered,restocked} =cakeSlice.actions