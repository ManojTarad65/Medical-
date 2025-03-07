"use client";
import React from "react";
import { useRouter } from "next/navigation";
const Home = () => {
  const router = useRouter();
  return (
    <div>
      <h1 className="text-yellow-600">This is the Main Page</h1>
      <button
        onClick={() => router.push("/About")}
        className="border-solid border-2 px-4 py-2 bg-slate-400 color-yellow-600 m-4"
      >
        Go to About Page
      </button>
      <button
        onClick={() => router.push("/Auth/Login")}
        className="border-solid border-2 px-4 py-2 bg-slate-400 color-yellow-600 m-4"
      >
        Go to Login Page
      </button>
      <button
        onClick={() => router.push("/Auth/Register")}
        className="border-solid border-2 px-4 py-2 bg-slate-400 color-yellow-600 m-4"
      >
        Go to Register Page
      </button>
    </div>
  );
};

export default Home;
