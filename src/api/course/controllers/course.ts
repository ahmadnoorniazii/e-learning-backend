/**
 * course controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::course.course', ({ strapi }) => ({
  // Custom controller methods can be added here
  async find(ctx) {
    // Add default population for API calls
    const { data, meta } = await super.find(ctx);
    
    return { data, meta };
  },

  async findOne(ctx) {
    // Add default population for API calls
    const { data, meta } = await super.findOne(ctx);
    
    return { data, meta };
  }
}));
