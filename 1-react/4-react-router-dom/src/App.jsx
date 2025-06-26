import Footer from "./components/Footer";
import Header from "./components/Header";
import Category from "./pages/Category";
import Detail from "./pages/Detail";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Products from "./pages/Products";
import Aside from "./components/Aside";
import Novel from "./pages/Novel";
import Story from "./pages/Story";
import Layout from "./components/Layout";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

// projedeki sayfaları createBrowserRouter üzerinden tanımla
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/products", element: <Products /> },
      { path: "/detail/:book_id", element: <Detail /> },
      {
        path: "/category",
        element: <Category />,
        children: [
          { path: "story", element: <Story /> },
          { path: "novel", element: <Novel /> },
        ],
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

const App = () => {
  // oluşturduğumuz router'ı projeye tanıt
  return <RouterProvider router={router} />;
};

export default App;
