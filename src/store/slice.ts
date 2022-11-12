import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ICartInitialState} from "./types";
import {IProduct} from "../types/ProductInreface";

const initialState: ICartInitialState = {
    items: [],
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<IProduct>) => {
           state.items.push(action.payload)
        },

        removeFormCart: (state, action: PayloadAction<number>) => {
            state.items = state.items.filter(item => item.id !== action.payload)
        }
    }
})