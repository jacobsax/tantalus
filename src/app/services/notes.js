/* global angular */

'use strict'

/**
 * Service to manager user's notes.
 */
function NotesService () {
  var notes = []

  /**
   * Get a list of all notes.
   * @return {Array} Array of note objects.
   */
  function getNotes () {
    return notes
  }

  /**
   * Load notes from the underlying storage.
   */
  function loadNotes () {
    notes.push({
      id: 1,
      title: 'Lorem ipsum',
      body: 'dolor sit amet'
    })
  }

  // Load notes immediately
  loadNotes()

  // Exposed service
  return {
    getNotes: getNotes
  }
}

module.exports = NotesService
