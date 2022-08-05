import { createSlice } from "@reduxjs/toolkit";


const WarehouseSlice = createSlice({
    name: 'warehouse',
    initialState: { warehouse: [] },
    reducers: {
        warehouseSearch(state, action) {
            state.warehouse = action.payload.data
        }
    }
})

export const warehouseSliceActions = WarehouseSlice.actions
export default WarehouseSlice