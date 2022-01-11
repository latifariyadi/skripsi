import React from "react";
import DashboardSiswa from "./pages/dashboard_siswa/Dashboard_siswa";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/aunth/Login";
import LoginForm from "./pages/aunth/Login_form";
import InfoCarousel from "./componenents/Slider/InfoCarousel";
import Pengumuman from "./componenents/pengumuman/pengumuman";
import Jadwal from "./componenents/jadwal/Jadwal";
import Kehadiran from "./componenents/kehadiran/Kehadiran";
import NilaiTugas from "./pages/nilai/NilaiTugas";
import Profile from "./componenents/profile/Profile";
import Kelas from "./pages/kelas/Kelas";

const InfoWrapper = () => {
  return (
    <>
      <InfoCarousel />
      <Pengumuman />
    </>
  );
};

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="login" element={<LoginForm />} />
        <Route path="dashboard" element={<DashboardSiswa />}>
          <Route path="info" index element={<InfoWrapper />} />
          <Route path="jadwal" index element={<Jadwal />} />
          <Route path="kehadiran" index element={<Kehadiran />} />
          <Route path="tugas" index element={<NilaiTugas />} />
          <Route path="uts" index element={<NilaiTugas />} />
          <Route path="uas" index element={<NilaiTugas />} />
          <Route path="profile" index element={<Profile />} />
          <Route path="kelas" index element={<Kelas />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
