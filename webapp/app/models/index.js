const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.venues = require("./venue.model.js")(mongoose);
db.slots = require("./slot.model.js")(mongoose);
db.employees = require("./employee.model.js")(mongoose);

module.exports = db;
