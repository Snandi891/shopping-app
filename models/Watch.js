const { Schema, models, model } = require("mongoose");

const WatchSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: String, required: true },
  brand: { type: String, required: true },
  short: { type: String, required: true },
  gender: { type: String, required: true },
  images: [{ type: String }],
});

export const Watch = models.Watch || model("Watch", WatchSchema);
