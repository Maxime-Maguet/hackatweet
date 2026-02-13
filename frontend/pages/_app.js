import "../styles/globals.css";
import "antd/dist/antd.css";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../reducers/user";
import tweetReducer from "../reducers/tweet";

const store = configureStore({
  reducer: {
    tweet: tweetReducer,
    user: userReducer,
  },
});

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
