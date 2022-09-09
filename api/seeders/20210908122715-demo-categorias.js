"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "categorias",
      [
        {
          tipo: "Alimentação",
          createdAt: new Date(),
          updatedAt: new Date(),
        },{
          tipo: "Saude",
          createdAt: new Date(),
          updatedAt: new Date(),
        },{
          tipo: "Moradia",
          createdAt: new Date(),
          updatedAt: new Date(),
        },{
          tipo: "Transporte",
          createdAt: new Date(),
          updatedAt: new Date(),
        },{
          tipo: "Educação",
          createdAt: new Date(),
          updatedAt: new Date(),
        },{
          tipo: "Lazer",
          createdAt: new Date(),
          updatedAt: new Date(),
        },{
          tipo: "Imprevisto",
          createdAt: new Date(),
          updatedAt: new Date(),
        },{
          tipo: "Outras",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("categorias", null, {});
  },
};
