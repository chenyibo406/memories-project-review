import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
import "./index.css";
import { GoogleOAuthProvider } from "@react-oauth/google";

const store = createStore(reducers, compose(applyMiddleware(thunk)));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Provider store={store}>
      <GoogleOAuthProvider clientId="137087368996-h8fjlto1c52166ju1i4lk5m4jqm7sueo.apps.googleusercontent.com">
        <App />
      </GoogleOAuthProvider>
      ;
    </Provider>
  </>
);
