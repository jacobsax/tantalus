/* global angular */

'use strict'

function MainController ($location, NotebooksService, NotesService, TagsService) {
  var self = this

  // Declare all required models
  self.notebooks = []
  self.notes = []
  self.tags = []

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

  // Load everything immediately
  loadEverything()

  // Exposed controller
  self.goto = goto
}

module.exports = MainController
