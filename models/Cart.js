const { Schema, models, model } = require("mongoose");

const CartSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: String, required: true },
  traveler: { type: String, required: true },
  images: [{ type: String }],
});

export const Cart = models.Cart || model("Cart", CartSchema);
