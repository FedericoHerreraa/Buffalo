import React from "react";
import QRCode from "react-qr-code";
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import HomeUser from "./pages/User/HomeUser";
import HomeAdmin from "./pages/Admin/HomeAdmin";
import AuthenticationPage from "./components/AuthenticationPage";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<AuthenticationPage />}/>
        <Route path="/home-user" element={<HomeUser />} />
        <Route path="/home-admin" element={<HomeAdmin />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
