'use strict'

// Load modules
var angular = require('angular')

// Initialise app
angular.module('Tantalus', [])

// Load controllers
require('./controllers/main')

// Load services
require('./services/notebooks')
require('./services/notes')
require('./services/tags')
