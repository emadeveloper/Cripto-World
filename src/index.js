import React from "react";
/* import ReactDOM from "react-dom"; */
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { createRoot } from 'react-dom/client';
import store from '../src/components/app/store'
import { Provider } from "react-redux";

const container = document.getElementById("root");

const root = createRoot(container);

root.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>
);
