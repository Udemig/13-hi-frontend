import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/global.scss";
import { Provider } from "react-redux";
import store from "./redux/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
