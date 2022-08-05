import { configureStore } from "@reduxjs/toolkit";
import ProductsSice from "./productsSlice";
import WarehouseSlice from "./warehouseSlice";
import ItemTypeSlice from "./itemTypeSlice";
import SupplierSlice from "./supplierSlice";

const store = configureStore({
    reducer: {
        warehouse: WarehouseSlice.reducer,
        products: ProductsSice.reducer,
        itemtype: ItemTypeSlice.reducer,
        supplier: SupplierSlice.reducer
    }
})

export default store