import { configureStore } from "@reduxjs/toolkit";
import ProductsSice from "./productsSlice";
import WarehouseSlice from "./warehouseSlice";
import ItemTypeSlice from "./itemTypeSlice";

const store = configureStore({
    reducer: {
        warehouse: WarehouseSlice.reducer,
        products: ProductsSice.reducer,
        itemtype: ItemTypeSlice.reducer
    }
})

export default store