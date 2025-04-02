const { Schema, models, model } = require("mongoose");

const Banner4Schema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: String, required: true },
  ram: { type: String, required: true },
  size: { type: String, required: true },
  processor: { type: String, required: true },
  images: [{ type: String }],
});

export const Banner4 = models.Banner4 || model("Banner4", Banner4Schema);
