import { createSlice } from '@reduxjs/toolkit'
import React from 'react'
const initialState =[
    {
        id:'',
        title:'',
        movies:[]
    }
]
export const PostSlice = createSlice({
    name:'post',
    initialState,
    reducers:{
        addClick:(state,action)=>{
           if(!state.find(item=>item.id === action.payload.id)){
            state.push(action.payload)
           } 
        }
    }
})
export const {addClick} = PostSlice.actions 
export default PostSlice.reducer