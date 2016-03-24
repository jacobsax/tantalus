/* global angular */

'use strict'

/**
 * Service to manage user's notebooks.
 */
function NotebooksService () {
  var list = []

  /**
   * Get a list of all notebooks.
   * @return {Array} Array of notebook objects.
   */
  function getNotebooks () {
    return list
  }

  /**
   * Load notebooks from the underlying storage.
   */
  function loadNotebooks () {
    list.push({
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
