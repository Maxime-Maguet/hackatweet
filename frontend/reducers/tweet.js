import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const addTweetsSlice = createSlice({
  name: "tweet",
  initialState,
  reducers: {
    addTweets: (state, action) => {
      state.value.push(action.payload);
      console.log(action.payload);
    },
    tweetBdd: (state, action) => {
      state.value = action.payload;
    },

    deleteTweet: (state, action) => {
      state.value = state.value.filter((tweet) => tweet._id !== action.payload);
    },
  },
});

export const { addTweets, tweetBdd, deleteTweet } = addTweetsSlice.actions;
export default addTweetsSlice.reducer;
