import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const CompanyLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-40">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default CompanyLayout;
