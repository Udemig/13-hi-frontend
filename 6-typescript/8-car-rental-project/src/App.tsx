import type { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import NotFound from "./pages/not-found";
import Header from "./components/header";
import Footer from "./components/footer";

const App: FC = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col relative overflow-hidden">
        {/* Arkplan */}
        <div className="fixed inset-0 bg-gradient-to-br from-dark-bg via-black-100 to-dark-bg -z-10"></div>

        {/* Işık Hüzmeleri */}
        <div className="fixed top-20 left-20 w-72 h-72 bg-primary-blue/20 rounded-full blur-3xl -z-10 animate-pulse" />

        <div
          className="fixed bottom-20 right-20 w-72 h-72 bg-accent/20 rounded-full blur-3xl -z-10 animate-pulse"
          style={{ animationDelay: "3000ms" }}
        />

        <Header />

        <main className="realtive z-10 flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
