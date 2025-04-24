import React from 'react';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex flex-col items-center justify-center text-white px-4">
      <h1 className="text-5xl font-bold mb-6 text-center drop-shadow-lg">Welcome to Our App</h1>
      <p className="text-lg mb-8 text-center max-w-md">Manage your account easily and securely. Click below to get started on your journey.</p>
      <button
        onClick={() => navigate("/register")}
        className="px-8 py-3 text-white bg-black bg-opacity-40 backdrop-blur-md hover:bg-opacity-60 transition-all rounded-full text-lg font-semibold shadow-lg"
      >
        Let's Start
      </button>
    </div>
  );
};

export default Landing;
