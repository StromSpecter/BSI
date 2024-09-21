import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  // Jika tidak ada token, arahkan ke halaman login
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // Jika ada token, tampilkan halaman yang diminta
  return children;
};

export default PrivateRoute;
