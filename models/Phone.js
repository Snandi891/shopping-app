const { Schema, models, model } = require("mongoose");

const PhoneSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: String, required: true },
  ram: { type: String, required: true },
  rom: { type: String, required: true },
  front: { type: String, required: true },
  short: { type: String, required: true },
  cam: { type: String, required: true },
  back: { type: String, required: true },
  display: { type: String, required: true },
  color: { type: String, required: true },
  size: { type: String, required: true },
  processor: { type: String, required: true },
  images: [{ type: String }],
});

export const Phone = models.Phone || model("Phone", PhoneSchema);
