// const { cakeAction } = require('../cake/cakeSlice')
import { ordered as CakeOrdered } from "../cake/cakeSlice"

import {createSlice} from "@reduxjs/toolkit"


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
            state.noOfIceCreame = state.noOfIceCreame + action.payload
        },
  
    },
    // extraReducers : {
    //     ['cake/ordered'] : (state)=>{
    //         state.noOfIceCreame = state.noOfIceCreame - 1
    //     }
    // }

    extraReducers : (builder)=>{
        builder.addCase(CakeOrdered, (state,action)=>{
            state.noOfIceCreame = state.noOfIceCreame - 1
        })
    }
  
})

// module.exports = iceCremeSlice.reducer
export default iceCremeSlice.reducer
export const {ordered,restocked}= iceCremeSlice.actions
