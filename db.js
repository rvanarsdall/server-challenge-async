const { Sequelize } = require("sequelize");

const db = new Sequelize(
  "postgres://postgres:passwordGoesHere@localhost:5432/server-challenge"
);

module.exports = db;
