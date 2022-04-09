import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import {setupStore} from "./store";
import {Provider} from "react-redux";

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error('Failed to find the root element');
const root = createRoot(rootElement);
const store = setupStore();

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
