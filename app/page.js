import React from 'react'
import HeroSection from '@/Components/HeroSection'
import FAQSection from '@/Components/FAQSection'
const MainPage = () => {
  return (
    <div>
      <HeroSection />
      <FAQSection />
    </div>
  )
}

export default MainPage;

export const metadata = {
  title: "MediCare",
  description: "Made by Jai Prakash Rankawat",
};