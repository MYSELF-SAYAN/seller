import { configureStore } from "@reduxjs/toolkit";
import DataSlice from "./Slices/DataSlice";


const store = configureStore({
    reducer: {
        data: DataSlice,
    },
});


export default store;