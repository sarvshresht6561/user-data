const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const cors = require("cors");
//defining process.env object
require("dotenv").config();

const models = require("./models");
const routes = require("./routes");
const { PORT } = process.env;
const app = express();

//enabling cors in the server
app.use(cors());
//enable the user to pass data through req.body using bodyParser
app.use(bodyParser.json());
//defining the routes
app.use("/", routes);
//enabling the logger
app.use(logger("dev"));

//syncing the database
models.sequelize
  .sync()
  .then(() => console.log("Database synced successfully"))
  .catch((err) => console.log(err));

//server is listening on port 6000
app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
