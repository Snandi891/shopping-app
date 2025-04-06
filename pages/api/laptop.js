import { mongooseConnect } from "@/lib/mongoose";
import { Laptop } from "@/models/Laptop";

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

    const LaptopDoc = await Laptop.create({
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
    res.json(LaptopDoc);
  }

  if (method === "GET") {
    if (req.query?.id) {
      res.json(await Laptop.findById(req.query.id));
    } else {
      res.json(await Laptop.find());
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
    await Laptop.updateOne(
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
      await Laptop.deleteOne({ _id: req.query?.id });
      res.json(true);
    }
  }
}
