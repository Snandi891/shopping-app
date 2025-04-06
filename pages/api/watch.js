import { mongooseConnect } from "@/lib/mongoose";
import { Watch } from "@/models/Watch";

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
      images,
    } = req.body;

    const watchDoc = await Watch.create({
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
      images,
    });
    res.json(watchDoc);
  }

  if (method === "GET") {
    if (req.query?.id) {
      res.json(await Watch.findById(req.query.id));
    } else {
      res.json(await Watch.find());
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
      images,
      _id,
    } = req.body;
    await Watch.updateOne(
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
        images,
      }
    );
    res.json(true);
  }

  if (method === "DELETE") {
    if (req.query?.id) {
      await Watch.deleteOne({ _id: req.query?.id });
      res.json(true);
    }
  }
}
