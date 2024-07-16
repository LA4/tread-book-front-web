import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface userState {
    value: {
        user_id: string | null,
        username: string | null,
        email: string | null,
        pages?: number | null
        avatar?: string | null
    }
}

const initialState: userState = {
    value: {
        user_id: null,
        username: null,
        email: null,
        pages: null,
        avatar: null
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
            state.value.pages = action.payload.pages;
        },
        logout: (state) => {
            state.value.user_id = null
            state.value.username = null
            state.value.email = null
            state.value.pages = null
            state.value.avatar = null
        },
        avatar: (state, action: PayloadAction<string>) => {
            state.value.avatar = action.payload;
        },
        pageRead: (state, action: PayloadAction<number>) => {
            state.value.pages = action.payload;
        }
    },
})

export const { user, logout, avatar, pageRead } = userSlice.actions

export default userSlice.reducer