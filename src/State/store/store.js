import { configureStore } from "@reduxjs/toolkit";
import fetchReduser from "../Slice/fetchSlice";
import cartReduser from "../Slice/CardSlice";
import postReduser from "../Slice/PostSlice";
export const store = configureStore({
    reducer:{
        fetch:fetchReduser,
        cart: cartReduser,
        post:postReduser
    }
})