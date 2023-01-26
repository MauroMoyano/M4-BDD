const { Sequelize, Op } = require('sequelize');
const modelCharacter = require('./models/Character.js');
const modelAbility = require('./models/Ability.js');
const modelRole = require('./models/Role.js');
require("dotenv").config();

const { DB_USER, DB_PASSWORD, DB_HOST } = process.env

const db = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/henry_sequelize`, {
// const db = new Sequelize(`postgres://postgres:A77aque77@localhost:5432/henry_sequelize`, {
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