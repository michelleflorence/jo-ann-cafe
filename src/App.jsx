import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import LandingPage from "./pages/LandingPage";
import Footer from "./components/Footer/Footer";
import rippedPaperFour from "./assets/ripped-paper-four.png";
import styles from "./App.module.scss";

const App = () => {
  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <div className={styles["app-container"]}>
        <Navbar />
        <main className="main-content" style={{ overflowX: "hidden" }}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
          </Routes>
        </main>
        <div className={styles["footer-section"]}>
          <div className={styles["ripped-paper-four"]}>
            <img src={rippedPaperFour} alt="ripped paper" />
          </div>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
