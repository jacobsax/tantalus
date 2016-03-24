/* global angular */

'use strict'

/**
 * Service to manage user's notebooks.
 */
function NotebooksService () {
  var notebooks = []

  /**
   * Get a list of all notebooks.
   * @return {Array} Array of notebook objects.
   */
  function getNotebooks () {
    return notebooks
  }

  /**
   * Load notebooks from the underlying storage.
   */
  function loadNotebooks () {
    notebooks.push({
      id: 1,
      name: 'General'
    })
  }

  // Load notebooks immediatelly
  loadNotebooks()

  // Exposed functions
  return {
    getNotebooks: getNotebooks
  }
}

module.exports = NotebooksService
