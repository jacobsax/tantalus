'use strict'

// Load modules
var uuid = require('node-uuid')

/**
 * Service to manager user's notes.
 */
function NotesService (localStorageService) {
  var notes = []

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
    newNote('Welcome to Tantalus!', 'Tantalus is an alternative cross-platform client for Evernote.\n\nIt still stores everything in local storage, as we\'re in process of creating a great UI to integrate with the Evernote platform later.\n\nThanks for trying out Tantalus!')
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
      title: noteTitle,
      body: noteBody
    }
    notes.push(newNote)
    return newNote
  }

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
