"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    janAadhar: "",
    mobile: "",
    otp: ""
  });
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateJanAadhar = (janAadhar) => {
    return /^\d{10,12}$/.test(janAadhar);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.age || !formData.janAadhar || !formData.mobile) {
      alert("All fields are required!");
      return;
    }
    if (!validateJanAadhar(formData.janAadhar)) {
      alert("Invalid Jan Aadhar number! It must be 10-12 digits.");
      return;
    }
    setStep(2);
  };

  const handleOTPVerification = (e) => {
    e.preventDefault();
    if (!formData.otp) {
      alert("Please enter OTP");
      return;
    }
    router.push("/appointments");
  };

  return (
    <div className="bg-gray-900 text-white h-screen flex justify-center items-center px-6">
      <div className="bg-black p-8 rounded-lg shadow-lg max-w-md w-full border-2 border-[#FFD700] ">
        {step === 1 ? (
          <form onSubmit={handleSubmit}>
            <h2 className="text-3xl font-bold text-[#FFD700] text-center">Login</h2>
            <div className="mt-6">
              <label className="block text-gray-300">Name</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full p-2 rounded bg-gray-800 text-white" required />
            </div>
            <div className="mt-4">
              <label className="block text-gray-300">Age</label>
              <input type="number" name="age" value={formData.age} onChange={handleChange} className="w-full p-2 rounded bg-gray-800 text-white" required />
            </div>
            <div className="mt-4">
              <label className="block text-gray-300">Jan Aadhar Number</label>
              <input type="text" name="janAadhar" value={formData.janAadhar} onChange={handleChange} className="w-full p-2 rounded bg-gray-800 text-white" required />
            </div>
            <div className="mt-4">
              <label className="block text-gray-300">Mobile Number</label>
              <input type="tel" name="mobile" value={formData.mobile} onChange={handleChange} className="w-full p-2 rounded bg-gray-800 text-white" required />
            </div>
            <div className="mt-6 flex gap-4">
              <button type="submit" className="w-full bg-[#FFD700] text-black font-bold py-2 rounded hover:bg-[#28A745] transition">Login</button>
              <button type="button" className="w-full bg-gray-700 text-white font-bold py-2 rounded hover:bg-gray-600 transition">Cancel</button>
            </div>
          </form>
        ) : (
          <form onSubmit={handleOTPVerification}>
            <h2 className="text-3xl font-bold text-[#FFD700] text-center">Enter OTP</h2>
            <div className="mt-6">
              <label className="block text-gray-300">OTP</label>
              <input type="text" name="otp" value={formData.otp} onChange={handleChange} className="w-full p-2 rounded bg-gray-800 text-white" required />
            </div>
            <div className="mt-6 flex gap-4">
              <button type="submit" className="w-full bg-[#FFD700] text-black font-bold py-2 rounded hover:bg-[#28A745] transition">Verify OTP</button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

