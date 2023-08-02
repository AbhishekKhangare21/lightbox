import "./App.css";
import Footer from "./components/Footer";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <div className="bg-gradient-to-r from-[#1b721d] to-[#419658]">
      <header>
        <LandingPage />
      </header>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
