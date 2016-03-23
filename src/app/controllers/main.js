'use strict'

angular.module('Tantalus')

.controller('MainCtrl', function ($location, notebooksData, notesData, tagsData) {
  this.notebooks = notebooksData
  this.notes = notesData
  this.tags = tagsData

  this.goto = function (path) {
    $location.path(path)
  }
})
