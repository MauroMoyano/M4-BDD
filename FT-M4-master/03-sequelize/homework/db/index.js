const { Sequelize, Op } = require('sequelize');
const modelCharacter = require('./models/Character.js');
const modelAbility = require('./models/Ability.js');
const modelRole = require('./models/Role.js');

const DB_USER = "postgres"
const DB_PASSWORD = "A77aque77"
const DB_HOST = "localhost:5432"

const db = new Sequelize('postgres://DB_USER:DB_PASSWORD@DB_HOST/henry_sequelize', {
  logging: false,
});

modelCharacter(db);
modelAbility(db);
modelRole(db);

module.exports = {
  ...db.models,
  db,
  Op
}