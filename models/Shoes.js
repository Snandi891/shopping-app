const { Schema, models, model } = require("mongoose");

const ShoesSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: String, required: true },
  size: { type: String, required: true },
  short: { type: String, required: true },
  brand: { type: String, required: true },
  color: { type: String, required: true },
  name: { type: String, required: true },
  images: [{ type: String }],
});

export const Shoes = models.Shoes || model("Shoes", ShoesSchema);
