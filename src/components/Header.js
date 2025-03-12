"use client";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate(); // Utilisation du hook useNavigate

  const navItems = [
    { to: "/Home", label: "Accueil" },
    { to: "/Activities", label: "Activités" },
    { to: "/Profile", label: "Profil" },
  ];

  const handleLogout = () => {
    // Logique de déconnexion (par exemple, suppression des cookies ou du localStorage)
    // Puis redirection vers la page d'accueil
    navigate("/");
  };

  return (
    <header className="w-full py-6 px-4 md:px-8 relative z-20 bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/Home" className="flex items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="font-bold text-2xl bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent"
          >
            CESIZen
          </motion.div>
        </Link>

        {/* Navigation pour les écrans de bureau */}
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="hidden md:flex items-center space-x-8"
        >
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-gray-700 hover:text-purple-500 font-medium transition-colors duration-200 relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-200 to-purple-300 group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-gradient-to-r from-pink-200 to-purple-300 hover:from-pink-300 hover:to-purple-400 text-purple-700 rounded-full font-medium hover:shadow-lg transition-all duration-300"
          >
            Se déconnecter
          </button>
        </motion.nav>

        {/* Bouton pour ouvrir le menu mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-purple-500">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Navigation pour les écrans mobiles */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="absolute top-20 left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg rounded-b-2xl p-6 md:hidden"
        >
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="text-gray-700 hover:text-purple-500 font-medium py-2 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-gradient-to-r from-pink-200 to-purple-300 hover:from-pink-300 hover:to-purple-400 text-purple-700 rounded-full font-medium text-center hover:shadow-lg transition-all duration-300"
            >
              Se déconnecter
            </button>
          </nav>
        </motion.div>
      )}
    </header>
  );
}
