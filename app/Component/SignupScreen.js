"use client"

import React, { useState } from 'react';


function SignupScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailSignup = () => {
    // Implement email signup logic using Firebase
  };

  const handleGoogleSignup = () => {
    // Implement Google signup logic using Firebase
  };

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col md:flex-row">
      {/* Left section with image */}
      <div className="md:w-1/2 bg-gray-800">
        <img
          src="../../public/images.jpeg" // Add your image source here
          alt="Illustration"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right section with signup form */}
      <div className="md:w-1/2 flex items-center justify-center">
        <div className="bg-gray-800 p-8 rounded-lg shadow-md w-full md:w-96">
          <h2 className="text-2xl font-bold text-white mb-4">Sign Up</h2>
          <input
            type="email"
            placeholder="Email"
            className="bg-gray-700 text-white w-full px-4 py-2 rounded-lg mb-4"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="bg-gray-700 text-white w-full px-4 py-2 rounded-lg mb-4"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="bg-blue-500 text-white w-full px-4 py-2 rounded-lg mb-4"
            onClick={handleEmailSignup}
          >
            Sign Up with Email
          </button>
          <button
            className="bg-red-600 text-white w-full px-4 py-2 rounded-lg"
            onClick={handleGoogleSignup}
          >
            Sign Up with Google
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignupScreen;
