const db = require("../models");
const Venue = db.venues;

// Create and Save a new Venue
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name || !req.body.location) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a Venue
  const new_venue = new Venue({
    name: req.body.name,
    location: req.body.location
  });

  // Save Venue in the database
  new_venue
    .save()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Venue."
      });
    });
};

// Retrieve all Venues from the database.
exports.findAll = (req, res) => {

  Venue.find()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Venues."
      });
    });
};


// Delete a Venue with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Venue.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Venue with id=${id}. Maybe Venue was not found!`
        });
      } else {
        res.send({
          message: "Venue was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Venue with id=" + id
      });
    });
};
