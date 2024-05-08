import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./autenticacion/AuthContext";
import "./App.css";
const HomePage = lazy(() => import("./pages/HomePage"));
const AdminPage = lazy(() => import("./pages/AdminPage"));
const CrudPage = lazy(() => import("./pages/CrudPage"));
const ErrorPage = lazy(() => import("./pages/ErrorPage"));

const App = () => {
  const [autenticado, setAutenticado] = React.useState(false);
  React.useEffect(() => {
    const auth = localStorage.getItem('token');
    setAutenticado(!!auth);
  }, []);
  console.log(autenticado);

  return (
    <AuthProvider>
      <Router>
        <Suspense fallback={<div className="blog-loader">Cargando...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route
              path="/admin/crud"
              element={autenticado ? <CrudPage /> : <ErrorPage />}
            />
          </Routes>
        </Suspense>
      </Router>
    </AuthProvider>
  );
};

export default App;
