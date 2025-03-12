"use client";
import { motion } from "framer-motion";
import { Brain, BookOpen, Users, Heart, Sparkles } from "lucide-react";
import Header from "../components/Header";

function Mindfulness() {
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
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-green-50">
      <Header />

      {/* Decorative elements */}
      <motion.div
        className="fixed top-40 right-10 w-32 h-32 rounded-full bg-yellow-100 opacity-30 animate-floating"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1 }}
      />
      <motion.div
        className="fixed bottom-20 left-10 w-24 h-24 rounded-full bg-green-100 opacity-30 animation-delay-2000 animate-floating"
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
          <div className="inline-block p-4 rounded-full bg-yellow-100 mb-4">
            <Sparkles className="w-10 h-10 text-yellow-500" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-green-400 bg-clip-text text-transparent">
            Explorer la Pleine Conscience (Mindfulness)
          </h1>
          <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto text-lg">
            Découvrez les bienfaits de la pleine conscience et apprenez des techniques simples pour intégrer cette pratique
            dans votre vie quotidienne.
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
            className="bg-white rounded-2xl shadow-md p-8 border-t-4 border-yellow-300"
          >
            <div className="flex items-center mb-4">
              <div className="p-2 rounded-lg bg-yellow-100 mr-3">
                <BookOpen className="w-6 h-6 text-yellow-500" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-800">Qu'est-ce que la Mindfulness ?</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              La Mindfulness, ou pleine conscience, est une pratique qui consiste à porter intentionnellement son attention
              sur le moment présent, sans jugement.
            </p>
          </motion.section>

          <motion.section
            variants={itemVariants}
            className="bg-white rounded-2xl shadow-md p-8 border-t-4 border-green-300"
          >
            <div className="flex items-center mb-4">
              <div className="p-2 rounded-lg bg-green-100 mr-3">
                <Heart className="w-6 h-6 text-green-500" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-800">Techniques de Mindfulness</h2>
            </div>
            <ul className="space-y-3 text-gray-700 leading-relaxed">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-green-400 mt-2 mr-2"></span>
                <div>Méditation assise</div>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-green-400 mt-2 mr-2"></span>
                <div>Balayage corporel</div>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-green-400 mt-2 mr-2"></span>
                <div>Marche méditative</div>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-green-400 mt-2 mr-2"></span>
                <div>Respiration consciente</div>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-green-400 mt-2 mr-2"></span>
                <div>Observation des pensées</div>
              </li>
            </ul>
          </motion.section>

          <motion.section
            variants={itemVariants}
            className="bg-white rounded-2xl shadow-md p-8 border-t-4 border-yellow-300"
          >
            <div className="flex items-center mb-4">
              <div className="p-2 rounded-lg bg-yellow-100 mr-3">
                <Users className="w-6 h-6 text-yellow-500" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-800">Exercice STOP</h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Voici un exercice simple de Mindfulness appelé STOP :
            </p>
            <ol className="space-y-4 text-gray-700 leading-relaxed">
              <li className="flex items-start">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-yellow-100 text-yellow-600 text-sm font-medium mr-3 mt-0.5">
                  1
                </span>
                <div>
                  <strong>S</strong> : Stop (Arrêtez-vous un instant)
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-yellow-100 text-yellow-600 text-sm font-medium mr-3 mt-0.5">
                  2
                </span>
                <div>
                  <strong>T</strong> : Take a breath (Prenez une respiration profonde)
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-yellow-100 text-yellow-600 text-sm font-medium mr-3 mt-0.5">
                  3
                </span>
                <div>
                  <strong>O</strong> : Observe (Observez vos pensées, émotions et sensations)
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-yellow-100 text-yellow-600 text-sm font-medium mr-3 mt-0.5">
                  4
                </span>
                <div>
                  <strong>P</strong> : Proceed (Poursuivez en pleine conscience)
                </div>
              </li>
            </ol>
          </motion.section>

          <motion.section
            variants={itemVariants}
            className="bg-white rounded-2xl shadow-md p-8 border-t-4 border-green-300"
          >
            <div className="flex items-center mb-4">
              <div className="p-2 rounded-lg bg-green-100 mr-3">
                <Sparkles className="w-6 h-6 text-green-500" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-800">Bénéfices de la pratique régulière</h2>
            </div>
            <ul className="space-y-3 text-gray-700 leading-relaxed">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-green-400 mt-2 mr-2"></span>
                <div>Réduction du stress et de l'anxiété</div>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-green-400 mt-2 mr-2"></span>
                <div>Amélioration de la concentration</div>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-green-400 mt-2 mr-2"></span>
                <div>Augmentation de la conscience de soi</div>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-green-400 mt-2 mr-2"></span>
                <div>Meilleure gestion des émotions</div>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-green-400 mt-2 mr-2"></span>
                <div>Amélioration du bien-être général</div>
              </li>
            </ul>
          </motion.section>
        </motion.div>

        <motion.div
          className="mt-12 bg-gradient-to-r from-yellow-100 to-green-100 rounded-2xl p-8 text-center shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Prêt à explorer davantage ?</h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Approfondissez votre pratique de la pleine conscience avec nos ressources sélectionnées, des ateliers guidés
            et des conseils personnalisés.
          </p>
          <button className="px-8 py-3 bg-gradient-to-r from-yellow-400 to-green-400 hover:from-yellow-500 hover:to-green-500 text-white rounded-full font-medium shadow-md hover:shadow-lg transition-all duration-300">
            Réserver une consultation
          </button>
        </motion.div>
      </div>
    </div>
  );
}

export default Mindfulness;
