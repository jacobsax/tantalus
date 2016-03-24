/* global angular */

'use strict'

// Load modules
require('angular')

// Initialise app
angular.module('Tantalus', [])

// Setup services
.factory('NotebooksService', require('./services/notebooks'))
.factory('NotesService', require('./services/notes'))

// Load controllers
require('./controllers/main')

// Load services
require('./services/tags')
