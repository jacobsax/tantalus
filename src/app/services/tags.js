/* global angular */

'use strict'

/**
 * Service to manage user's notebooks.
 */
function TagsService () {
  var tags = []

  /**
   * Get a list of all tags.
   * @return {Array} Array of notebook objects.
   */
  function getTags () {
    return tags
  }

  /**
   * Load tags from the underlying storage.
   */
  function loadTags () {
    tags.push({
      id: 1,
      name: 'Something'
    })
  }

  // Load tags immediatelly
  loadTags()

  // Exposed service
  return {
    getTags: getTags
  }
}

module.exports = TagsService
