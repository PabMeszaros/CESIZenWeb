const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:8080', // ou 8081 si Docker
    setupNodeEvents(on, config) {
      // On ne met rien ici, pas de ts-loader
    },
  },
})
