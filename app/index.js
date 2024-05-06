"use client"
import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from 'next/navigation';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "./firebase/config"; 

function Index() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showEmailInputs, setShowEmailInputs] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleEmailSignup = () => {
    setShowEmailInputs(true);
  };

  const handleGoogleSignup = () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // Handle successful Google sign-in
        const user = result.user;
        console.log('Google sign-in successful:', user);
        router.push('/dashboard');
      })
      .catch((error) => {
        // Handle errors
        console.error('Error occurred during Google sign-in:', error);
      });
  };

  const handleSubmit = () => {
    setEmailError('');
    setPasswordError('');

    if (!email) {
      setEmailError('Email is required.');
    } else if (!email.endsWith('@gmail.com')) {
      setEmailError('Email must end with "@gmail.com".');
    }

    if (!password) {
      setPasswordError('Password is required.');
    }

    if (!email || !email.endsWith('@gmail.com') || !password) {
      return;
    }

    const auth = getAuth(uath);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up successfully
        const user = userCredential.user;
        console.log('User signed up:', user);
        router.push('/dashboard');
      })
      .catch((error) => {
        // Handle errors
        console.error('Error occurred during email sign-up:', error);
      });
  };

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col md:flex-row">
      {/* Left section with image */}
      <div className="md:w-1/2 bg-gray-800 flex items-center justify-center">
        <img
          src="https://res.cloudinary.com/dnif0edly/image/upload/v1678531070/samples/landscapes/girl-urban-view.jpg"
          alt="Illustration"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right section with signup form */}
      <div className="md:w-1/2 flex items-center justify-center md: mt-10 md:mt-0 sm:w-1/2">
        <div className="bg-gray-800 p-8 rounded-lg shadow-md w-full md:w-96 sm:max-w-sm"> {/* Added sm:max-w-sm */}
          <h2 className="text-3xl font-bold text-white mb-4 text-center">Sign Up</h2>
          {emailError && (
            <p className="text-red-600 mb-2">{emailError}</p>
          )}
          {passwordError && (
            <p className="text-red-600 mb-2">{passwordError}</p>
          )}
          {!showEmailInputs && (
            <button
              className="bg-gray-600 text-white w-full px-4 py-2 rounded-lg mb-4"
              onClick={handleEmailSignup}
            >
              ✉️ Sign Up with Email
            </button>
          )}
          {showEmailInputs && (
            <>
              <input
                type="email"
                placeholder="Email"
                className={`bg-gray-700 text-white w-full px-4 py-2 rounded-lg mb-4 ${emailError && 'border-red-500'}`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                className={`bg-gray-700 text-white w-full px-4 py-2 rounded-lg mb-4 ${passwordError && 'border-red-500'}`}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                className="bg-blue-500 text-white w-full px-4 py-2 rounded-lg mb-2"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </>
          )}
          <button
            className="bg-gray-600 text-white w-full px-4 py-2 rounded-lg mb-2"
            onClick={handleGoogleSignup}
          >
             🇬 Sign Up with Google
          </button>
          <p className="text-gray-300 text-center">
            Already signed up?{' '}
            <span
              className="text-blue-500 cursor-pointer"
              onClick={() => router.push('/')}
            >
              Login here
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Index;
