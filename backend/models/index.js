const Sequelize = require("sequelize");
let db = {};
const { DB_NAME, DB_USERNAME, DB_PASSWORD, DB_HOST } = process.env;

//creaging new instance of sequelize ORM using postgres dialect
const sequelize = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
  host: DB_HOST,
  dialect: "postgres",
  logging: false,
  sync: true,
});

//checking whether the database is connected or not
sequelize
  .authenticate()
  .then(() => console.log("Database connection established successsfully"))
  .catch((err) => console.log(err));

db.Sequelize = Sequelize;
db.sequelize = sequelize;
//putting the model in an object
db.data = require("./data.js")(sequelize, Sequelize.DataTypes);

module.exports = db;
