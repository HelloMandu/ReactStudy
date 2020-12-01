import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import rootReducer, { rootSaga } from "./modules";
import { loadableReady } from "@loadable/component";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer,
    window.__PRELOADED_STATE__, // 이 값을 초기상태로 사용함
    applyMiddleware(thunk, sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

const Root = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    );
};

const root = document.getElementById("root");
if (process.env.NODE_ENV === "production") {
    loadableReady(() => {
        ReactDOM.hydrate(<Root />, root);
    });
} else {
    ReactDOM.render(<Root />, root);
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
