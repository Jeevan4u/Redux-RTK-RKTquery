const { cakeAction } = require('../cake/cakeSlice')

const createSlice = require('@reduxjs/toolkit').createSlice

const initialState = {
    noOfIceCreame : 10
}

const iceCremeSlice = createSlice({
    name : 'icecream',
    initialState,
    reducers : {
        ordered : (state) =>{
            state.noOfIceCreame = state.noOfIceCreame -1
        },
        restocked : (state,action)=>{
            state.noOfIceCreame = state.noOfIceCreame - action.payload
        },
  
    },
    // extraReducers : {
    //     ['cake/ordered'] : (state)=>{
    //         state.noOfIceCreame = state.noOfIceCreame - 1
    //     }
    // }

    extraReducers : (builder)=>{
        builder.addCase(cakeAction.ordered, (state,action)=>{
            state.noOfIceCreame = state.noOfIceCreame - 1
        })
    }
  
})

module.exports = iceCremeSlice.reducer
module.exports.icecreamAction = iceCremeSlice.actions
