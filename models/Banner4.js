const { Schema, models, model } = require("mongoose");

const Banner4Schema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: String, required: true },
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
  phone: { type: String, required: true },
  activity: { type: String, required: true },
  mode: { type: String, required: true },
  images: [{ type: String }],
});

export const Banner4 = models.Banner4 || model("Banner4", Banner4Schema);
