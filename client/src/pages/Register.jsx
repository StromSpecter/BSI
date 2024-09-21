import { useState } from "react";
import { RiEyeFill, RiEyeOffFill } from "react-icons/ri";
import axios from "axios"; // Import Axios
import { API_BASE_URL } from "../utils/constant";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Toggle visibility for password and confirm password
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  // Function to handle form submission
  const handleRegister = async (e) => {
    e.preventDefault(); // Prevent form from reloading page

    // Check if passwords match
    if (password !== confirmPassword) {
      console.log("Passwords do not match!");
      return;
    }

    try {
      // Send POST request to register endpoint
      const response = await axios.post(`${API_BASE_URL}/register`, {
        name,
        email,
        password,
      });

      // If successful, log the success response
      console.log("Registration successful:", response.data);
    } catch (error) {
      // Log error message if registration fails
      if (error.response) {
        // If error response from backend
        console.log("Registration failed:", error.response.data);
      } else {
        // If no response from server (e.g., network error)
        console.log("An error occurred:", error.message);
      }
    }
  };

  return (
    <div className="flex items-center justify-center w-full min-h-screen bg-green-500">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 className="mb-6 text-3xl font-bold text-center text-green-500">Register</h2>

        {/* Name Input */}
        <div className="mb-4">
          <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            type="text"
            className="w-full px-4 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        {/* Email Input */}
        <div className="mb-4">
          <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="email">
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
        <div className="relative mb-4">
          <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="password">
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
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute text-gray-600 top-9 right-3 focus:outline-none"
          >
            {showPassword ? <RiEyeOffFill size={20} /> : <RiEyeFill size={20} />}
          </button>
        </div>

        {/* Confirm Password Input */}
        <div className="relative mb-6">
          <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="confirmPassword">
            Confirm Password
          </label>
          <input
            id="confirmPassword"
            type={showConfirmPassword ? "text" : "password"}
            className="w-full py-2 pl-4 pr-10 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button
            type="button"
            onClick={toggleConfirmPasswordVisibility}
            className="absolute text-gray-600 top-9 right-3 focus:outline-none"
          >
            {showConfirmPassword ? <RiEyeOffFill size={20} /> : <RiEyeFill size={20} />}
          </button>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            onClick={handleRegister} // Register button triggers handleRegister function
            className="w-full px-4 py-2 font-bold text-white transition-colors duration-300 bg-green-500 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
          >
            Register
          </button>
        </div>

        {/* Login Link */}
        <div className="mt-4 text-sm text-center text-gray-600">
          Already have an account?{" "}
          <a href="/login" className="text-green-500 hover:underline">
            Login here
          </a>
        </div>
      </div>
    </div>
  );
};

export default Register;
