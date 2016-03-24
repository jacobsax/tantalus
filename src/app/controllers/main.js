/* global angular */

'use strict'

angular.module('Tantalus')

.controller('MainCtrl', function ($location, NotebooksService, notesData, tagsData) {
  this.notebooks = NotebooksService.getNotebooks()
  this.notes = notesData
  this.tags = tagsData

  this.goto = function (path) {
    $location.path(path)
  }
})
