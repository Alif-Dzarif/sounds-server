'use strict';
const data = require('../data/items.json')

data.forEach((e) => {
  e.createdAt = new Date()
  e.updatedAt = new Date()
});

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Items', data, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Items', null, {});
  }
};
