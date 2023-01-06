import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import {MenuTheme} from "antd"

export interface ThemeState {
    selectedTheme: MenuTheme,
}

const initialState: ThemeState = {
    selectedTheme: localStorage.getItem('theme')
        ? localStorage.getItem('theme') === 'light'
            ? 'light'
            : 'dark'
        : 'light',
}
export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        getTheme: (state) => {
            return state
        },
        changeTheme: (state, action: PayloadAction<MenuTheme>) => {
            state.selectedTheme = action.payload
            localStorage.setItem('theme', action.payload)
        }
    },
})

export const {getTheme, changeTheme} = themeSlice.actions

export default themeSlice.reducer