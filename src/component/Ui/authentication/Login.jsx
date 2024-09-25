import React from 'react';
import { NavLink } from 'react-router-dom';

const LoginComponent = () => {
  return (
    <div className="min-h-screen w-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        {/* Logo */}
        <div className="text-center mb-6">
          <img
            src="/public/logo.png" // Replace with your logo URL
            alt="SV Tech Soft"
            className="mx-auto"
          />
        </div>

        {/* Welcome Text */}
        <h2 className="text-center text-2xl font-bold mb-6">Hi, Welcome back!</h2>

        {/* Username/Email Input */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Username or Email Address
          </label>
          <input
            type="text"
            id="username"
            placeholder="Username or Email Address"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring"
          />
        </div>

        {/* Password Input */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring"
          />
        </div>

        {/* Keep me signed in & Forgot Password */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <input type="checkbox" id="remember_me" className="form-checkbox h-4 w-4 text-blue-600" />
            <label htmlFor="remember_me" className="ml-2 block text-gray-900">
              Keep me signed in
            </label>
          </div>
          <a href="#" className="text-sm font-medium text-blue-600 hover:underline">Forgot?</a>
        </div>

        {/* Sign In Button */}
        <NavLink to='/'><button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring">
          Sign In
        </button></NavLink>

        {/* Register Link */}
        <div className="text-center mt-4">
          <p className="text-gray-600">
            Don't have an account?{' '}
            <a href="#" className="font-medium text-blue-600 hover:underline">
              Register now
            </a>
          </p>
        </div>

        {/* Google Sign-In (Optional) */}
        <div className="mt-6 text-center">
          <button className="bg-white border border-gray-300 text-gray-600 font-semibold py-2 px-4 rounded flex items-center justify-center w-full">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png"
              alt="Google Icon"
              className="w-5 h-5 mr-2"
            />
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
