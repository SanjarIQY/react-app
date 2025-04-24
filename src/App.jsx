import "./App.css";
import { HomePage } from "./components/HomePage";
import { MainLayout } from "./components/MainLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NotFoundPage } from "./components/NotFoundPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/forbidden" element={<div>Salomat oma!</div>} />
          <Route path="/addquestion" element={<div>addquestion</div>} />
          <Route path="/question/:id" element={<div>Question Page </div>} />

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
