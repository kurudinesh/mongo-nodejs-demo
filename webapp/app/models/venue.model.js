module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      name: String,
      location: String
    }
  );
  
  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Venue = mongoose.model("venue", schema);
  return Venue;
};
