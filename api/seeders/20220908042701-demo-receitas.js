"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "receitas",
      [
        {
          descricao: "Uma descrição",
          valor: 150.50,
          data: new Date(2022,9,8),
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          descricao: "Uma descrição 2",
          valor: 170.50,
          data: new Date(2022,9,8),
          createdAt:new Date(),
          updatedAt:new Date()
        }
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("receitas", null, {});
  },
};
