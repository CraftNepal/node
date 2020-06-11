const Sequelize = require("sequelize");
const sequelize = require("../helpers/database");

const Order = sequelize.define("cartItem", {
     id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          allowNull: false,
          primaryKey: true,
     },
     qty: {
          type: Sequelize.INTEGER,
          allowNull: false,
     },
});
module.exports = Order;
