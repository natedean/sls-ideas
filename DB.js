const Sequelize = require('sequelize');

const {
  ND_PG_DB_NAME,
  ND_PG_DB_USER,
  ND_PG_DB_PASSWORD,
  ND_PG_DB_HOST
} = process.env;

const sequelize = new Sequelize(ND_PG_DB_NAME, ND_PG_DB_USER, ND_PG_DB_PASSWORD, {
  host: ND_PG_DB_HOST,
  dialect: 'postgres',

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },

  // http://docs.sequelizejs.com/manual/tutorial/querying.html#operators
  operatorsAliases: false
});


const Idea = sequelize.define('ideas_idea', {
  ['id']: {type: Sequelize.DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  ['originator_id']: {type: Sequelize.DataTypes.INTEGER, allowNull: false},
  ['description']: {type: Sequelize.DataTypes.STRING, allowNull: false}
}, {
  timestamps: true,
  createdAt: 'updated_at',
  updatedAt: 'created_at',
  tableName: 'ideas_idea',
});

module.exports = {
  Idea
};
