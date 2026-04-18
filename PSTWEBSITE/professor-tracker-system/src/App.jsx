import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Login from "./pages/LoginPage";
import Dashboard from "./pages/ProfessorPage";
import ProfessorPage from "./pages/ProfessorPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/prof" element={<ProfessorPage />} />
        <Route path="" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;