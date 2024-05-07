import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./autenticacion/AuthContext";
import HomePage from "./pages/HomePage";
import AdminPage from "./pages/AdminPage";
import CrudPage from "./pages/CrudPage";
import ProtectedRoute from "./autenticacion/ProtectedRoute";
import "./App.css";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route
            path="/admin/crud"
            element={
              <ProtectedRoute>
                <CrudPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
