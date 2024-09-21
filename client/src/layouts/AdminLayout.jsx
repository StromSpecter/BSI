import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const AdminLayout = () => {
  return (
    <div className="flex flex-row">
      <div className="fixed h-screen w-60">
        <Sidebar />
      </div>
      <div className="w-full h-screen ml-60">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
