const { Schema, models, model } = require("mongoose");

const LaptopSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: String, required: true },
  ram: { type: String, required: true },
  offer: { type: String, required: true },
  short: { type: String, required: true },
  rom: { type: String, required: true },
  roms: { type: String, required: true },
  size: { type: String, required: true },
  processor: { type: String, required: true },
  images: [{ type: String }],
});

export const Laptop = models.Laptop || model("Laptop", LaptopSchema);
