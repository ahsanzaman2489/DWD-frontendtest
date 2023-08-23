import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    isAuthenticated: false,
}
export const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        setLogin: (state, action) => {
            return {
                ...state,
                ...action.payload,
                ...(action.payload.username === "atuny0") && {role: 'non-editor'},
                ...(action.payload.username === "hbingley1") && {role: 'editor'},
                isAuthenticated: true
            }
        },
        logOut: () => {
            return {
                isAuthenticated: false
            }
        },

    },
})

export default userSlice.reducer