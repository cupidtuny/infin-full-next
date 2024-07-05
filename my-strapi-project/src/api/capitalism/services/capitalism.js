'use strict';

/**
 * capitalism service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::capitalism.capitalism');
