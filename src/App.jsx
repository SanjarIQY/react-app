import "./App.css";
import { MainLayout } from "./components/MainLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<div>home</div>} />
          <Route path="/forbidden" element={<div>Salomat oma!</div>} />
          <Route path="/addquestion" element={<div>addquestion</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
