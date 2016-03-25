'use strict'

// Load modules
var moment = require('moment')

function DateTimeFilter () {
  return function (input) {
    return moment(input).format('MM/DD/YYYY h:mm:ss a')
  }
}

module.exports = DateTimeFilter
