import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <div>
          <h1 className="text-2xl font-bold">MyCompany</h1>
          <p className="text-gray-400 mt-2">
            Biz foydalanuvchilarga eng yaxshi xizmatlarni taqdim etamiz.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-2">Foydali Havolalar</h2>
          <ul className="text-gray-400 space-y-1">
            <li><a href="#" className="hover:text-white">Biz haqimizda</a></li>
            <li><a href="#" className="hover:text-white">Aloqa</a></li>
            <li><a href="#" className="hover:text-white">Xizmatlar</a></li>
            <li><a href="#" className="hover:text-white">Maxfiylik</a></li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-2">Bizni kuzating</h2>
          <div className="flex space-x-4 mt-2 text-gray-400">
            <a href="#" className="hover:text-white"><FaFacebookF /></a>
            <a href="#" className="hover:text-white"><FaTwitter /></a>
            <a href="#" className="hover:text-white"><FaInstagram /></a>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-500 text-sm mt-6 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} MyCompany. Barcha huquqlar himoyalangan.
      </div>
    </footer>
  );
};

export default Footer;
