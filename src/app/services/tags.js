/* global angular */

'use strict'

angular.module('Tantalus')

.factory('tagsData', function () {
  let list = []

  list.push({
    id: 1,
    name: 'One'
  })

  list.push({
    id: 2,
    name: 'Two'
  })

  list.push({
    id: 3,
    name: 'Three'
  })

  return list
})
