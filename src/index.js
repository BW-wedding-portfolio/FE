import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reducers from "./reducers/";
import { createStore, Provider } from "react-redux";

const store = createStore (reducers);

ReactDOM.render(
  <Provider store={store }>
    <App />
  </Provider>,
  document.getElementById("root")
);
