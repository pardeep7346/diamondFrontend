import React, { useState } from "react";
import axios from "axios";

const AdminRegistration = ({ switchToUserReg }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    role: "admin",
  });
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords don't match!");
      setIsLoading(false);
      return;
    }

    try {
      const response = await axios.post(
        `https://diamondcc.onrender.com/admin/register-admin`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
          timeout: 5000,
        }
      );

      if (response.data.success) {
        alert("Admin registered successfully!");
        setFormData({
          fullName: "",
          email: "",
          password: "",
          confirmPassword: "",
          phoneNumber: "",
          role: "admin",
        });
      }
    }catch (error) {
        console.error("Registration error:", error);
        if (error.response?.status === 500) {
          setError("Server error. Please try again later.");
        } else {
          setError(error.response?.data?.message || "Failed to register admin");
        }
      } finally {
        setIsLoading(false);
      }
  };

  return (
    <div className="mt-4 md:mt-6">
      <div className="flex flex-col md:flex-row gap-5 md:gap-10 items-start md:items-center justify-between bg-white/20 px-4 md:px-5 py-4">
        <h1 className="text-xl md:text-2xl font-bold text-center md:border-r-2 md:px-5 w-full md:w-auto">
          Admin Dashboard
        </h1>
        <button
          onClick={switchToUserReg}
          className="px-4 py-2 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 text-white"
        >
          Switch to User Registration
        </button>
      </div>

      <h1 className="text-center font-black text-3xl md:text-4xl my-3 bg-gradient-to-tr from-red-500 via-pink-500 to-blue-500 text-transparent bg-clip-text">
        Register New Admin
      </h1>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 py-5 w-full md:w-[60vw] mx-auto gap-x-4 md:gap-x-10 gap-y-2 px-4 md:px-0"
      >
        <span className="flex flex-col w-full gap-2">
          <label htmlFor="fullname">Full Name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="bg-white/20 rounded-full w-full px-5 py-1"
            placeholder="Admin Name"
            required
          />
        </span>

        <span className="flex flex-col w-full gap-2">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="bg-white/20 rounded-full w-full px-5 py-1"
            placeholder="admin@example.com"
            required
          />
        </span>

        <span className="flex flex-col w-full gap-2">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="bg-white/20 rounded-full w-full px-5 py-1"
            placeholder="********"
            required
          />
        </span>

        <span className="flex flex-col w-full gap-2">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="bg-white/20 rounded-full w-full px-5 py-1"
            placeholder="********"
            required
          />
        </span>

        <span className="flex flex-col w-full gap-2">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="bg-white/20 rounded-full w-full px-5 py-1"
            placeholder="+91 1234567890"
            required
          />
        </span>

        <span className="flex flex-col justify-end">
          <button
            type="submit"
            className={`bg-gradient-to-tr from-red-500 via-pink-500 to-blue-500 h-fit w-full rounded-full py-1 ${
              isLoading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {isLoading ? "Registering..." : "Register Admin"}
          </button>
        </span>
      </form>

      {error && (
        <div className="fixed top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-md shadow-lg">
          {error}
        </div>
      )}
    </div>
  );
};

export default AdminRegistration;
