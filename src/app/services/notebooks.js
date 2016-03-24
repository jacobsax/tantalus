/* global angular */

'use strict'

// Load modules
var uuid = require('node-uuid')

/**
 * Service to manage user's notebooks.
 */
function NotebooksService (localStorageService) {
  var notebooks = []

  /**
   * Get a list of all notebooks.
   * @return {Array} Array of notebook objects.
   */
  function getNotebooks () {
    return notebooks
  }

  /**
   * Create initial notebooks for a new user.
   */
  function initNotebooks () {
    notebooks = []
    notebooks.push({
      id: uuid.v1(),
      name: 'General'
    })
  }

  /**
   * Load notebooks from the underlying storage.
   */
  function loadNotebooks () {
    notebooks = localStorageService.get('Notebooks')

    if (!notebooks) {
      initNotebooks()
    }
  }

  // Load notebooks immediatelly
  loadNotebooks()

  // Exposed service
  return {
    getNotebooks: getNotebooks
  }
}

module.exports = NotebooksService
