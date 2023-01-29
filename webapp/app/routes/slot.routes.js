module.exports = app => {
  const slots = require("../controllers/slot.controller.js");

  var router = require("express").Router();

  // Create a new Slot
  router.post("/", slots.create);

  // Retrieve all slots
  router.get("/", slots.findAll);
  
  //Update a slot with id
  router.put("/updatestatus/:id", slots.updatestatus);
  
  //Update a slot with id
  router.put("/updatetime/:id", slots.updatetime);

  app.use("/api/slots", router);
};
