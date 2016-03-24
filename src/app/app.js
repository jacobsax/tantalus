/* global angular */

'use strict'

// Load modules
require('angular')
require('angular-local-storage')

// Initialise app
angular.module('Tantalus', [
  'LocalStorageModule'
])

// App settings
.config(function (localStorageServiceProvider) {
  localStorageServiceProvider
    .setPrefix('Tantalus')
    .setStorageType('localStorage')
})

// Setup services
.factory('NotebooksService', require('./services/notebooks'))
.factory('NotesService', require('./services/notes'))
.factory('TagsService', require('./services/tags'))

// Setup controllers
.controller('MainController', require('./controllers/main'))
