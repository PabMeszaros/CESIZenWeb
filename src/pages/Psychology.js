"use client";
import { motion } from "framer-motion";
import { Brain, BookOpen, Users, Heart, Sparkles } from "lucide-react";
import Header from "../components/Header";

function Psychology() {
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
          <div className="inline-block p-4 rounded-full bg-pink-100 mb-4">
            <Brain className="w-10 h-10 text-pink-500" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            Psychologie : Comprendre l'esprit
          </h1>
          <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto text-lg">
            Bienvenue dans le monde fascinant de la psychologie ! Ce domaine explore les complexités du comportement
            humain, des processus mentaux et des expériences émotionnelles.
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
            className="bg-white rounded-2xl shadow-md p-8 border-t-4 border-pink-300"
          >
            <div className="flex items-center mb-4">
              <div className="p-2 rounded-lg bg-pink-100 mr-3">
                <BookOpen className="w-6 h-6 text-pink-500" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-800">Concepts clés en psychologie</h2>
            </div>
            <ul className="space-y-4 text-gray-700 leading-relaxed">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-pink-400 mt-2 mr-2"></span>
                <div>
                  <strong className="text-gray-800">Psychologie cognitive :</strong> Étude des processus mentaux tels que
                  la mémoire, la résolution de problèmes et la prise de décision.
                </div>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-purple-400 mt-2 mr-2"></span>
                <div>
                  <strong className="text-gray-800">Psychologie du développement :</strong> Exploration de la façon dont les
                  personnes grandissent et évoluent tout au long de leur vie.
                </div>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-blue-400 mt-2 mr-2"></span>
                <div>
                  <strong className="text-gray-800">Psychologie sociale :</strong> Compréhension de la manière dont les
                  pensées, les sentiments et les comportements des individus sont influencés par les autres.
                </div>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-green-400 mt-2 mr-2"></span>
                <div>
                  <strong className="text-gray-800">Psychologie clinique :</strong> Évaluation et traitement des troubles
                  mentaux et de la détresse psychologique.
                </div>
              </li>
            </ul>
          </motion.section>

          <motion.section
            variants={itemVariants}
            className="bg-white rounded-2xl shadow-md p-8 border-t-4 border-purple-300"
          >
            <div className="flex items-center mb-4">
              <div className="p-2 rounded-lg bg-purple-100 mr-3">
                <Heart className="w-6 h-6 text-purple-500" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-800">Avantages de l'étude de la psychologie</h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              L'étude de la psychologie offre de nombreux avantages pour la croissance personnelle et professionnelle :
            </p>
            <ul className="space-y-3 text-gray-700 leading-relaxed">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-purple-400 mt-2 mr-2"></span>
                <div>Amélioration de la compréhension de soi et des autres.</div>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-purple-400 mt-2 mr-2"></span>
                <div>Amélioration de la communication et des compétences interpersonnelles.</div>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-purple-400 mt-2 mr-2"></span>
                <div>Amélioration de la résolution de problèmes et des capacités de pensée critique.</div>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-purple-400 mt-2 mr-2"></span>
                <div>Augmentation de l'empathie et de l'intelligence émotionnelle.</div>
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
              <h2 className="text-2xl font-semibold text-gray-800">Ressources pour approfondir vos connaissances</h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Voici quelques ressources pour approfondir votre compréhension de la psychologie :
            </p>
            <ul className="space-y-3 text-gray-700 leading-relaxed">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-blue-400 mt-2 mr-2"></span>
                <div>
                  <a
                    href="https://www.apa.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-700 transition-colors duration-200 border-b border-blue-200 hover:border-blue-500"
                  >
                    American Psychological Association (APA)
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-blue-400 mt-2 mr-2"></span>
                <div>
                  <a
                    href="https://www.psychologytoday.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-700 transition-colors duration-200 border-b border-blue-200 hover:border-blue-500"
                  >
                    Psychology Today
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-blue-400 mt-2 mr-2"></span>
                <div>
                  <a
                    href="https://www.simplypsychology.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-700 transition-colors duration-200 border-b border-blue-200 hover:border-blue-500"
                  >
                    Simply Psychology
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
              <h2 className="text-2xl font-semibold text-gray-800">Questions d'autoréflexion</h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Réfléchissez à ces questions pour évaluer votre propre bien-être psychologique :
            </p>
            <ol className="space-y-4 text-gray-700 leading-relaxed">
              <li className="flex items-start">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-green-100 text-green-600 text-sm font-medium mr-3 mt-0.5">
                  1
                </span>
                <div>Comment vos pensées et vos sentiments影响ent-ils votre vie quotidienne ?</div>
              </li>
              <li className="flex items-start">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-green-100 text-green-600 text-sm font-medium mr-3 mt-0.5">
                  2
                </span>
                <div>Quelles stratégies utilisez-vous pour gérer le stress et les émotions difficiles ?</div>
              </li>
              <li className="flex items-start">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-green-100 text-green-600 text-sm font-medium mr-3 mt-0.5">
                  3
                </span>
                <div>Comment pouvez-vous cultiver des relations plus positives et saines ?</div>
              </li>
            </ol>
          </motion.section>
        </motion.div>

        <motion.div
          className="mt-12 bg-gradient-to-r from-pink-100 to-purple-100 rounded-2xl p-8 text-center shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Prêt à explorer davantage ?</h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Plongez plus profondément dans le monde de la psychologie grâce à nos ressources sélectionnées, nos sessions
            animées par des experts et nos conseils personnalisés.
          </p>
          <button className="px-8 py-3 bg-gradient-to-r from-pink-400 to-purple-400 hover:from-pink-500 hover:to-purple-500 text-white rounded-full font-medium shadow-md hover:shadow-lg transition-all duration-300">
            Prendre rendez-vous
          </button>
        </motion.div>
      </div>
    </div>
  );
}

export default Psychology;
