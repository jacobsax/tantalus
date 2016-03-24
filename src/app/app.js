/* global angular */

'use strict'

// Load modules
require('angular')

// Initialise app
angular.module('Tantalus', [])

// Setup services
.factory('NotebooksService', require('./services/notebooks'))

// Load controllers
require('./controllers/main')

// Load services
require('./services/notes')
require('./services/tags')
