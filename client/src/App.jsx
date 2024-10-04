import { Route, Routes } from "react-router-dom";
import CompanyLayout from "./layouts/CompanyLayout";
import Home from "./pages/company/Home";
import Aboutus from "./pages/company/Aboutus";
import AdminLayout from "./layouts/AdminLayout";
import Dashboard from "./pages/admin/Dashboard";
import Program from "./pages/company/Program";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PrivateRoute from "./middlewares/PrivateRoute";
import Programs from "./pages/admin/Programs";
import Testimonials from "./pages/admin/Testimonials";
import KategoriSampah from "./pages/company/KategoriSampah";
import Artikel from "./pages/company/Artikel";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const App = () => {
  return (
    <Routes>
      {/* Rute untuk layout Company */}
      <Route path="/" element={<CompanyLayout />} >
        <Route index element={<Home />} />
        <Route path="about-us" element={<Aboutus />} />
        <Route path="program/:menuId" element={<Program />} />
        <Route path="publikasi/kategori-sampah" element={<KategoriSampah />} />
        <Route path="publikasi/kategori-sampah" element={<KategoriSampah />} />
        <Route path="publikasi/artikel" element={<Artikel />} />
      </Route>

      {/* Rute untuk layout Admin, dilindungi oleh PrivateRoute */}
      <Route path="/dashboard" element={
        <PrivateRoute>
          <AdminLayout />
        </PrivateRoute>
      }>
        <Route index element={<Dashboard />} />
        <Route path="/dashboard/programs" element={<Programs />} />
        <Route path="/dashboard/testimonials" element={<Testimonials />} />
      </Route>

      {/* Rute untuk login dan register */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* 404 Page Not Found */}
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default App;
