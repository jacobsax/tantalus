/* global angular */

'use strict'

angular.module('Tantalus')

.controller('MainCtrl', function ($location, NotebooksService, NotesService, tagsData) {
  this.notebooks = NotebooksService.getNotebooks()
  this.notes = NotesService.getNotes()
  this.tags = tagsData

  this.goto = function (path) {
    $location.path(path)
  }
})
