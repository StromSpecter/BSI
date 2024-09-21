import { useState } from "react";
import { RiEyeFill, RiEyeOffFill } from "react-icons/ri";
import axios from "axios"; // Import Axios
import { API_BASE_URL } from "../utils/constant"; // Assuming you have a constants file for the base URL
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigateTo = useNavigate();

  // Function to toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Function to handle login form submission
  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent default form behavior

    try {
      // Send POST request to login endpoint
      const response = await axios.post(`${API_BASE_URL}/login`, {
        email,
        password,
      });

      // Jika login berhasil
      if (response.data && response.data.user) {
        const { name, email, token } = response.data.user;

        // Simpan token dan name ke localStorage
        localStorage.setItem("token", token);
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);

        // Redirect atau aksi lain setelah login berhasil
        console.log("Login successful", response.data);
        navigateTo("/dashboard");
      }
    } catch (error) {
      // Log error message if login fails
      if (error.response) {
        // If error response from backend
        console.log("Login failed:", error.response.data);
      } else {
        // If no response from server (e.g., network error)
        console.log("An error occurred:", error.message);
      }
    }
  };

  return (
    <div className="flex items-center justify-center w-full min-h-screen bg-green-500">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 className="mb-6 text-3xl font-bold text-center text-green-500">
          Login
        </h2>

        {/* Email Input */}
        <div className="mb-4">
          <label
            className="block mb-2 text-sm font-bold text-gray-700"
            htmlFor="email"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            className="w-full px-4 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Password Input */}
        <div className="relative mb-6">
          <label
            className="block mb-2 text-sm font-bold text-gray-700"
            htmlFor="password"
          >
            Password
          </label>
          <input
            id="password"
            type={showPassword ? "text" : "password"}
            className="w-full py-2 pl-4 pr-10 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {/* Toggle Password Visibility */}
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute text-gray-600 top-9 right-3 focus:outline-none"
          >
            {showPassword ? (
              <RiEyeOffFill size={20} />
            ) : (
              <RiEyeFill size={20} />
            )}
          </button>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            onClick={handleLogin} // Login button triggers handleLogin function
            className="w-full px-4 py-2 font-bold text-white transition-colors duration-300 bg-green-500 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
          >
            Login
          </button>
        </div>

        {/* Register Link */}
        <div className="mt-4 text-sm text-center text-gray-600">
          Don`t have an account?{" "}
          <a href="/register" className="text-green-500 hover:underline">
            Register here
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
