/* global angular */

'use strict'

// Load modules
var uuid = require('node-uuid')

/**
 * Service to manage user's notebooks.
 */
function TagsService (localStorageService) {
  var tags = []

  /**
   * Get a list of all tags.
   * @return {Array} Array of notebook objects.
   */
  function getTags () {
    return tags
  }

  /**
   * Create initial tags for a new user.
   */
  function initTags () {
    tags = []
    newTag('Read later')
    newTag('Delicious recipes')
    newTag('Holiday')
  }

  /**
   * Create a new tag.
   * @param  {String} tagName New tag name.
   */
  function newTag (tagName) {
    tags.push({
      id: uuid.v4(),
      name: tagName
    })
  }

  /**
   * Load tags from the underlying storage.
   */
  function loadTags () {
    tags = localStorageService.get('Tags')

    if (!tags) {
      initTags()
    }
  }

  // Load tags immediatelly
  loadTags()

  // Exposed service
  return {
    getTags: getTags
  }
}

module.exports = TagsService
