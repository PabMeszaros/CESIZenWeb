"use client";
import React, { useState } from 'react';
import Header from '../components/Header';
import { motion } from "framer-motion";
import { BookOpen, Brain, Users, Heart, Sparkles } from "lucide-react";

function Activities() {
  const events = [
    { id: 1, event: "Décès du conjoint", score: 100 },
    { id: 2, event: "Divorce", score: 73 },
    { id: 3, event: "Séparation entre conjoints", score: 65 },
    { id: 4, event: "Maladie grave ou blessure personnelle", score: 53 },
    { id: 5, event: "Mariage", score: 50 },
    { id: 6, event: "Licenciement", score: 47 },
    { id: 7, event: "Réconciliation conjugale", score: 45 },
    { id: 8, event: "Retraite", score: 45 },
    { id: 9, event: "Changement majeur dans les finances", score: 38 },
    { id: 10, event: "Mort d'un proche parent", score: 37 },
  ];

  const [selectedEvents, setSelectedEvents] = useState({});

  const handleCheckboxChange = (id, score) => {
    setSelectedEvents(prev => {
      const newSelected = { ...prev };
      if (newSelected[id]) {
        delete newSelected[id];
      } else {
        newSelected[id] = score;
      }
      return newSelected;
    });
  };

  const totalScore = Object.values(selectedEvents).reduce((sum, score) => sum + score, 0);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-pink-50">
      <Header />

      {/* Decorative elements */}
      <motion.div
        className="fixed top-40 right-10 w-32 h-32 rounded-full bg-blue-100 opacity-30 animate-floating"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1 }}
      />
      <motion.div
        className="fixed bottom-20 left-10 w-24 h-24 rounded-full bg-pink-100 opacity-30 animation-delay-2000 animate-floating"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1, delay: 0.3 }}
      />

      <div className="container mx-auto py-12 px-4 relative z-10">
        <motion.section
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-block p-4 rounded-full bg-blue-100 mb-4">
            <Brain className="w-10 h-10 text-blue-500" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-pink-400 bg-clip-text text-transparent">
            Diagnostic de Stress
          </h1>
          <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto text-lg">
            Cochez les événements que vous avez vécus au cours des 12 derniers mois pour évaluer votre niveau de
            stress.
          </p>
        </motion.section>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <motion.section
            variants={itemVariants}
            className="bg-white rounded-2xl shadow-md p-8 border-t-4 border-blue-300"
          >
            <div className="flex items-center mb-4">
              <div className="p-2 rounded-lg bg-blue-100 mr-3">
                <BookOpen className="w-6 h-6 text-blue-500" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-800">Événements de vie</h2>
            </div>
            <form>
              {events.map((item) => (
                <div key={item.id} className="mb-2 flex items-center">
                  <input
                    type="checkbox"
                    id={`event-${item.id}`}
                    className="mr-2 leading-tight"
                    checked={!!selectedEvents[item.id]}
                    onChange={() => handleCheckboxChange(item.id, item.score)}
                  />
                  <label htmlFor={`event-${item.id}`} className="text-gray-700">
                    {item.event} ({item.score} points)
                  </label>
                </div>
              ))}
            </form>
          </motion.section>

          <motion.section
            variants={itemVariants}
            className="bg-white rounded-2xl shadow-md p-8 border-t-4 border-pink-300"
          >
            <div className="flex items-center mb-4">
              <div className="p-2 rounded-lg bg-pink-100 mr-3">
                <Heart className="w-6 h-6 text-pink-500" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-800">Votre Score Total</h2>
            </div>
            <div className="text-gray-700 leading-relaxed">
              <p className="mb-4">Votre score total est : {totalScore}</p>
              <p>
                Interprétation :
                <ul className="list-disc list-inside">
                  <li>
                    <strong>Moins de 150 :</strong> Stress faible.
                  </li>
                  <li>
                    <strong>Entre 150 et 300 :</strong> Stress modéré. Prenez des mesures pour gérer votre stress.
                  </li>
                  <li>
                    <strong>Plus de 300 :</strong> Stress élevé. Il est recommandé de consulter un professionnel.
                  </li>
                </ul>
              </p>
            </div>
          </motion.section>
        </motion.div>

        <motion.div
          className="mt-12 bg-gradient-to-r from-blue-100 to-pink-100 rounded-2xl p-8 text-center shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Besoin d'aide ?</h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Si vous avez un score élevé, n'hésitez pas à contacter un professionnel pour obtenir de l'aide et des
            conseils personnalisés.
          </p>
          <button className="px-8 py-3 bg-gradient-to-r from-blue-400 to-pink-400 hover:from-blue-500 hover:to-pink-500 text-white rounded-full font-medium shadow-md hover:shadow-lg transition-all duration-300">
            Contacter un professionnel
          </button>
        </motion.div>
      </div>
    </div>
  );
}

export default Activities;
