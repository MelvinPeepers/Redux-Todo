import React from "react";
import ReactDOM from "react-dom";
// import createStore & Provider
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./Reducer";

import "./index.css";
import App from "./component/App";

// This is the function that will take in a single reducer that will represent the state (data) of our application globally.
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// added <Provider> and store={store}
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
