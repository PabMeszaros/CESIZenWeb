"use client";

import React, { useState } from 'react';
import Header from '../components/Header';
import { motion } from "framer-motion";
import { Brain, BookOpen, Users, Heart, Sparkles, Edit, Save } from "lucide-react";

function Profile() {
  // État pour stocker les informations de l'utilisateur
  const [userInfo, setUserInfo] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '123-456-7890',
    address: '123 Main St, Cityville',
  });

  // État pour activer/désactiver le mode édition
  const [isEditing, setIsEditing] = useState(false);

  // Gestion des changements dans les champs du formulaire
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  // Gestion du bouton "Édition"
  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  // Gestion de la sauvegarde des modifications
  const handleSaveClick = () => {
    setIsEditing(false);
    alert('Informations sauvegardées avec succès !');
  };

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
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      <Header />

      {/* Decorative elements */}
      <motion.div
        className="fixed top-40 right-10 w-32 h-32 rounded-full bg-purple-100 opacity-30 animate-floating"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1 }}
      />
      <motion.div
        className="fixed bottom-20 left-10 w-24 h-24 rounded-full bg-blue-100 opacity-30 animation-delay-2000 animate-floating"
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
            <Users className="w-10 h-10 text-purple-500" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Mon Profil
          </h1>
          <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto text-lg">
            Gérez et mettez à jour vos informations personnelles pour une expérience personnalisée.
          </p>
        </motion.section>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-1 gap-8"
        >
          <motion.section
            variants={itemVariants}
            className="bg-white rounded-2xl shadow-md p-8 border-t-4 border-purple-300"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <div className="p-2 rounded-lg bg-purple-100 mr-3">
                  <BookOpen className="w-6 h-6 text-purple-500" />
                </div>
                <h2 className="text-2xl font-semibold text-gray-800">Informations Personnelles</h2>
              </div>
              {/* Edit/Save Button Integrated Here */}
              {!isEditing ? (
                <button
                  type="button"
                  onClick={handleEditClick}
                  className="flex items-center px-4 py-2 bg-gradient-to-r from-purple-400 to-blue-400 hover:from-purple-500 hover:to-blue-500 text-white rounded-full font-medium shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <Edit className="w-5 h-5 mr-2" /> Édition
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleSaveClick}
                  className="flex items-center px-4 py-2 bg-gradient-to-r from-blue-400 to-purple-400 hover:from-blue-500 hover:to-purple-500 text-white rounded-full font-medium shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <Save className="w-5 h-5 mr-2" /> Sauvegarder
                </button>
              )}
            </div>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">Prénom :</label>
                <input
                  type="text"
                  name="firstName"
                  value={userInfo.firstName}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">Nom :</label>
                <input
                  type="text"
                  name="lastName"
                  value={userInfo.lastName}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">Email :</label>
                <input
                  type="email"
                  name="email"
                  value={userInfo.email}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">Téléphone :</label>
                <input
                  type="text"
                  name="phone"
                  value={userInfo.phone}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">Adresse :</label>
                <input
                  type="text"
                  name="address"
                  value={userInfo.address}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
            </form>
          </motion.section>
        </motion.div>
      </div>
    </div>
  );
}

export default Profile;
