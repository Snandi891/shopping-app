const { Schema, models, model } = require("mongoose");

const JinsSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: String, required: true },
  size: { type: String, required: true },
  short: { type: String, required: true },
  gender: { type: String, required: true },
  images: [{ type: String }],
});

export const Jins = models.Jins || model("Jins", JinsSchema);
