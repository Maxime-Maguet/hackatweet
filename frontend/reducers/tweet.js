import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const addTweetsSlice = createSlice({
  name: "tweet",
  initialState,
  reducers: {
    addTweets: (state, action) => {
state.value.push(action.payload)
console.log(action.payload)
}
    },
  },
);

export const { addTweets } = addTweetsSlice.actions;
export default addTweetsSlice.reducer;