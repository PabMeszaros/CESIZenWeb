"use client";
import { motion } from "framer-motion";
import { Heart, BookOpen, Users, Sparkles } from "lucide-react";
import Header from "../components/Header";

function Emotions() {
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
        className="fixed top-40 right-10 w-32 h-32 rounded-full bg-pink-100 opacity-30 animate-floating"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1 }}
      />
      <motion.div
        className="fixed bottom-20 left-10 w-24 h-24 rounded-full bg-purple-100 opacity-30 animation-delay-2000 animate-floating"
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
          <div className="inline-block p-4 rounded-full bg-purple-100 mb-4">
            <Heart className="w-10 h-10 text-purple-500" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Comprendre les Émotions : Un Voyage Intérieur
          </h1>
          <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto text-lg">
            Les émotions font partie intégrante de l'expérience humaine. Elles fournissent des informations précieuses sur nos besoins, nos désirs et nos relations avec le monde qui nous entoure.
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
            className="bg-white rounded-2xl shadow-md p-8 border-t-4 border-purple-300"
          >
            <div className="flex items-center mb-4">
              <div className="p-2 rounded-lg bg-purple-100 mr-3">
                <BookOpen className="w-6 h-6 text-purple-500" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-800">Le Spectre des Émotions</h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Les émotions vont de la joie et de l'excitation à la tristesse et à la peur. Comprendre ce spectre est essentiel au bien-être émotionnel :
            </p>
            <ul className="space-y-3 text-gray-700 leading-relaxed">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-purple-400 mt-2 mr-2"></span>
                <div>
                  <strong className="text-gray-800">Émotions Positives :</strong> Joie, amour, gratitude, excitation.
                </div>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-purple-400 mt-2 mr-2"></span>
                <div>
                  <strong className="text-gray-800">Émotions Négatives :</strong> Tristesse, colère, peur, culpabilité.
                </div>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-purple-400 mt-2 mr-2"></span>
                <div>
                  <strong className="text-gray-800">Émotions Neutres :</strong> Surprise, curiosité, anticipation.
                </div>
              </li>
            </ul>
          </motion.section>

          <motion.section
            variants={itemVariants}
            className="bg-white rounded-2xl shadow-md p-8 border-t-4 border-pink-300"
          >
            <div className="flex items-center mb-4">
              <div className="p-2 rounded-lg bg-pink-100 mr-3">
                <Heart className="w-6 h-6 text-pink-500" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-800">Gérer Vos Émotions</h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Une gestion efficace des émotions est essentielle à la santé mentale. Voici quelques stratégies pour vous aider :
            </p>
            <ul className="space-y-3 text-gray-700 leading-relaxed">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-pink-400 mt-2 mr-2"></span>
                <div>
                  <strong className="text-gray-800">Pleine Conscience :</strong> Porter attention à vos émotions sans jugement.
                </div>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-pink-400 mt-2 mr-2"></span>
                <div>
                  <strong className="text-gray-800">Restructuration Cognitive :</strong> Modifier les schémas de pensée négatifs.
                </div>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-pink-400 mt-2 mr-2"></span>
                <div>
                  <strong className="text-gray-800">Auto-Compassion :</strong> Vous traiter avec gentillesse et compréhension.
                </div>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-pink-400 mt-2 mr-2"></span>
                <div>
                  <strong className="text-gray-800">Expression Émotionnelle :</strong> Trouver des moyens sains d'exprimer vos sentiments.
                </div>
              </li>
            </ul>
          </motion.section>

          <motion.section
            variants={itemVariants}
            className="bg-white rounded-2xl shadow-md p-8 border-t-4 border-blue-300"
          >
            <div className="flex items-center mb-4">
              <div className="p-2 rounded-lg bg-blue-100 mr-3">
                <Users className="w-6 h-6 text-blue-500" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-800">Ressources Pour le Soutien Émotionnel</h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Si vous avez du mal à gérer vos émotions, rappelez-vous que vous n'êtes pas seul. Voici quelques ressources pour obtenir de l'aide :
            </p>
            <ul className="space-y-3 text-gray-700 leading-relaxed">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-blue-400 mt-2 mr-2"></span>
                <div>
                  <a
                    href="https://www.helpguide.org/articles/mental-health/emotional-intelligence-toolkit.htm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-700 transition-colors duration-200 border-b border-blue-200 hover:border-blue-500"
                  >
                    HelpGuide : Boîte à outils d'intelligence émotionnelle
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-blue-400 mt-2 mr-2"></span>
                <div>
                  <a
                    href="https://www.mindful.org/how-to-deal-with-difficult-emotions/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-700 transition-colors duration-200 border-b border-blue-200 hover:border-blue-500"
                  >
                    Mindful : Comment gérer les émotions difficiles
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-blue-400 mt-2 mr-2"></span>
                <div>
                  <a
                    href="https://www.psychologytoday.com/us/basics/emotions"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-700 transition-colors duration-200 border-b border-blue-200 hover:border-blue-500"
                  >
                    Psychology Today : Émotions
                  </a>
                </div>
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
              <h2 className="text-2xl font-semibold text-gray-800">Questions Réfléchies</h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Prenez un moment pour réfléchir à vos expériences émotionnelles :
            </p>
            <ol className="space-y-4 text-gray-700 leading-relaxed">
              <li className="flex items-start">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-green-100 text-green-600 text-sm font-medium mr-3 mt-0.5">
                  1
                </span>
                <div>Quelles émotions ressentez-vous le plus souvent ?</div>
              </li>
              <li className="flex items-start">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-green-100 text-green-600 text-sm font-medium mr-3 mt-0.5">
                  2
                </span>
                <div>Qu'est-ce qui déclenche vos réactions émotionnelles les plus intenses ?</div>
              </li>
              <li className="flex items-start">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-green-100 text-green-600 text-sm font-medium mr-3 mt-0.5">
                  3
                </span>
                <div>Quelles stratégies d'adaptation trouvez-vous les plus utiles pour gérer les émotions difficiles ?</div>
              </li>
            </ol>
          </motion.section>
        </motion.div>

        <motion.div
          className="mt-12 bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-8 text-center shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Prêt à Explorer Davantage ?</h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Plongez plus profondément dans le monde des émotions grâce à nos ressources sélectionnées, nos sessions dirigées par des experts et nos conseils personnalisés.
          </p>
          <button className="px-8 py-3 bg-gradient-to-r from-purple-400 to-pink-400 hover:from-purple-500 hover:to-pink-500 text-white rounded-full font-medium shadow-md hover:shadow-lg transition-all duration-300">
            Planifier une Consultation
          </button>
        </motion.div>
      </div>
    </div>
  );
}

export default Emotions;
