/* global angular */

'use strict'

angular.module('Tantalus')

.controller('MainCtrl', function ($location, NotebooksService, NotesService, TagsService) {
  this.notebooks = NotebooksService.getNotebooks()
  this.notes = NotesService.getNotes()
  this.tags = TagsService.getTags()

  this.goto = function (path) {
    $location.path(path)
  }
})
