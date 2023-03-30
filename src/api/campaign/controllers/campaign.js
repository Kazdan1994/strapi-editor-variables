'use strict';

/**
 * campaign controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::campaign.campaign'/*, ({strapi}) => ({
  async findOne(ctx) {
    const sanitizedQueryParams = await this.sanitizeQuery(ctx);
    const { results, pagination } = await strapi.service('api::campaign.campaign').find(sanitizedQueryParams);
    const sanitizedResults = await this.sanitizeOutput(results, ctx);

    return this.transformResponse(sanitizedResults, { pagination });
  }
})*/);
