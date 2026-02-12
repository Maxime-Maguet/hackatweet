import "../styles/globals.css";
import "antd/dist/antd.css";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../reducers/user";

const store = configureStore({
  reducer: {
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
