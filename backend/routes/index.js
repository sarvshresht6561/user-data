const express = require("express");
const router = express.Router();

const controllers = require("../controllers");

//route to create record
router.post("/add", controllers.add);
//route to update record
router.put("/update", controllers.update);

module.exports = router;
