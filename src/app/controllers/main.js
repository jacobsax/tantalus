'use strict'

function MainController ($location, NotebooksService, NotesService, TagsService) {
  var self = this

  // Exposed controller
  self.notebooks = []
  self.notes = []
  self.tags = []
  self.note = undefined
  self.goto = goto
  self.selectNote = selectNote
  self.createNewNote = createNewNote
  self.deleteSelectedNote = deleteSelectedNote

  /**
   * Load all required resources.
   */
  function loadEverything () {
    self.notebooks = NotebooksService.getNotebooks()
    self.notes = NotesService.getNotes()
    self.tags = TagsService.getTags()
  }

  /**
   * Go to specific path.
   * @param  {String} path Path to go.
   */
  function goto (path) {
    $location.path(path)
  }

  /**
   * Select a note to be displayed.
   * @param  {Object} note Note object.
   */
  function selectNote (note) {
    self.note = note
  }

  /**
   * Create a new note and select it.
   */
  function createNewNote () {
    var note = NotesService.newNote()
    selectNote(note)
  }

  /**
   * Delete the currently selected note.
   */
  function deleteSelectedNote () {
    NotesService.deleteNote(self.note)
    self.note = undefined
  }

  // Load everything immediately
  loadEverything()
}

module.exports = MainController
