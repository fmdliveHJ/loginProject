import { Link, Route, Router, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./components/views/landingpage/LandingPage";
import LoginPage from "./components/views/LoginPage/LoginPage";
import RegisterPage from "./components/views/RegisterPage/RegisterPage";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route path="/LoginPage" element={<LoginPage />} />
            <Route path="/RegisterPage" element={<RegisterPage />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
