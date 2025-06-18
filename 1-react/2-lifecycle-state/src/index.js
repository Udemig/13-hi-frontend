import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

/*
 * React.StrictMode:
 * Component'ların 2'kez render olmasına sebep olur
 * React strict mod sayesinde react component'ları daha net kontrol eder ve hata olduğu durumlarda hatanın sebebibi ve gerçekleştiği noktayı daha doğru tespit eder ve bize bildirir
 
 * StrictMode build anında kendini imha eder yani bu iki kez render olayı son kulanıcıya ulaşmaz
 */

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
