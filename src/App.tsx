import React from 'react';
import { LoginPage } from './pages/LoginPage';
import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout';
import CalculatorPage from './pages/CalculatorPage';
import ProtectedRoute from './components/ProtectedRoute';
import HistoryPage from './pages/HistoryPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <ProtectedRoute>
                <CalculatorPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="history"
            element={
              <ProtectedRoute>
                <HistoryPage />
              </ProtectedRoute>
            }
          />
          <Route path="login" element={<LoginPage />} />
          <Route path="*" element={<Navigate to="/" replace={true} />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
