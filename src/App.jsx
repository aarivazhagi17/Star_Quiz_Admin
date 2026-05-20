import React from 'react'
import { Routes, Route } from "react-router-dom";
import AdminLogin from "./admin/Pages/AdminLogin";
import AdminLayout from "./admin/Pages/AdminLayout";
import ProtectedRoute from './admin/Pages/ProtectedRoute';
import Questions from './admin/Pages/Questions';

export default function App() {
  return (
    <Routes>

      <Route path="/" element={<AdminLogin />} />

      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <AdminLayout />
          </ProtectedRoute>
        }
      >
       <Route path="questions" element={<Questions />} />
      </Route>

    </Routes>
  )
}