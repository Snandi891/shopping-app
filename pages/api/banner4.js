import { mongooseConnect } from "@/lib/mongoose";
import { Banner4 } from "@/models/Banner4";

// ram ,processor

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

    const Banner4Doc = await Banner4.create({
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
    });
    res.json(Banner4Doc);
  }

  if (method === "GET") {
    if (req.query?.id) {
      res.json(await Banner4.findById(req.query.id));
    } else {
      res.json(await Banner4.find());
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
    await Banner4.updateOne(
      { _id },
      {
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
        activity,
        mode,
        price,
        images,
      }
    );
    res.json(true);
  }

  if (method === "DELETE") {
    if (req.query?.id) {
      await Banner4.deleteOne({ _id: req.query?.id });
      res.json(true);
    }
  }
}
