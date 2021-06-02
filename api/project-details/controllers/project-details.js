"use strict";
const { sanitizeEntity } = require("strapi-utils");
/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async create(ctx) {
    let projectDetails = ctx.request.body;
    projectDetails.user = ctx.state.user.id;

    let entity = await strapi.services["project-details"].create(
      projectDetails
    );
    return sanitizeEntity(entity, { model: strapi.models["project-details"] });
  },
};
