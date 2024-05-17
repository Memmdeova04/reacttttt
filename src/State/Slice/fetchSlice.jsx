import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLoading:false,
    data:
        {
            Search:[]
        }
    ,
    error:false
}

export const fetchData = createAsyncThunk('fetchData',async(name)=>{
   const data =  await fetch(`https://www.omdbapi.com/?s=${name}&page&apikey=f6488b8b`);
   return data.json();
})

export const fetchSlice = createSlice({
    name:'fetch',
    initialState,
    reducers:()=>{

    },
    extraReducers:(builder)=>{
        builder.addCase(fetchData.pending,(state)=>{
            state.isLoading = true
        })
        builder.addCase(fetchData.fulfilled,(state,action)=>{
            state.isLoading = false
            state.data = action.payload
        })
        builder.addCase(fetchData.rejected,(state)=>{
            state.isLoading = false
            state.error = true
        })
    }
   
})
export const {  } = fetchSlice.actions
export default fetchSlice.reducer