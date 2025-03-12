"use client";

import { useState } from "react";
import { Heart, Brain, Leaf, Waves, Sparkles, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Header from "../components/Header";

export default function Home() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const menuItems = [
    {
      path: "/psychology",
      label: "Psychologie",
      icon: <Brain className="w-6 h-6" />,
      color: "bg-pink-100 text-pink-500 border-pink-200",
      hoverColor: "hover:bg-pink-200 hover:border-pink-300",
    },
    {
      path: "/emotions",
      label: "Émotions",
      icon: <Heart className="w-6 h-6" />,
      color: "bg-purple-100 text-purple-500 border-purple-200",
      hoverColor: "hover:bg-purple-200 hover:border-purple-300",
    },
    {
      path: "/stress",
      label: "Gestion du stress",
      icon: <Waves className="w-6 h-6" />,
      color: "bg-blue-100 text-blue-500 border-blue-200",
      hoverColor: "hover:bg-blue-200 hover:border-blue-300",
    },
    {
      path: "/zen",
      label: "Art de vivre zen",
      icon: <Leaf className="w-6 h-6" />,
      color: "bg-green-100 text-green-500 border-green-200",
      hoverColor: "hover:bg-green-200 hover:border-green-300",
    },
    {
      path: "/mindfulness",
      label: "Pleine conscience",
      icon: <Sparkles className="w-6 h-6" />,
      color: "bg-yellow-100 text-yellow-500 border-yellow-200",
      hoverColor: "hover:bg-yellow-200 hover:border-yellow-300",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <Header />

      <main className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="text-center mb-16 relative">
          <motion.div
            className="absolute -top-20 -left-10 w-32 h-32 rounded-full bg-pink-100 opacity-50 animate-floating"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ duration: 1 }}
          />
          <motion.div
            className="absolute -bottom-10 -right-10 w-24 h-24 rounded-full bg-blue-100 opacity-50 animation-delay-2000 animate-floating"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ duration: 1, delay: 0.3 }}
          />

          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 relative z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Bienvenue sur CESIZen
          </motion.h1>

          <motion.p
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Découvrez un monde de pleine conscience et d'équilibre conçu pour vous.
          </motion.p>
        </div>

        <motion.div
          className="mt-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-center text-gray-700 mb-10">
            Explorez nos thématiques
          </h2>

          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuItems.map((item, index) => (
              <motion.li
                key={item.path}
                className={`rounded-xl border ${item.color} ${item.hoverColor} transition-all duration-300 shadow-sm hover:shadow-md`}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <Link to={item.path} className="flex items-center p-6 h-full">
                  <div className={`p-3 rounded-full mr-4 ${item.color.split(" ")[0]} ${item.color.split(" ")[1]}`}>
                    {item.icon}
                  </div>
                  <span className="text-lg font-medium flex-grow">{item.label}</span>

                  <motion.div
                    animate={{
                      x: hoveredIndex === index ? 5 : 0,
                      opacity: hoveredIndex === index ? 1 : 0.5,
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </main>

      <style jsx global>{`
        @keyframes floating {
          0%,
          100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(15px, -15px);
          }
        }
        .animate-floating {
          animation: floating 6s ease-in-out infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}
