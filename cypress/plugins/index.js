
const cucumber = require('cypress-cucumber-preprocessor').default;

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */

module.exports = (on, config) => {
  on('file:preprocessor', cucumber())
}