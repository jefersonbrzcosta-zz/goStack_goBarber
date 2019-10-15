"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn("users", "avatar_id", {
      type: Sequelize.INTEGER,
      reference: {
        model: "files",
        key: "id",
        onUpdate: "CASCADE",
        onDelete: "SET NULL"
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("user", "avatar_id");
  }
};
