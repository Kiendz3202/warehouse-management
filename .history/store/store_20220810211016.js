import { configureStore } from "@reduxjs/toolkit";
import ProductsSice from "./productsSlice";
import WarehouseSlice from "./warehouseSlice";
import ItemTypeSlice from "./itemTypeSlice";
import SupplierSlice from "./supplierSlice";
import TicketSlice from "./ticketSlice";
import AuthSlice from "./authSlice";

const store = configureStore({
    reducer: {
        warehouse: WarehouseSlice.reducer,
        products: ProductsSice.reducer,
        itemtype: ItemTypeSlice.reducer,
        supplier: SupplierSlice.reducer,
        ticket: TicketSlice.reducer,
        auth: AuthSlice.reducer
    }
})

export default store