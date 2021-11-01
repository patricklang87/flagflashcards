import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: "user",
    initialState: {
        token: localStorage.getItem('lyf_token'),
        isAuthenticated: null,
        isLoading: false,
        user: null,
        memorizedFlags: []
    },
    reducers: {
        setUserLoading: (state, action
            ) => {
            state.isLoading = action.payload;
        },
        setCurrentUser: (state, action) => {
            state.isAuthenticated = true;
            state.isLoading = false;
            state.user = action.payload.user.name;
            state.memorizedFlags = action.payload.user.memorized_flags;
            if (action.payload.token) {
                state.token = action.payload.token;
            }
        },
        removeCurrentUser: (state) => {
            state.token = null;
            state.isAuthenticated = null;
            state.isLoading = false;
            state.user = null;
            state.memorizedFlags = [];
        },
        addMemorizedFlag: (state, action) => {
            state.memorizedFlags = [...state.memorizedFlags, action.payload];
        },
        removeMemorizedFlag: (state, action) => {
            const reducedFlagList = state.memorizedFlags.filter(name => {return (name !== action.payload)})
            state.memorizedFlags = reducedFlagList
        }
    }
});

export const { setUserLoading, setCurrentUser, removeCurrentUser, addMemorizedFlag, removeMemorizedFlag } = userSlice.actions;
export default userSlice.reducer;
