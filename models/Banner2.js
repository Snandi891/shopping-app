const { Schema, models, model } = require("mongoose");

const Banner2Schema = new Schema({
  hours: { type: Number, required: true },
  minutes: { type: Number, required: true },
  seconds: { type: Number, required: true },
});

export const Banner2 = models.Banner2 || model("Banner2", Banner2Schema);
