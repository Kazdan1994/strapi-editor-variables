'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('variable-editor')
      .service('myService')
      .getWelcomeMessage();
  },
});
