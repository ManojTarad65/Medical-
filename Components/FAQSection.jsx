"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "How do I book an appointment?",
    answer:
      "You can book an appointment by selecting a doctor, choosing a time slot, and confirming the appointment via our platform.",
  },
  {
    question: "Do I need to pay for online consultations?",
    answer:
      "Some consultations are free, while others may have a fee. The cost depends on the doctor's pricing policy.",
  },
  {
    question: "Is my medical data secure?",
    answer:
      "Yes, we use end-to-end encryption and comply with healthcare security standards to protect your data.",
  },
  {
    question: "Can I access my medical records anytime?",
    answer:
      "Yes, your Electronic Health Records (EHR) are securely stored and can be accessed anytime from your profile.",
  },
  {
    question: "How do I set up medicine reminders?",
    answer:
      "Go to the 'Medicine Reminders' section, add your medication details, and set up alerts for your doses.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-900 text-white font-sans">
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center text-[#FFD700] mb-12 border-b-4 border-[#FFD700] inline-block pb-2">
          Frequently Asked Questions
        </h2>
        <div className="grid md:grid-cols-1 gap-8">
          {faqs.map((faq, index) => (
            <FAQCard
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              toggle={() => toggleFAQ(index)}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

// FAQ Card Component
const FAQCard = ({ question, answer, isOpen, toggle }) => (
  <div
    className="bg-black p-6 rounded-lg shadow-lg transition transform hover:scale-105 border-2 border-[#FFD700] cursor-pointer"
    onClick={toggle}
  >
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-3">
        <HelpCircle size={24} className="text-[#FFD700]" />
        <h3 className="text-xl font-bold text-white">{question}</h3>
      </div>
      {isOpen ? (
        <ChevronUp size={24} className="text-[#FFD700]" />
      ) : (
        <ChevronDown size={24} className="text-[#FFD700]" />
      )}
    </div>
    {isOpen && (
      <p className="mt-4 text-gray-300 border-l-4 border-[#FFD700] pl-4">
        {answer}
      </p>
    )}
  </div>
);
