import React, { useState } from "react";
import axios from "axios";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(""); // Clear error on input change
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // Basic client-side validation
    if (!formData.name || !formData.email || !formData.message) {
      setError("All fields are required.");
      return;
    }
    if (!formData.email.includes("@")) {
      setError("Please provide a valid email.");
      return;
    }
    if (formData.message.length < 5) {
      setError("Message must be at least 5 characters long.");
      return;
    }

    try {
      setStatus("Sending...");
      const response = await axios.post(
       `${process.env.REACT_APP_API_URL}/users/contact`,
        formData
      );
      setStatus(response.data.message);
      setFormData({ name: "", email: "", message: "" }); // Reset form
    } catch (err) {
      setError("Something went wrong. Please try again.");
      setStatus("");
    }
  };
  return (
    <div className="p-4 md:p-5 bg-zinc-800 rounded-4xl">
      <h1 className="text-4xl md:text-8xl text-center font-black font-mono tracking-tighter border-b-1 border-white/50 mb-5 pb-5">
        Get in touch.
      </h1>
      <div className="flex flex-col md:flex-row gap-8 md:gap-0">
        {/* Contact Information */}
        <div className="flex flex-col items-start w-full md:w-1/2 p-2 md:p-5">
          <span className="flex items-center my-2 w-full">
            <img
              src="./location.gif"
              alt=""
              className="h-8 md:h-10 mx-2 md:mx-3 bg-zinc-200 rounded-2xl p-1"
            />
            <h2 className="text-xs md:text-sm">
              Oppo. Old Bharat Cinema Near Dr. Bangali Hospital Budhlada.(Mansa)
            </h2>
          </span>
          <span className="flex items-center my-2">
            <img
              src="./md.gif"
              alt=""
              className="h-8 md:h-10 mx-2 md:mx-3 bg-zinc-200 rounded-2xl p-1"
            />
            <h2 className="text-xs md:text-sm">MD. Sanjeev Kumar</h2>
          </span>
          <span className="flex items-center my-2">
            <img
              src="./phone.gif"
              alt=""
              className="h-8 md:h-10 mx-2 md:mx-3 bg-zinc-200 rounded-2xl p-1"
            />
            <h2 className="text-xs md:text-sm">+91-76964 37589</h2>
          </span>
          <span className="flex items-center my-2">
            <img
              src="./email.gif"
              alt=""
              className="h-8 md:h-10 mx-2 md:mx-3 bg-zinc-200 rounded-2xl p-1"
            />
            <h2 className="text-xs md:text-sm break-all">
              sanjeevbookmaker@gmail.com
            </h2>
          </span>

          {/* Social Media Icons */}
          <span className="flex items-center my-6 md:my-10 justify-center w-full">
            <span className="bg-zinc-700 rounded-full px-4 py-2 flex justify-center items-center gap-5">
              <a href="https://www.instagram.com/diamond_coaching_centre/">
                <img
                  src="./instagram.gif"
                  alt=""
                  className="h-10 md:h-10 bg-white rounded-2xl p-1"
                />
              </a>

              <img
                src="./linkedin.gif"
                alt=""
                className="h-10 md:h-10 bg-white rounded-2xl p-1"
              />
              <a
                href="https://maps.app.goo.gl/WRseQen7v95vXEhAA"
                target="blank"
              >
                <img
                  src="./location.gif"
                  alt=""
                  className="h-10 md:h-10 bg-white rounded-2xl p-1"
                />
              </a>

              <a href="tel: +919501257504">
                <img src="./phone.gif" alt="" className="h-10 bg-white rounded-2xl " />
              </a>
              <a
                href="https://wa.me/919501257504?text=Hi,%20I%20want%20to%20know%20about%20your%20courses"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="./whatsApp.gif"
                  alt="WhatsApp"
                  className="h-10 md:h-10 bg-zinc-200 rounded-2xl p-1"
                />
              </a>
            </span>
          </span>
        </div>

        {/* ----------Contact Form-------- */}

        <div className="w-full md:w-1/2">
          <form
            className="flex flex-col items-center my-5"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="p-2 m-2 w-full md:w-2/3 rounded-lg bg-zinc-900"
            />
            <input
              name="email"
              id="email"
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="p-2 m-2 w-full md:w-2/3 rounded-lg bg-zinc-900"
            />
            <textarea
              name="message"
              id="message"
              cols="40"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="p-2 m-2 w-full md:w-2/3 rounded-lg bg-zinc-900"
            ></textarea>

            {error && <p className="text-red-500 text-sm">{error}</p>}
            {status && <p className="text-green-500 text-sm">{status}</p>}
            <button className="bg-gradient-to-tr from-blue-500 via-pink-500 to-red-500 py-2 px-4 w-full md:w-2/3 rounded-full hover:opacity-90 transition-opacity">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
