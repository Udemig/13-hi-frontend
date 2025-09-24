import type { FC } from "react";
import Header from "./components/header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Detail from "./pages/detail";
import Create from "./pages/create";

const App: FC = () => {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Header />

        <main className="flex-1 container my-5">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/place/:id" element={<Detail />} />
            <Route path="/admin/create" element={<Create />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
