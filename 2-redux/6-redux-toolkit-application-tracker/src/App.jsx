import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Home from "./pages/home";
import Form from "./pages/form";
import styles from "./styles/app.module.scss";

const App = () => {
  return (
    <BrowserRouter>
      <div className={styles.layout}>
        <Header />

        <main className={styles.page}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Form />} />
            <Route path="/edit/:id" element={<Form />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
