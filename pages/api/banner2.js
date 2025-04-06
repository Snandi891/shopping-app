import { mongooseConnect } from "@/lib/mongoose";
import { Banner2 } from "@/models/Banner2";

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

    const Banner2Doc = await Banner2.create({
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
    res.json(Banner2Doc);
  }

  if (method === "GET") {
    if (req.query?.id) {
      res.json(await Banner2.findById(req.query.id));
    } else {
      res.json(await Banner2.find());
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
    await Banner2.updateOne(
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
        price,
        mode,
        images,
      }
    );
    res.json(true);
  }

  if (method === "DELETE") {
    if (req.query?.id) {
      await Banner2.deleteOne({ _id: req.query?.id });
      res.json(true);
    }
  }
}
