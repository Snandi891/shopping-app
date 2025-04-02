const { Schema, models, model } = require("mongoose");

const SunglassSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: String, required: true },
  brand: { type: String, required: true },
  color: { type: String, required: true },
  images: [{ type: String }],
});

export const Sunglass = models.Sunglass || model("Sunglass", SunglassSchema);
