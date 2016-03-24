/* global angular */

'use strict'

// Load modules
require('angular')

// Initialise app
angular.module('Tantalus', [])

// Setup services
.factory('NotebooksService', require('./services/notebooks'))
.factory('NotesService', require('./services/notes'))
.factory('TagsService', require('./services/tags'))

// Load controllers
require('./controllers/main')
