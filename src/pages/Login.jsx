import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navog = useNavigate()
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8 space-y-6">
        <h2 className="text-3xl font-bold text-center text-gray-800">Kirish</h2>
        <form className="space-y-4">
          <div>
            <label type="email" className="block text-gray-700 font-medium mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="usmonqulovabduhamid@gmail.com"
              required
            />
          </div>

          <div>
            <label type="password" className="block text-gray-700 font-medium mb-1">
              Parol
            </label>
            <input
              id="password"
              type="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="••••••••"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Kirish
          </button>
        </form>

        <p onClick={()=> navog(-1)} className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200 text-center font-bold">
            Go Back
        </p>
      </div>
    </div>
  );
};

export default Login;
