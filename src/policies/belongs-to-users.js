'use strict';

/**
 * `belongsToUsers` middleware.
 */

module.exports = () => {
  // Add authenticated user to filter.
  return async (ctx, next) => {
    ctx.query.filters = {
      ...ctx.query.filters,
      users: [ctx.state.user.id]
    };

    await next();
  };
};
