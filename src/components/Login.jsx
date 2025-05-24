import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../index.css";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const response = await axios.post(
        `https://diamondcc.onrender.com/users/login`,
        formData,
        {
          headers: {
            "Content-Type": "application/json"
          },
          withCredentials: true
        }
      );

      if (response.data.success) {  
       
        
        // Store access token
        localStorage.setItem("accessToken", response.data.data.accessToken);
        
        // Check email for admin access
       const role = response.data.data.role;
        
        if (role === "admin") {
          navigate("/admin");
        } else {
          navigate("/user");
        }
      }
    } catch (error) {
      console.error("Login error:", error);
      if (error.response?.status === 401) {
        setError("Invalid email or password");
      } else {
        setError(error.response?.data?.message || "Login failed. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative h-[80vh] overflow-hidden md:min-h-fit bg-zinc-950 flex flex-col text-center py-10 px-2">
      <img 
        src="loginbg1.png"
        alt=""
        className="absolute custom-bounce top-1/2 transform -translate-x-1/2 -translate-y-1/3 w-full md:w-120 opacity-70 left-90 md:left-2/3"
      />
      <h1 className="text-5xl md:text-6xl font-bold my-8 relative z-10">
        Login
      </h1>

      <form onSubmit={handleSubmit} className="h-fit my-10 flex flex-col mx-auto items-center justify-center w-full max-w-[90vw] md:max-w-md relative z-10">
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full mb-4 py-3 px-4 rounded-full outline-none bg-white/20 backdrop-blur-md
          focus:ring-2 focus:ring-orange-500 transition-all duration-300"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full mb-6 py-3 px-4 rounded-full outline-none bg-white/20 backdrop-blur-md
          focus:ring-2 focus:ring-orange-500 transition-all duration-300"
          required
        />
        <button
          type="submit"
          disabled={isLoading}
          className={`w-full py-3 px-4 rounded-full bg-gradient-to-tr from-red-500 via-pink-500 to-blue-500
          hover:from-orange-600 hover:to-pink-600 transition-all duration-300
          text-white font-semibold shadow-lg shadow-orange-500/30
          ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          {isLoading ? "Logging in..." : "Login"}
        </button>

        {error && (
          <div className="mt-4 text-red-500 bg-red-500/10 px-4 py-2 rounded-lg">
            {error}
          </div>
        )}
      </form>
    </div>
  );
};

export default Login;