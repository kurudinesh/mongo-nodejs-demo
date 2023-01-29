const db = require("../models");
const Slot = db.slots;

// Create and Save a new Slot
exports.create = (req, res) => {

  // Create a Slot
  const new_slot = new Slot({
    employeeId: req.body.employeeId,
    venueId: req.body.venueId,
	scheduledAt: req.body.scheduledAt,
	status: req.body.status,
	notes: req.body.notes
  });

  // Save Slot in the database
  new_slot
    .save()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Slot."
      });
    });
};

// Retrieve all Slots from the database.
exports.findAll = (req, res) => {

  Slot.find().populate('employeeId','-__v').populate('venueId','-__v')
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


exports.updatestatus = (req, res) => {
  if (!req.body.status) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  Slot.findByIdAndUpdate(id, {status:req.body.status}, { runValidators: true, useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Slot with id=${id}. Maybe Slot was not found!`
        });
      } else res.send({ message: "Slot was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Slot with id=" + id
      });
    });
};


exports.updatetime = (req, res) => {
  if (!req.body.scheduledAt) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  Slot.findByIdAndUpdate(id, {
	  scheduledAt:req.body.scheduledAt
  }, { runValidators: true, useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Slot with id=${id}. Maybe Slot was not found!`
        });
      } else res.send({ message: "Slot was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Slot with id=" + id
      });
    });
};
