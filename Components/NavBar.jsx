import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="logo">Logo</div>
      <div className="navbar-links">
        <Link href="/Home">Home</Link>
        <Link href="/About">About</Link>
        <Link href="/ContactUs">Contact Us</Link>
      </div>
    </div>
  );
};

export default NavBar;
