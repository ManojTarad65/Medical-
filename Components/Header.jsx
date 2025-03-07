import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black shadow-lg border-b-2 border-[#FFD700]">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        
        {/* Logo */}
        <Link href="/">
          <span className="text-3xl font-bold text-[#FFD700] cursor-pointer">
            MediCare
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 text-white font-medium">
          {["Home", "Book Appointment", "Services", "About", "Contact"].map((item) => (
            <Link key={item} href={`/${item.toLowerCase().replace(/ /g, "")}`}>
              <span className="relative text-white px-5 py-2 transition-all duration-300 hover:border-b-2 hover:border-[#FFD700]">
                {item}
              </span>
            </Link>
          ))}
        </nav>

        {/* Authentication Buttons */}
        <div className="hidden md:flex space-x-4">
          <Link href="/login">
            <button className="w-32 border border-gray-500 text-black hover:bg-[#28A745] hover:text-white px-4 py-2 rounded-lg transition-all duration-300 bg-[#FFD700] hover:shadow-lg hover:scale-105">
              Login
            </button>
          </Link>
          <Link href="/signup">
            <button className="w-32 bg-[#FFD700] hover:bg-[#28A745] text-black hover:text-white px-5 py-2 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:scale-110">
              Sign Up
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-black absolute w-full py-6 transition-all">
          <nav className="flex flex-col items-center space-y-6 text-white font-medium">
            {["Home", "Book Appointment", "Services", "About", "Contact"].map((item) => (
              <Link key={item} href={`/${item.toLowerCase().replace(/ /g, "")}`} className="text-lg transition-all duration-300 hover:border-b-2 hover:border-[#FFD700]" onClick={() => setIsOpen(false)}>
                {item}
              </Link>
            ))}
            <hr className="w-1/2 border-gray-300" />
            <Link href="/login">
              <button className="w-32 border border-yellow-500  text-black px-4 py-2 rounded-lg transition-all duration-300 bg-[#FFD700] hover:shadow-lg hover:scale-105">
                Login
              </button>
            </Link>
            <Link href="/signup">
              <button className="w-32 bg-[#FFD700]  text-black px-5 py-2 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:scale-110">
                Sign Up
              </button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
