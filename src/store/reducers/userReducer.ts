import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    isAuthenticated: false,
}
export const userSlice = createSlice({
    name: 'counter',
    initialState: initialState,
    reducers: {
        setLogin: (state, action) => {
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true
            }
        },
        logOut: (state) => {
            state = initialState
        },

    },
})

export default userSlice.reducer