import { configureStore } from "@reduxjs/toolkit";
import handleSlice from "./handleSlice";
import WarehouseSlice from "./warehouseSlice";

const store = configureStore({
    reducer: {
        handle: handleSlice.reducer,
        warehouse: WarehouseSlice.reducer
    }
})

export default store