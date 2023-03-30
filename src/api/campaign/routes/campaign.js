'use strict';

/**
 * campaign router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::campaign.campaign', {
  config: {
    findOne: {
      policies: ['global::belongs-to-users']
    },
  }
});
