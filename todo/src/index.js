import React from "react";
import ReactDOM from "react-dom";
// import createStore & Provider
import { createStore } from "redux";
import { Provider } from "react-redux";

import "./index.css";
import App from "./App";

// This is the function that will take in a single reducer that will represent the state (data) of our application globally.
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// temporary till we add our reducer
function reducer() {
  return {
    title: "ToDo"
  };
}

// added <Provider> and store={store}
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
