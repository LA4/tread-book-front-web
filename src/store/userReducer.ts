import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface userState {
    value: {
        user_id: string | null,
        username: string | null,
        email: string | null,
        pages?: number | null
    }
}

const initialState: userState = {
    value: {
        user_id: null,
        username: null,
        email: null,
        pages: null
    }
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        user: (state, action: PayloadAction<userState["value"]>) => {
            state.value.user_id = action.payload.user_id;
            state.value.username = action.payload.username;
            state.value.email = action.payload.email;
        },
        logout: (state) => {
            state.value.user_id = null
            state.value.username = null
            state.value.email = null
            state.value.pages = null
        }
    },
})

export const { user, logout } = userSlice.actions

export default userSlice.reducer