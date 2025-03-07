"use client";
import React from "react";
import { Users, Heart, Star, ShieldCheck, Target, Eye, HandHeart } from "lucide-react";

export default function AboutSection() {
  return (
    <div className="bg-black text-white font-sans ">
      {/* About Us Section */}
      <section className="py-24 px-6 text-center max-w-7xl mx-auto">
        <h1 className="text-5xl font-extrabold text-[#FFD700] mb-6">About MediCare</h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
          MediCare is dedicated to providing world-class healthcare services with expert
          doctors, state-of-the-art facilities, and cutting-edge technology.
          Your health is our top priority.
        </p>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-24 px-6 bg-gray-900 border-t-4 border-[#FFD700]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 text-center">
          <MissionVisionCard
            icon={<Target size={50} className="text-[#FFD700] mx-auto mb-4" />}
            title="Our Mission"
            description="To provide high-quality, patient-centered healthcare services, ensuring accessibility and affordability for all."
          />
          <MissionVisionCard
            icon={<Eye size={50} className="text-[#FFD700] mx-auto mb-4" />}
            title="Our Vision"
            description="To be a globally recognized healthcare provider known for excellence, compassion, and innovation in medical services."
          />
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto text-center">
        <h2 className="text-5xl font-bold text-[#FFD700] mb-12 border-b-4 border-[#FFD700] inline-block pb-2">
          Why Choose MediCare?
        </h2>
        <div className="grid md:grid-cols-4 gap-10">
          <FeatureCard
            icon={<Users size={44} className="text-[#FFD700]" />}
            title="Experienced Team"
            description="Our team consists of top-rated doctors and healthcare professionals."
          />
          <FeatureCard
            icon={<Heart size={44} className="text-[#FFD700]" />}
            title="Patient-Centered Care"
            description="We prioritize patient well-being with personalized healthcare solutions."
          />
          <FeatureCard
            icon={<Star size={44} className="text-[#FFD700]" />}
            title="Top-Quality Facilities"
            description="Equipped with modern technology to ensure the best medical services."
          />
          <FeatureCard
            icon={<ShieldCheck size={44} className="text-[#FFD700]" />}
            title="Trusted & Secure"
            description="We follow strict security protocols to keep your health data safe."
          />
        </div>
      </section>

      {/* New Section: Our Commitment */}
      <section className="py-24 px-6 bg-gray-900 text-center border-t-4 border-[#FFD700]">
        <h2 className="text-5xl font-bold text-[#FFD700] mb-12 border-b-4 border-[#FFD700] inline-block pb-2">
          Our Commitment
        </h2>
        <div className="max-w-4xl mx-auto">
          <HandHeart size={60} className="text-[#FFD700] mx-auto mb-6" />
          <p className="text-lg text-gray-300">
            At MediCare, we are committed to delivering compassionate, cutting-edge medical care.
            We continuously strive for excellence in healthcare innovation, patient safety,
            and service quality to improve lives.
          </p>
        </div>
      </section>
    </div>
  );
}

// Mission & Vision Box Component
const MissionVisionCard = ({ icon, title, description }) => (
  <div className="bg-gray-800 p-10 rounded-lg shadow-lg text-center border-2 border-[#FFD700]">
    {icon}
    <h3 className="text-3xl font-bold text-[#FFD700] mb-4">{title}</h3>
    <p className="text-gray-300 text-lg">{description}</p>
  </div>
);

// Feature Card Component
const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-gray-800 p-8 rounded-lg shadow-lg text-center transform hover:scale-110 transition border-2 border-[#FFD700]">
    <div className="flex justify-center mb-4">{icon}</div>
    <h3 className="text-2xl font-bold text-white">{title}</h3>
    <p className="mt-2 text-gray-300">{description}</p>
  </div>
);
