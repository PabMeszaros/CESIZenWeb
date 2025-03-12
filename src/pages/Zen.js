"use client";
import { motion } from "framer-motion";
import { Leaf, BookOpen, Heart, Sparkles } from "lucide-react";
import Header from "../components/Header";

function Zen() {
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
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-yellow-50">
      <Header />

      {/* Decorative elements */}
      <motion.div
        className="fixed top-40 right-10 w-32 h-32 rounded-full bg-green-100 opacity-30 animate-floating"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1 }}
      />
      <motion.div
        className="fixed bottom-20 left-10 w-24 h-24 rounded-full bg-yellow-100 opacity-30 animation-delay-2000 animate-floating"
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
          <div className="inline-block p-4 rounded-full bg-green-100 mb-4">
            <Leaf className="w-10 h-10 text-green-500" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 to-yellow-400 bg-clip-text text-transparent">
            Découvrir le Zen
          </h1>
          <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto text-lg">
            Explorez la voie du Zen, une pratique méditative pour atteindre l'éveil spirituel à travers la méditation
            et l'intuition.
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
            className="bg-white rounded-2xl shadow-md p-8 border-t-4 border-green-300"
          >
            <div className="flex items-center mb-4">
              <div className="p-2 rounded-lg bg-green-100 mr-3">
                <BookOpen className="w-6 h-6 text-green-500" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-800">Qu'est-ce que le Zen ?</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Le Zen est une pratique méditative issue du bouddhisme qui vise à atteindre l'éveil spirituel à travers
              la méditation et l'intuition.
            </p>
          </motion.section>

          <motion.section
            variants={itemVariants}
            className="bg-white rounded-2xl shadow-md p-8 border-t-4 border-yellow-300"
          >
            <div className="flex items-center mb-4">
              <div className="p-2 rounded-lg bg-yellow-100 mr-3">
                <Heart className="w-6 h-6 text-yellow-500" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-800">Principes fondamentaux du Zen</h2>
            </div>
            <ul className="space-y-3 text-gray-700 leading-relaxed">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-yellow-400 mt-2 mr-2"></span>
                <div>Vivre dans le moment présent</div>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-yellow-400 mt-2 mr-2"></span>
                <div>Cultiver la simplicité et le détachement</div>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-yellow-400 mt-2 mr-2"></span>
                <div>Pratiquer la méditation assise (zazen)</div>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-yellow-400 mt-2 mr-2"></span>
                <div>Développer la compassion et la bienveillance</div>
              </li>
            </ul>
          </motion.section>

          <motion.section
            variants={itemVariants}
            className="bg-white rounded-2xl shadow-md p-8 border-t-4 border-green-300"
          >
            <div className="flex items-center mb-4">
              <div className="p-2 rounded-lg bg-green-100 mr-3">
                <Sparkles className="w-6 h-6 text-green-500" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-800">Exercice de méditation Zen simple</h2>
            </div>
            <ol className="space-y-4 text-gray-700 leading-relaxed">
              <li className="flex items-start">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-green-100 text-green-600 text-sm font-medium mr-3 mt-0.5">
                  1
                </span>
                <div>Asseyez-vous confortablement, le dos droit</div>
              </li>
              <li className="flex items-start">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-green-100 text-green-600 text-sm font-medium mr-3 mt-0.5">
                  2
                </span>
                <div>Concentrez-vous sur votre respiration</div>
              </li>
              <li className="flex items-start">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-green-100 text-green-600 text-sm font-medium mr-3 mt-0.5">
                  3
                </span>
                <div>Observez vos pensées sans jugement</div>
              </li>
              <li className="flex items-start">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-green-100 text-green-600 text-sm font-medium mr-3 mt-0.5">
                  4
                </span>
                <div>Ramenez doucement votre attention à la respiration quand l'esprit s'égare</div>
              </li>
              <li className="flex items-start">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-green-100 text-green-600 text-sm font-medium mr-3 mt-0.5">
                  5
                </span>
                <div>Pratiquez pendant 5-10 minutes pour commencer</div>
              </li>
            </ol>
          </motion.section>
        </motion.div>

        <motion.div
          className="mt-12 bg-gradient-to-r from-green-100 to-yellow-100 rounded-2xl p-8 text-center shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Envie d'aller plus loin ?</h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Plongez plus profondément dans le monde du Zen avec nos ressources sélectionnées, des sessions animées par
            des experts et des conseils personnalisés.
          </p>
          <button className="px-8 py-3 bg-gradient-to-r from-green-400 to-yellow-400 hover:from-green-500 hover:to-yellow-500 text-white rounded-full font-medium shadow-md hover:shadow-lg transition-all duration-300">
            Réserver une consultation
          </button>
        </motion.div>
      </div>
    </div>
  );
}

export default Zen;
