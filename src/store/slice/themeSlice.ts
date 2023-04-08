import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface themeState {
    value: string
}

const initialState: themeState = {
    value: 'light'
}

export const ThemeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleTheme: (state) => {
            if(state.value === 'light') {
                state.value = 'dark'
            } else if (state.value === 'dark') {
                state.value = 'light'
            }
        },
        toggleByTheme: (state, action: PayloadAction<string> ) => {
            state.value = action.payload 
        }
    }
})

export const { toggleTheme, toggleByTheme} = ThemeSlice.actions

export default ThemeSlice.reducer

