const { Schema, models, model } = require("mongoose");

const OrderSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  traveler: { type: String, required: true },
  name: { type: String, required: true },
  phone: { type: String, required: true },
  ardhar: { type: String, required: true },
  price: { type: String, required: true },
  images: [{ type: String }],
});

export const Order = models.Order || model("Order", OrderSchema);
