import { configureStore } from "@reduxjs/toolkit";
import pizzaReducer from "./pizzaSlice";

export const pizzaStore = configureStore({
    reducer:{
        pizza:pizzaReducer
    }
})

export type RootState = ReturnType<typeof pizzaStore.getState>;