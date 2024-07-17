// cypress.config.js
import { defineConfig } from 'cypress'

export default defineConfig({
  chromeWebSecurity: false,
  viewportWidth: 1600,
  viewportHeight: 900,
  
  e2e: {
    baseUrl: 'https://notes-serverless-app.com',
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    env: {
      viewportWidthBreakpoint: 768,
    },  
  },
  projectId: 'pn8fw7',
})




