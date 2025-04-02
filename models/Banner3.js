const { Schema, models, model } = require("mongoose");

const Banner3Schema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: String, required: true },
  ram: { type: String, required: true },
  size: { type: String, required: true },
  processor: { type: String, required: true },
  images: [{ type: String }],
});

export const Banner3 = models.Banner3 || model("Banner3", Banner3Schema);
