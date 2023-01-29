module.exports = app => {
  const venues = require("../controllers/venue.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", venues.create);

  // Retrieve all venues
  router.get("/", venues.findAll);

  // Delete a Tutorial with id
  router.delete("/:id", venues.delete);

  app.use("/api/venues", router);
};
