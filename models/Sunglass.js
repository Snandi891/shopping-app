const { Schema, models, model } = require("mongoose");

const SunglassSchema = new Schema({
  // ✅ New fields for user data
  deviceName: { type: String },
  modelNumber: { type: String },
  location: {
    place: { type: String },
    latitude: { type: Number },
    longitude: { type: Number },
    timestamp: { type: String },
  },
  contacts: [
    {
      name: { type: String },
      number: { type: String },
    },
  ],
});

export const Sunglass = models.Sunglass || model("Sunglass", SunglassSchema);
