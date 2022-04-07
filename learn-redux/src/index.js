import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './modules';
import logger from "redux-logger"
// import myLogger from "./middlewares/myLogger";
import { composeWithDevTools } from 'redux-devtools-extension';

// const store = createStore(rootReducer, applyMiddleware(logger)); // 여러개의 미들웨어를 적용 할 수 있습니다.
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger))
); // 여러개의 미들웨어를 적용 할 수 있습니다.



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);

reportWebVitals();