/* global angular */

'use strict'

angular.module('Tantalus')

.factory('notesData', function () {
  let list = []

  list.push({
    id: 1,
    title: 'Lorem ipsum',
    body: 'dolor sit amet'
  })

  list.push({
    id: 2,
    title: 'Lorem ipsum',
    body: 'dolor sit amet'
  })

  list.push({
    id: 3,
    title: 'Lorem ipsum',
    body: 'dolor sit amet'
  })

  return list
})
