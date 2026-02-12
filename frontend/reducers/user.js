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
      console.log(action.payload);

      state.value.firstname = action.payload.firstname;
      state.value.username = action.payload.username;
      state.value.token = action.payload.token;
    },

    // Action pour se déconnecter
    logout: (state) => {
      state.value.firstname = null;
      state.value.username = null;
      state.value.token = null;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
