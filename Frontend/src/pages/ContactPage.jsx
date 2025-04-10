import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await axios.post(
        "https://ewcinfratech.onrender.com/send-email",
        formData
      );
      if (response.data.success) {
        setStatus("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        setStatus("Failed to send message.");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("Something went wrong.");
    }
  };
  return (
    <div className="bg-[#010a2c] text-white min-h-screen py-12 pt-24">
      <div className="container mx-auto px-6 lg:px-20">
        <p className="text-4xl flex justify-center pt-14 pb-6">Contact Us</p>
        <div className="mt-4 w-full h-1 bg-orange-500 pb-2 mb-8"></div>

        <div className="container px-6">
          <h2 className="text-3xl font-bold">
            From <span className="text-amber-600">Blueprints</span> to
            reality—reach out to us today
          </h2>
          <div className="w-40 h-1 bg-orange-500  my-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto mt-12">
          <div className="bg-white text-black p-6 rounded-lg shadow-md flex flex-col items-center">
            <FaMapMarkerAlt className="text-orange-500 text-4xl mb-4" />
            <h3 className="text-xl font-semibold">Corporate Address</h3>
            <p className="text-[18px] text-center">
              Office-15/16, IInd Floor Royal Property Building Veer Road Tyagi
              Market Vikas Nagar- West Delhi 110059
            </p>
          </div>
          <div className="bg-white text-black p-6 rounded-lg shadow-md flex flex-col items-center">
            <FaPhoneAlt className="text-orange-500 text-4xl mb-4" />
            <h3 className="text-xl font-semibold">Call Us</h3>
            <p className="text-[18px]">+91 11 43524767</p>
          </div>
          <div className="bg-white text-black p-6 rounded-lg shadow-md flex flex-col items-center">
            <FaEnvelope className="text-orange-500 text-4xl mb-4" />
            <h3 className="text-xl font-semibold">Email Us</h3>
            <p className="text-[18px]">ewcinfratech@gmail.com</p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md mt-16 text-black">
          <h3 className="text-2xl font-semibold text-center mb-6">
            Get in touch
          </h3>
          {status && <p className="text-center text-lg font-bold">{status}</p>}
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter Name *"
              className="p-3 border rounded-md w-full"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter Email *"
              className="p-3 border rounded-md w-full"
              required
            />
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter Phone No. *"
              className="p-3 border rounded-md w-full"
              required
            />
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Enter Subject"
              className="p-3 border rounded-md w-full"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message *"
              className="p-3 border rounded-md w-full md:col-span-2 h-32"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-orange-500 text-white py-3 px-6 rounded-lg hover:bg-orange-600 transition md:col-span-2"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
