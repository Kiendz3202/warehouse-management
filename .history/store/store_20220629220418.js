import { configureStore } from "@reduxjs/toolkit";
import handleSlice from "./handleSlice";

const store = configureStore({
    reducer: { handle: handleSlice.reducer }
})

export default store