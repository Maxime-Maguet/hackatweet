import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: { username: null, token: null, firstname: null },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // Action pour se connecter
    login: (state, action) => {
      state.value.username = action.payload.username;
      state.value.token = action.payload.token;
      state.value.firstname = action.payload.firstname;
    },

    // Action pour se déconnecter
    logout: (state) => {
      state.value.username = null;
      state.value.token = null;
      state.value.firstname = null;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
