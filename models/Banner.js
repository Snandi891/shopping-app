const { Schema, models, model } = require("mongoose");

const BannerSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: String, required: true },
  ram: { type: String, required: true },
  size: { type: String, required: true },
  processor: { type: String, required: true },
  images: [{ type: String }],
});

export const Banner = models.Banner || model("Banner", BannerSchema);
