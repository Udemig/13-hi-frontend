import { BrowserRouter, Routes, Route } from "react-router-dom";
import Map from "./pages/map";
import List from "./pages/list";
import Header from "./components/header";

const App = () => {
  return (
    <BrowserRouter>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Map />} />
          <Route path="/list" element={<List />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
