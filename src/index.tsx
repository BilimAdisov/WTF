import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store/store";
import App from "./App";
import "./index.css";
import { BrowserRouter as Br } from "react-router-dom";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Br>
      <Provider store={store}>
        <App />
      </Provider>
    </Br>
  </React.StrictMode>
);
