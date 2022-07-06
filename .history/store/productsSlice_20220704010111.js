import { createSlice } from "@reduxjs/toolkit";


const ProductsSice = createSlice({
    name: 'products',
    initialState: { products: [], productDetail: [] },
    reducers: {
        saveProducts(state, action) {
            state.products = action.payload.data
        },
        saveProductDetail(state, action) {
            state.productDetail = action.payload.data
        }
    }
})

export const productsSliceActions = ProductsSice.actions
export default ProductsSice