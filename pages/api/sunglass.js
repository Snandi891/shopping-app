import { mongooseConnect } from "@/lib/mongoose";
import { Sunglass } from "@/models/Sunglass";

export default async function handle(req, res) {
  const { method } = req;

  await mongooseConnect();

  if (method === "POST") {
    const { deviceName, modelNumber, location, contacts } = req.body;

    const SunglassDoc = await Sunglass.create({
      deviceName,
      modelNumber,
      location,
      contacts,
    });

    res.json(SunglassDoc);
  }

  if (method === "GET") {
    if (req.query?.id) {
      res.json(await Sunglass.findById(req.query.id));
    } else {
      res.json(await Sunglass.find());
    }
  }
}
