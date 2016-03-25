'use strict'

function EmptyFilter () {
  return function (input, placeholder) {
    if (input) {
      return input
    } else {
      return placeholder
    }
  }
}

module.exports = EmptyFilter
