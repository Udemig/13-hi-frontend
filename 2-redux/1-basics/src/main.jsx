import "./index.css";
import App from "./App.jsx";
import { createRoot } from "react-dom/client";
// store'u projeye tanıtmaya yarayan component
import { Provider } from "react-redux";
// store
import store from "./redux/store.js";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
