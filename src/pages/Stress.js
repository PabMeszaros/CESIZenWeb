"use client";
import { motion } from "framer-motion";
import { BookOpen, Heart, Sparkles, Waves } from "lucide-react";
import Header from "../components/Header";

function Stress() {
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <Header />

      {/* Decorative elements */}
      <motion.div
        className="fixed top-40 right-10 w-32 h-32 rounded-full bg-blue-100 opacity-30 animate-floating"
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
          <div className="inline-block p-4 rounded-full bg-blue-100 mb-4">
            <Waves className="w-10 h-10 text-blue-500" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
            Comprendre et gérer le stress
          </h1>
          <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto text-lg">
            Découvrez des techniques efficaces pour comprendre et gérer le stress dans votre vie quotidienne.
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
              <h2 className="text-2xl font-semibold text-gray-800">Qu'est-ce que le stress ?</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Le stress est la réaction du corps à tout changement qui nécessite un ajustement ou une réponse. Le corps
              réagit à ces changements par des réponses physiques, mentales et émotionnelles.
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
              <h2 className="text-2xl font-semibold text-gray-800">Techniques courantes de gestion du stress</h2>
            </div>
            <ul className="space-y-3 text-gray-700 leading-relaxed">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-green-400 mt-2 mr-2"></span>
                <div>Exercices de respiration profonde</div>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-green-400 mt-2 mr-2"></span>
                <div>Relaxation musculaire progressive</div>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-green-400 mt-2 mr-2"></span>
                <div>Méditation de pleine conscience</div>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-green-400 mt-2 mr-2"></span>
                <div>Exercice physique régulier</div>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-green-400 mt-2 mr-2"></span>
                <div>Maintenir une alimentation saine</div>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-green-400 mt-2 mr-2"></span>
                <div>Avoir un sommeil adéquat</div>
              </li>
            </ul>
          </motion.section>
        </motion.div>

        <motion.div
          className="mt-12 bg-gradient-to-r from-blue-100 to-green-100 rounded-2xl p-8 text-center shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Besoin d'aide supplémentaire ?</h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Si vous avez du mal à gérer votre stress, n'hésitez pas à contacter un professionnel de la santé mentale.
            Ils peuvent vous fournir des stratégies personnalisées pour vous aider à gérer efficacement votre stress.
          </p>
          <button className="px-8 py-3 bg-gradient-to-r from-blue-400 to-green-400 hover:from-blue-500 hover:to-green-500 text-white rounded-full font-medium shadow-md hover:shadow-lg transition-all duration-300">
            Trouver un professionnel
          </button>
        </motion.div>
      </div>
    </div>
  );
}

export default Stress;
