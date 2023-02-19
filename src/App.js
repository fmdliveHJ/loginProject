import { BrowserRouter, Link, Route, Router, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./components/views/landingpage/LandingPage";
import LoginPage from "./components/views/LoginPage/LoginPage";
import RegisterPage from "./components/views/RegisterPage/RegisterPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Routes>
            <Route exact path="/LandingPage" element={<LandingPage />} />
            <Route path="/LoginPage" element={<LoginPage />} />
            <Route path="/RegisterPage" element={<RegisterPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
