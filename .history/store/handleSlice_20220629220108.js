import { createSlice } from "@reduxjs/toolkit";

const handleSlice = createSlice({
    name: 'handle',
    initialState: {},
    reducers: {
        login() {

        }
    }
})

export const handleSliceActions = handleSlice.actions
export default handleSlice