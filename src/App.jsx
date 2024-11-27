import React from "react";
import QRCode from "react-qr-code";
import { BrowserRouter, Route, Link, Routes, Navigate } from 'react-router-dom';
import HomeUser from "./pages/User/HomeUser";
import HomeSysAdmin from "./pages/Admin/HomeSysAdmin";
import HomeAdmin from "./pages/Admin/HomeAdmin";
import AuthenticationPage from "./components/AuthenticationPage";
import { NightModePorvider } from "./context/NightModeContext";


function App() {
  return (
    <NightModePorvider>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/auth" replace />} />
            <Route path="/auth" element={<AuthenticationPage />}/>
            <Route path="/home-user" element={<HomeUser />} />
            <Route path="/home-sys-admin" element={<HomeSysAdmin />} />
            <Route path="/home-admin" element={<HomeAdmin />} />
          </Routes>
      </BrowserRouter>
    </NightModePorvider>
  )
}

export default App
