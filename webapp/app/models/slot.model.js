module.exports = mongoose => {
	
  var schema = mongoose.Schema(
    {
      employeeId: {	type: mongoose.Schema.Types.ObjectId,
					ref: "employee", required:true},
      venueId: {	type: mongoose.Schema.Types.ObjectId,
	                ref: "venue", required:true},
	  scheduledAt: { type: Date, required:true},
	  status: { type: String, enum : ['ALLOCATED','COMPLETE','CANCELLED'],
        default: 'ALLOCATED'},
      notes: { type: String}
    }
  );
  
  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Slot = mongoose.model("slot", schema);
  return Slot;
};
