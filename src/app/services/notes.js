'use strict'

// Load modules
var uuid = require('node-uuid')

/**
 * Service to manager user's notes.
 */
function NotesService (localStorageService) {
  var notes = []

  // Welcome note constants
  var welcomeTitle = 'Welcome to Tantalus!'
  var welcomeBody = 'Tantalus is an alternative cross-platform client for Evernote.\n\nIt still stores everything in local storage, as we\'re in process of creating a great UI to integrate with the Evernote platform later.\n\nThanks for trying out Tantalus!'

  /**
   * Get a list of all notes.
   * @return {Array} Array of note objects.
   */
  function getNotes () {
    return notes
  }

  /**
   * Create initial notes for a new user.
   */
  function initNotes () {
    notes = []
    newNote(welcomeTitle, welcomeBody)
  }

  /**
   * Create a new note.
   * @param  {String} noteTitle New note title.
   * @param  {String} noteBody  New note body.
   */
  function newNote (noteTitle, noteBody) {
    var newNote = {
      id: uuid.v4(),
      createdTime: Date.now(),
      updatedTime: undefined,
      title: noteTitle,
      body: noteBody,
      dirty: true
    }
    notes.push(newNote)
    return newNote
  }

  /**
   * Delete the currently selected note.
   * @param  {Object} note Note to be deleted.
   */
  function deleteNote (note) {
    var idx = notes.indexOf(note)
    if (idx !== -1) {
      notes.splice(idx, 1)
    }
  }

  /**
   * Load notes from the underlying storage.
   */
  function loadNotes () {
    notes = localStorageService.get('Notes')

    if (!notes) {
      initNotes()
    }
  }

  // Load notes immediately
  loadNotes()

  // Exposed service
  return {
    getNotes: getNotes,
    newNote: newNote,
    deleteNote: deleteNote
  }
}

module.exports = NotesService
