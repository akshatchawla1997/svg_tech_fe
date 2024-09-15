import React from 'react';

const RegisterComponent = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-4xl">
        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* First Name */}
            <div>
              <label htmlFor="first_name" className="block text-gray-700 text-sm font-bold mb-2">
                First Name
              </label>
              <input
                type="text"
                id="first_name"
                placeholder="First Name"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring"
              />
            </div>

            {/* Last Name */}
            <div>
              <label htmlFor="last_name" className="block text-gray-700 text-sm font-bold mb-2">
                Last Name
              </label>
              <input
                type="text"
                id="last_name"
                placeholder="Last Name"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring"
              />
            </div>

            {/* User Name */}
            <div>
              <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">
                User Name
              </label>
              <input
                type="text"
                id="username"
                placeholder="User Name"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                E-Mail
              </label>
              <input
                type="email"
                id="email"
                placeholder="E-Mail"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring"
              />
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring"
              />
            </div>

            {/* Password Confirmation */}
            <div>
              <label htmlFor="password_confirmation" className="block text-gray-700 text-sm font-bold mb-2">
                Password Confirmation
              </label>
              <input
                type="password"
                id="password_confirmation"
                placeholder="Password Confirmation"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring"
              />
            </div>
          </div>

          {/* Register Button */}
          <div className="flex justify-start mt-6">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring"
            >
              REGISTER
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterComponent;
