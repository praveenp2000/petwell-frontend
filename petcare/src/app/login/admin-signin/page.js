'use client'
import React, { useState } from "react";

const SignIn = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="flex h-screen w-full items-center justify-center bg-gray-100">
      <div className="flex w-full max-w-4xl overflow-hidden rounded-lg shadow-lg">
        {/* Left Column */}
        <div className="w-1/2 bg-gradient-to-r from-gray-900 to-gray-700 text-white flex flex-col items-center justify-center p-10">
          <h1 className="text-3xl font-bold mb-4">{isSignUp ? "Welcome Aboard!" : "Welcome Back!"}</h1>
          <p className="text-center text-gray-300">
            {isSignUp
              ? "Join us today and explore amazing features."
              : "Login to continue your journey with us."}
          </p>
        </div>
        
        {/* Right Column */}
        <div className="w-1/2 bg-white p-10 flex flex-col justify-center">
          <h2 className="text-2xl font-semibold mb-6">{isSignUp ? "Sign Up" : "Login"}</h2>
          
          <form>
            {isSignUp && (
              <div className="mb-4">
                <label className="block text-gray-700">Full Name</label>
                <input type="text" className="w-full mt-2 p-2 border rounded-lg" placeholder="John Doe" />
              </div>
            )}
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input type="email" className="w-full mt-2 p-2 border rounded-lg" placeholder="example@email.com" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Password</label>
              <input type="password" className="w-full mt-2 p-2 border rounded-lg" placeholder="********" />
            </div>
            <button className="w-full bg-gray-900 text-white p-2 rounded-lg hover:bg-gray-700 transition duration-300">
              {isSignUp ? "Sign Up" : "Login"}
            </button>
          </form>
          
          <p className="mt-4 text-sm text-gray-600 text-center">
            {isSignUp ? "Already have an account?" : "Don't have an account?"} 
            <span 
              className="text-gray-900 font-semibold cursor-pointer ml-1" 
              onClick={() => setIsSignUp(!isSignUp)}
            >
              {isSignUp ? "Login here" : "Sign up here"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
