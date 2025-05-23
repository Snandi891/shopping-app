import { mongooseConnect } from "@/lib/mongoose";
import { Banner } from "@/models/Banner";

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

    const BannerDoc = await Banner.create({
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
    res.json(BannerDoc);
  }

  if (method === "GET") {
    if (req.query?.id) {
      res.json(await Banner.findById(req.query.id));
    } else if (req.query?.traveler) {
      const traveler = req.query.traveler.trim();
      res.json(
        await Banner.find({ traveler: { $regex: new RegExp(traveler, "i") } })
      );
    } else {
      res.json(await Banner.find());
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
    await Banner.updateOne(
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
      await Banner.deleteOne({ _id: req.query?.id });
      res.json(true);
    }
  }
}
