const db = require("../models");
const Employee = db.employees;

// Create and Save a new Employee
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({ message: "Name can not be empty!" });
    return;
  }

  // Create a Employee
  const new_employee = new Employee({
    name: req.body.name,
    age: req.body.age
  });

  // Save Employee in the database
  new_employee
    .save()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Employee."
      });
    });
};

// Retrieve all Employees from the database.
exports.findAll = (req, res) => {

  Employee.find()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Employees."
      });
    });
};
