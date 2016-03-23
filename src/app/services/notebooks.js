'use strict'

angular.module('Tantalus')

.factory('notebooksData', function () {
  let list = []

  list.push({
    id: 1,
    name: 'General'
  })

  list.push({
    id: 2,
    name: 'Miscelaneous'
  })

  list.push({
    id: 3,
    name: 'Others'
  })

  return list
})
