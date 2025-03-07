"use client";
import Link from "next/link";
import React from "react";
import { ArrowRight, Stethoscope, HeartPulse, ShieldCheck,CalendarCheck,Video,FileText } from "lucide-react";

export default function HomeSection() {
  return (
    <div className="bg-black text-white font-sans ">
      {/* Hero Section */}
      <div className="bg-gray-950 text-white font-sans ">
      {/* Hero Section */}
      <section className="mt-18 relative w-full h-screen flex flex-col justify-center items-center text-center px-6 bg-gray-900 shadow-xl ">
        <h1 className="mt-10 text-5xl md:text-7xl font-extrabold drop-shadow-lg animate-fadeIn">
          Welcome to <span className="text-[#FFD700]">MediCare</span>
        </h1>
        <p className="mt-6 mb-10 text-lg md:text-xl text-gray-200 max-w-3xl animate-fadeIn delay-200">
          Your Health, Our Priority. Trusted medical care with expert doctors.
        </p>
        <Link
          href="/appointments"
          className="mt-6 px-8 py-4 bg-[#FFD700] hover:bg-[#28A745] text-black hover:text-white text-lg font-semibold rounded-lg shadow-lg flex items-center gap-2 transition transform hover:scale-105"
        >
          Book an Appointment <ArrowRight size={22} />
        </Link>
      </section>
    </div>

      {/* Features Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center text-[#FFD700] mb-12 border-b-4 border-[#FFD700] inline-block pb-2">
          Why Choose Us?
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          <FeatureCard
            icon={<Stethoscope size={44} className="text-[#FFD700]" />}
            title="Expert Doctors"
            description="Highly skilled doctors offering world-class treatment."
          />
          <FeatureCard
            icon={<HeartPulse size={44} className="text-[#FFD700]" />}
            title="24/7 Emergency Care"
            description="Immediate medical assistance anytime, anywhere."
          />
           <FeatureCard
            icon={<CalendarCheck size={44} className="text-[#FFD700]" />}
            title="Easy Appointment Scheduling"
            description="Book doctor appointments in just a few clicks and manage them effortlessly."
          />
          <FeatureCard
            icon={<Video size={44} className="text-[#FFD700]" />}
            title="Telemedicine & Online Consultation"
            description="Consult with expert doctors online via secure video calls from anywhere."
          />
          <FeatureCard
            icon={<FileText size={44} className="text-[#FFD700]" />}
            title="Electronic Health Records (EHR)"
            description="Securely store, access, and share your health records with your doctor."
          />
          <FeatureCard
            icon={<ShieldCheck size={44} className="text-[#FFD700]" />}
            title="Safe & Secure Healthcare Platform"
            description="Your health data is protected with the highest security standards."
          />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 bg-gray-900 border-t-4 border-[#FFD700]">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-[#FFD700] mb-10">Patient Testimonials</h2>
          <div className="grid md:grid-cols-3 gap-10">
            <TestimonialCard
              name="Amit Sharma"
              feedback="MediCare’s doctors are truly lifesavers! The care and attention I received were outstanding."
              image="Testimonal/testimonial1.jpg"
            />
            <TestimonialCard
              name="Mohit Kumawat"
              feedback="Fast, efficient, and professional. I highly recommend MediCare for anyone needing reliable healthcare."
              image="Testimonal/testimonial5.jpg"
            />
            <TestimonialCard
              name="Rahul Verma"
              feedback="Their emergency service was quick and effective. I felt safe and well cared for."
              image="Testimonal/testimonial2.jpg"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="flex flex-col justify-center items-center py-20 px-6 text-center bg-black shadow-xl border-t-4 border-[#FFD700]">
        <h2 className="text-5xl font-bold text-[#FFD700]">Book Your Appointment Now</h2>
        <p className="mt-4 text-xl text-gray-100 max-w-2xl mx-auto">
          Get personalized healthcare services from the best medical professionals.
        </p>
        <button className="mt-6 px-8 py-3 bg-[#FFD700] hover:bg-[#28A745] text-black text-lg font-bold rounded-lg shadow-lg flex items-center gap-2 transition transform hover:scale-110">
          Book an Appointment <ArrowRight size={24} />
        </button>
      </section>
    </div>
  );
}

// Feature Card Component
const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-gray-800 p-8 rounded-lg shadow-lg text-center transform hover:scale-110 transition border-2 border-[#FFD700]">
    <div className="flex justify-center mb-4">{icon}</div>
    <h3 className="text-2xl font-bold text-white">{title}</h3>
    <p className="mt-2 text-gray-300">{description}</p>
  </div>
);

// Testimonial Card Component
const TestimonialCard = ({ name, feedback, image }) => (
  <div className="bg-black p-8 rounded-lg shadow-lg text-center transform hover:scale-110 transition border-2 border-[#FFD700]">
    <img
      src={image}
      alt={name}
      className="w-40 h-40 mx-auto rounded-full mb-4 border-4 border-[#FFD700]"
    />
    <p className="text-gray-300 italic">"{feedback}"</p>
    <h4 className="mt-4 text-xl font-semibold text-white">{name}</h4>
  </div>
);
