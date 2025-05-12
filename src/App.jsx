import "./App.css";
import { HomePage } from "./pages/HomePage";
import { MainLayout } from "./components/MainLayout";
import { BrowserRouter, Routes, Route, Outlet, Navigate, useLocation } from "react-router-dom";
import { NotFoundPage } from "./components/NotFoundPage";
import { QuestionPage } from "./pages/QuestionPage";
import { AddQuestionPage, AddQuestionPageLazy } from "./pages/AddQuestionPage";
import { EditQuestionPage } from "./pages/EditQuestionPage";
import { AuthProvider } from "./auth/AuthProvider";
import { useAuth } from "./hooks/useAuth";
import { ForbiddenPage } from "./pages/ForbiddenPage";
import { ThemeProvider } from "./theme";

const ProtectedRoutes = () => {
  const { isAuth } = useAuth();
  const location = useLocation();

  return isAuth ? <Outlet /> : <Navigate to="forbidden" state={{ from: location.pathname }} replace={true} />;
};

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/forbidden" element={<ForbiddenPage />} />
              <Route path="/question/:id" element={<QuestionPage />} />

              <Route element={<ProtectedRoutes />}>
                <Route path="/addquestion" element={<AddQuestionPageLazy />} />
                <Route path="/editquestion/:id" element={<EditQuestionPage />} />
              </Route>

              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
