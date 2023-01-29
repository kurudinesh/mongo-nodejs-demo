module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      name: {type:String, required: true},
      age: { type: Number, min: 0, default: 0 }
    }
  );
  
  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Employee = mongoose.model("employee", schema);
  return Employee;
};
