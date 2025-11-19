import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Home from "./pages/home";
import Detail from "./pages/detail";
import TestUI from "./pages/testui";

const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detail/:country" element={<Detail />} />
            <Route path="/test" element={<TestUI />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
