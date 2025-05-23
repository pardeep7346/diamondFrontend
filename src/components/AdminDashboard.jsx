import { useState, useEffect } from "react";
import AdminRegistration from "./AdminRegistrationForm";
import axios from "axios";

const AdminDashboard = () => {
  const [showAdminReg, setShowAdminReg] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    course: "webdev",
    
  });
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState([]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const token = localStorage.getItem("accessToken");
      // console.log("Fetching users with token:", token); // Debug token
      if (!token) {
        throw new Error("No access token found");
      }
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/users`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
      });
      setUsers(response.data.data);
    } catch (error) {
      console.error(
        "Error fetching users:",
        error.response?.data || error.message
      );
      setError("Failed to fetch users");
    }
  };
  const handleDelete = async (userId) => {
    if (!window.confirm("Are you sure you want to delete this student?")) {
      return;
    }

    try {
      const token = localStorage.getItem("accessToken");
      const response = await axios.delete(
        `https://diamondcc.onrender.com/users/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        }
      );

      if (response.data.success) {
        // Remove user from state
        setUsers(users.filter((user) => user._id !== userId));
        alert("Student deleted successfully");
      }
    } catch (error) {
      console.error("Delete error:", error);
      setError(error.response?.data?.message || "Failed to delete student");
      setTimeout(() => setError(null), 3000);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    // Basic validation
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }

    try {
      console.log("Form data:", formData);

      const response = await axios.post(
        `https://diamondcc.onrender.com/users/register`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true, // Add this
          timeout: 5000, // Add timeout
        }
      );

      if (response.data.success) {
        setError(null);
        alert("Student registered successfully!");
        setFormData({
          fullName: "",
          email: "",
          password: "",
          confirmPassword: "",
          phoneNumber: "",
          course: "webdev",
          admissionDate: "",
        });
        fetchUsers(); // Fetch updated user list
      }
    } catch (error) {
      console.error("Full error:", error);
      console.error("Error details:", {
        code: error.code,
        message: error.message,
        response: error.response,
        request: error.request,
      });
      if (error.code === "ECONNREFUSED") {
        setError("Server is not running. Please check the backend server.");
      } else if (error.response) {
        setError(error.response.data.message || "Server error occurred");
      } else if (error.request) {
        setError("Cannot connect to server. Please check your connection.");
      } else {
        setError("An unexpected error occurred");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-4 md:p-6">
      {showAdminReg ? (
        <AdminRegistration switchToUserReg={() => setShowAdminReg(false)} />
      ) : (
        <>
          <div className="flex flex-col md:flex-row gap-5 md:gap-10 items-start md:items-center justify-between bg-white/20 px-4 md:px-5 py-4">
            <h1 className="text-xl md:text-2xl font-bold text-center md:border-r-2 md:px-5 w-full md:w-auto">
              Admin Dashboard
            </h1>
            <div className="w-full flex justify-center md:justify-end">
              <button
                onClick={() => setShowAdminReg(true)}
                className="px-4 py-2 rounded-full bg-gradient-to-tr  from-purple-500 to-blue-500 text-white"
              >
                Switch to Admin Registration
              </button>
            </div>
          </div>
          <div className="mt-4 md:mt-6">
            <h1 className="text-center font-black text-3xl md:text-4xl my-3 bg-gradient-to-tr from-red-500 via-pink-500 to-blue-500 text-transparent bg-clip-text">
              Enroll New Student
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
                  placeholder="Marry Jane"
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
                  placeholder="jane123@gmail.com"
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
                />
              </span>
              <span className="flex flex-col w-full gap-2">
                <label htmlFor="course">Select Course</label>
                <select
                  name="course"
                  id="course"
                  value={formData.course}
                  onChange={handleChange}
                  className="bg-white/20 rounded-full w-full px-5 py-1"
                >
                  <option value="webdev" className="bg-zinc-950">
                    Web Development
                  </option>
                  <option value="appdev" className="bg-zinc-950">
                    App Development
                  </option>
                  <option value="marketing" className="bg-zinc-950">
                    Marketing
                  </option>
                  <option value="tally" className="bg-zinc-950">
                    Tally
                  </option>
                  <option value="basics" className="bg-zinc-950">
                    Computer Basics
                  </option>
                  <option value="examprep" className="bg-zinc-950">
                    Exam Prep.
                  </option>
                </select>
              </span>

            
              <span className="flex flex-col justify-center">
                <button
                  type="submit"
                  className={`bg-gradient-to-tr from-red-500 via-pink-500 to-blue-500 h-fit w-full rounded-full py-1 ${
                    isLoading ? "opacity-50 cursor-not-allowed" : ""
                  } `}
                >
                  {isLoading ? "Enrolling..." : "Enroll"}
                </button>
              </span>
            </form>
            {error && (
              <div className="fixed top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-md shadow-lg">
                {error}
              </div>
            )}
          </div>
        </>
      )}

      <div className="border-t-2 border-gray-300 mt-10 md:mt-12 pt-5 overflow-x-auto">
        <h1 className="text-2xl md:text-4xl font-black text-center bg-gradient-to-tr from-pink-500 via-red-500 to-blue-500 text-transparent bg-clip-text mb-4">
          Enrolled Students
        </h1>
        <div className="w-full overflow-x-auto pb-4">
          <table className="min-w-full md:w-[80vw] mx-auto text-left border-collapse whitespace-nowrap md:whitespace-normal">
            <thead>
              <tr className="bg-white/20">
                <th className="border border-gray-300 px-2 md:px-4 py-2 text-xs md:text-base">
                  No.
                </th>
                <th className="border border-gray-300 px-2 md:px-4 py-2 text-xs md:text-base">
                  Name
                </th>
                <th className="border border-gray-300 px-2 md:px-4 py-2 text-xs md:text-base">
                  Email
                </th>
                <th className="border border-gray-300 px-2 md:px-4 py-2 text-xs md:text-base">
                  Phone
                </th>
                <th className="border border-gray-300 px-2 md:px-4 py-2 text-xs md:text-base">
                  Course
                </th>
               
                <th className="border border-gray-300 px-2 md:px-4 py-2 text-xs md:text-base">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user._id}>
                  <td className="border border-gray-300 px-2 md:px-4 py-2 text-xs md:text-base">
                    {index + 1}
                  </td>
                  <td className="border border-gray-300 px-2 md:px-4 py-2 text-xs md:text-base">
                    {user.fullName}
                  </td>
                  <td className="border border-gray-300 px-2 md:px-4 py-2 text-xs md:text-base">
                    {user.email}
                  </td>
                  <td className="border border-gray-300 px-2 md:px-4 py-2 text-xs md:text-base">
                    {user.phoneNumber}
                  </td>
                  <td className="border border-gray-300 px-2 md:px-4 py-2 text-xs md:text-base">
                    {user.course}
                  </td>
                
                  <td className="border border-gray-300 px-2 md:px-4 py-2 flex justify-center gap-2">
                    <img
                      src="./bin.gif"
                      alt="delete"
                      className="h-6 md:h-8 cursor-pointer"
                      onClick={() => handleDelete(user._id)}
                    />
                   
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
