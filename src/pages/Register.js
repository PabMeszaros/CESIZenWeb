"use client";
import { motion } from "framer-motion";
import RegisterForm from "../components/RegisterForm";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex flex-col items-center justify-center p-4">
      {/* Decorative elements */}
      <motion.div
        className="absolute top-20 left-20 w-32 h-32 rounded-full bg-pink-100 opacity-50 animate-floating"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1 }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-24 h-24 rounded-full bg-purple-100 opacity-50 animation-delay-2000 animate-floating"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1, delay: 0.3 }}
      />
      <motion.div
        className="absolute top-1/3 right-1/4 w-16 h-16 rounded-full bg-blue-100 opacity-50 animation-delay-4000 animate-floating"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1, delay: 0.6 }}
      />

      <div className="w-full max-w-md z-10">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link to="/" className="inline-block">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              CESIZen
            </h1>
          </Link>
          <motion.p
            className="text-gray-600 mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Commencez votre parcours de bien-être avec nous
          </motion.p>
        </motion.div>

        <motion.div
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          <div className="p-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">Inscription</h2>
            <RegisterForm />

            <div className="mt-6 text-center text-sm">
  <p className="text-gray-500">
    Vous avez déjà un compte ?{" "}
    <Link to="/" className="text-purple-500 hover:text-purple-600 font-medium">
      Connectez-vous
    </Link>
  </p>
</div>

          </div>

          <div className="py-4 bg-gradient-to-r from-pink-100 to-purple-100 text-center text-sm text-gray-600">
            <p>Vos données sont protégées par un cryptage sécurisé</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Register;
