import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
