const { defineConfig } = require('cypress');
const { timestamp } = require('rxjs');

module.exports = defineConfig({
  projectId: '7b8i5g',
  allowCypressEnv: false,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    video: true,
    reporter: 'mochawesome',
    reporterOptions: {
      reporterDir: 'cypress/results',
      overwrite: false,
      html: true,
      json: false,
      timestamp: 'mmddyyyy_HHMMss',
    },
  },
});
