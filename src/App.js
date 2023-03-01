import React from "react";
import {Routes, Route} from "react-router-dom"
import LoginPetugas from "./pages/auth/login_petugas";
import LoginSiswa from './pages/auth/login_siswa'
import Dashboard from "./pages/dashboard";

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path='/login-petugas' element={<LoginPetugas/>}/>
        <Route path='/login-siswa' element={<LoginSiswa/>}/>
        <Route path="*" element={<LoginPetugas/>}/>
      </Routes>
    </React.Fragment>
  );
}

export default App;
