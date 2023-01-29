module.exports = app => {
  const employees = require("../controllers/employee.controller.js");

  var router = require("express").Router();

  // Create a new employee
  router.post("/", employees.create);

  // Retrieve all employees
  router.get("/", employees.findAll);

  app.use("/api/employees", router);
};
