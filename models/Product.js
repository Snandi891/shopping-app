const { Schema, models, model } = require("mongoose");

const ProductSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: {
    type: Number,
    required: true,
    set: (v) => parseFloat(v), // Ensures price is always stored as a number
  },
  traveler: { type: String, required: true },
  offer: { type: String, required: true },
  route: { type: String, required: true },
  sroute: { type: String, required: true },
  eroute: { type: String, required: true },
  food: { type: String, required: true },
  days: { type: String, required: true },
  place: { type: String, required: true },
  nearby: { type: String, required: true },
  short: { type: String, required: true },
  activity: { type: String, required: true },
  mode: { type: String, required: true },
  phone: { type: String, required: true },
  images: [{ type: String }],
});

export const Product = models.Product || model("Product", ProductSchema);
