const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AlertSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Alert", AlertSchema);
