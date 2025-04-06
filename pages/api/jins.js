import { mongooseConnect } from "@/lib/mongoose";
import { Jins } from "@/models/Jins";

export default async function handle(req, res) {
  const { method } = req;

  await mongooseConnect();

  if (method === "POST") {
    const {
      title,
      description,
      price,
      traveler,
      offer,
      route,
      sroute,
      eroute,
      food,
      days,
      place,
      nearby,
      short,
      phone,
      activity,
      mode,
      images,
    } = req.body;

    const JinsDoc = await Jins.create({
      title,
      description,
      traveler,
      offer,
      route,
      sroute,
      eroute,
      food,
      days,
      place,
      nearby,
      short,
      phone,
      price,
      activity,
      mode,
      images,
    });
    res.json(JinsDoc);
  }

  if (method === "GET") {
    if (req.query?.id) {
      res.json(await Jins.findById(req.query.id));
    } else {
      res.json(await Jins.find());
    }
  }

  if (method === "PUT") {
    const {
      title,
      description,
      price,
      traveler,
      offer,
      route,
      sroute,
      eroute,
      food,
      days,
      place,
      nearby,
      short,
      phone,
      activity,
      mode,
      images,
      _id,
    } = req.body;
    await Jins.updateOne(
      { _id },
      {
        title,
        description,
        price,
        traveler,
        offer,
        route,
        sroute,
        eroute,
        food,
        days,
        place,
        nearby,
        short,
        phone,
        activity,
        mode,
        images,
      }
    );
    res.json(true);
  }

  if (method === "DELETE") {
    if (req.query?.id) {
      await Jins.deleteOne({ _id: req.query?.id });
      res.json(true);
    }
  }
}
