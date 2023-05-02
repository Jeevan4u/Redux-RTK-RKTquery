const createSlice = require('@reduxjs/toolkit').createSlice

const initialState = {
    noOfIceCreame : 10
}

const iceCremeSlice = createSlice({
    name : 'icecream',
    initialState,
    reducers : {
        ordered : (state,action) =>{
            state.noOfIceCreame = state.noOfIceCreame -1
        },
        restocked : (state,action)=>{
            state.noOfIceCreame = state.noOfIceCreame - action.payload
        }
    }
})

module.exports = iceCremeSlice.reducer
module.exports.icecreamAction = iceCremeSlice.actions
