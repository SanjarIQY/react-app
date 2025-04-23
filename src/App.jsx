import "./App.css";
import { HomePage } from "./components/HomePage";
import { MainLayout } from "./components/MainLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/forbidden" element={<div>Salomat oma!</div>} />
          <Route path="/addquestion" element={<div>addquestion</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
