const { Schema, models, model } = require("mongoose");

const ProductSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: {
    type: Number,
    required: true,
    set: (v) => parseFloat(v), // Ensures price is always stored as a number
  },
  short: { type: String, required: true },
  category: { type: String, required: true },
  size: { type: String, required: true },
  images: [{ type: String }],
});

export const Product = models.Product || model("Product", ProductSchema);
