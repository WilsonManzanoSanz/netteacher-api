const Sequelize = require('sequelize');
const { db } = require('../../../database');
//TODO create a validator for email field
const fields = {
  id: {
    type: Sequelize.NUMBER,
    primaryKey: true,
    autoIncrement: true,
  },
  type: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
};

const typeUsers = db.define('users', fields
);

module.exports = {
  Model:typeUsers,
  fields
};
/*
typeUsers.sync({force:true}).then(() => {
  console.log('SE FUE A LA PUTA');
});
*/