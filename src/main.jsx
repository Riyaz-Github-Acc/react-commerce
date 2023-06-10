import React from "react";
import store from "./Redux/store";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";

import "./main.scss";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);