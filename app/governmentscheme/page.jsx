"use client";
import Link from "next/link";
import React from "react";
import {
  HandCoins,
  School,
  Stethoscope,
  Home,
  Briefcase,
  Globe,
  ArrowRight,
} from "lucide-react";

export default function HomeSection() {
  return (
    <div className="bg-black text-white font-sans">
      {/* Hero Section */}
      <section className="mt-18 relative w-full h-screen flex flex-col justify-center items-center text-center px-6 bg-gray-900 shadow-xl">
        <h1 className="mt-10 text-5xl md:text-7xl font-extrabold drop-shadow-lg animate-fadeIn">
          Government <span className="text-[#FFD700]">Schemes Portal</span>
        </h1>
        <p className="mt-6 mb-10 text-lg md:text-xl text-gray-200 max-w-3xl animate-fadeIn delay-200">
          Access verified information on welfare programs, subsidies, and financial assistance.
        </p>
        <Link
          href="https://www.india.gov.in/my-government/schemes-0"
          target="_blank"
          className="mt-6 px-8 py-4 bg-[#FFD700] hover:bg-[#28A745] text-black hover:text-white text-lg font-semibold rounded-lg shadow-lg flex items-center gap-2 transition transform hover:scale-105"
        >
          Explore Schemes <ArrowRight size={22} />
        </Link>
      </section>

      {/* Why Choose Government Schemes? */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center text-[#FFD700] mb-12 border-b-4 border-[#FFD700] inline-block pb-2">
          Why Choose Government Schemes?
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          <FeatureCard
            icon={<HandCoins size={44} className="text-[#FFD700]" />}
            title="Financial Assistance"
            description="Get direct benefits, subsidies, and financial aid for eligible citizens."
          />
          <FeatureCard
            icon={<School size={44} className="text-[#FFD700]" />}
            title="Education & Scholarships"
            description="Scholarships and support for students from various backgrounds."
          />
          <FeatureCard
            icon={<Stethoscope size={44} className="text-[#FFD700]" />}
            title="Health & Insurance"
            description="Free and affordable healthcare through government programs."
          />
          <FeatureCard
            icon={<Briefcase size={44} className="text-[#FFD700]" />}
            title="Employment & Skill Development"
            description="Skill enhancement and job placement initiatives."
          />
          <FeatureCard
            icon={<Home size={44} className="text-[#FFD700]" />}
            title="Housing & Rural Development"
            description="Affordable housing, rural electrification, and infrastructure schemes."
          />
          <FeatureCard
            icon={<Globe size={44} className="text-[#FFD700]" />}
            title="Digital India Initiative"
            description="Internet access and digital services for rural areas."
          />
        </div>
      </section>

      {/* Government Schemes Section */}
      <section id="schemes" className="py-20 px-6 bg-gray-900 border-t-4 border-[#FFD700]">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-[#FFD700] mb-10">Featured Government Schemes</h2>
          <div className="grid md:grid-cols-3 gap-10">
            <SchemeCard
              title="PM Kisan Samman Nidhi Yojana"
              description="Financial support of ₹6,000 annually for farmers."
              href="https://pmkisan.gov.in/"
            />
            <SchemeCard
              title="Ayushman Bharat - PMJAY"
              description="Free health coverage up to ₹5 lakh per family per year."
              href="https://www.ayushman.gov.in/"
            />
            <SchemeCard
              title="Pradhan Mantri Awas Yojana (PMAY)"
              description="Affordable housing for urban & rural poor."
              href="https://www.pmay.gov.in/"
            />
            <SchemeCard
              title="MUDRA Loan Scheme"
              description="Collateral-free loans for small businesses."
              href="https://www.mudra.gov.in/"
            />
            <SchemeCard
              title="Digital India Initiative"
              description="Bringing internet and digital services to rural areas."
              href="https://www.digitalindia.gov.in/"
            />
            <SchemeCard
              title="Stand-Up India & Start-Up India"
              description="Encourages entrepreneurship with financial and skill-based support."
              href="https://www.startupindia.gov.in/"
            />
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 px-6 bg-black border-t-4 border-[#FFD700]">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-[#FFD700] mb-10">Success Stories</h2>
          <div className="grid md:grid-cols-3 gap-10">
            <TestimonialCard
              name="Rajesh Kumar"
              feedback="PMAY helped me build my first home. The subsidy made it affordable!"
            />
            <TestimonialCard
              name="Sunita Devi"
              feedback="Ayushman Bharat covered my hospital bills when I had no savings. A lifesaver!"
            />
            <TestimonialCard
              name="Vikram Singh"
              feedback="MUDRA loan gave me the funds to start my shop without any collateral."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="flex flex-col justify-center items-center py-20 px-6 text-center bg-gray-900 shadow-xl border-t-4 border-[#FFD700]">
        <h2 className="text-5xl font-bold text-[#FFD700]">Apply for Government Schemes Today!</h2>
        <p className="mt-4 text-xl text-gray-100 max-w-2xl mx-auto">
          Check eligibility, apply online, and track your benefits easily.
        </p>
        <Link href="https://www.india.gov.in/my-government/schemes-0" target="_blank" className="mt-6 px-8 py-3 bg-[#FFD700] hover:bg-[#28A745] text-black text-lg font-bold rounded-lg shadow-lg flex items-center gap-2 transition transform hover:scale-110">
          Explore Schemes <ArrowRight size={24} />
        </Link>
      </section>
    </div>
  );
}

// Feature Card Component
const FeatureCard = ({ icon, title, description  }) => (
  <div className="bg-gray-800 p-8 rounded-lg shadow-lg text-center transform hover:scale-110 transition border-2 border-[#FFD700]">
    <div className="flex justify-center mb-4">{icon}</div>
    <h3 className="text-2xl font-bold text-white">{title}</h3>
    <p className="mt-2 text-gray-300">{description}</p>
  </div>
);

// Scheme Card Component
const SchemeCard = ({ title, description, href }) => (
  <div className="bg-black p-6 rounded-lg shadow-lg text-center border-2 border-[#FFD700]">
    <h3 className="text-2xl font-bold text-white">{title}</h3>
    <p className="mt-2 text-gray-300">{description}</p>
    <Link href={href} target="_blank" className="mt-10 text-blue-500 hover:text-blue-600">
      Read More
    </Link>
  </div>
);

// Testimonial Card Component
const TestimonialCard = ({ name, feedback }) => (
  <div className="bg-black p-8 rounded-lg shadow-lg text-center border-2 border-[#FFD700]">
    <p className="text-gray-300 italic">"{feedback}"</p>
    <h4 className="mt-4 text-xl font-semibold text-white">{name}</h4>
  </div>
);
