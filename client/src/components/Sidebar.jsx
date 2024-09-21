import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { RiDashboardFill, RiLogoutBoxFill } from "react-icons/ri";
import logo from "../assets/logo.svg"

const Sidebar = () => {
  const location = useLocation();
  const navigateTo = useNavigate();

  const handleLogout = () => {
    // Menghapus item dari localStorage
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    localStorage.removeItem("email");

    // Redirect ke halaman login
    navigateTo("/login");
  };

  return (
    <div className="flex flex-col justify-between w-full h-full bg-green-500">
      <div className="flex flex-col gap-5">
        {/* Logo */}
        <div className="flex items-center justify-center h-20 m-2.5 bg-white rounded-full">
        <div className="w-12 h-12">
            <img
              src={logo}
              alt="logo"
              className="object-center w-full h-full"
            />
          </div>
          <div className="flex flex-col justify-center h-full">
            <p className="text-xs font-medium text-green-400">
              Bank Sampah Induk
            </p>
            <p className="text-lg font-bold text-green-600">Rumah Harum</p>
          </div>
        </div>

        {/* Menu */}
        <div className="flex flex-col px-6 py-4 space-y-4">
          <NavLink
            to="/dashboard"
            className={`flex items-center space-x-3 text-white text-lg font-semibold py-2 px-4 rounded-lg transition-colors duration-200 ${
              location.pathname === "/dashboard"
                ? "bg-green-700"
                : "hover:bg-green-600"
            }`}
          >
            <RiDashboardFill />
            <span>Dashboard</span>
          </NavLink>

          <NavLink
            to="/dashboard/programs"
            className={`flex items-center space-x-3 text-white text-lg font-semibold py-2 px-4 rounded-lg transition-colors duration-200 ${
              location.pathname === "/dashboard/programs"
                ? "bg-green-700"
                : "hover:bg-green-600"
            }`}
          >
            <RiDashboardFill />
            <span>Program</span>
          </NavLink>
          <NavLink
            to="/dashboard/testimonials"
            className={`flex items-center space-x-3 text-white text-lg font-semibold py-2 px-4 rounded-lg transition-colors duration-200 ${
              location.pathname === "/dashboard/testimonials"
                ? "bg-green-700"
                : "hover:bg-green-600"
            }`}
          >
            <RiDashboardFill />
            <span>Testimonials</span>
          </NavLink>
        </div>
      </div>

      {/* Logout */}
      <div className="px-6 py-4">
        <div
          className="flex items-center px-4 py-2 space-x-3 text-lg font-semibold text-white transition-colors duration-200 rounded-lg cursor-pointer hover:bg-green-600"
          onClick={handleLogout}
        >
          <RiLogoutBoxFill />
          <span>Logout</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
