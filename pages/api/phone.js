import { mongooseConnect } from "@/lib/mongoose";
import { Phone } from "@/models/Phone";

// rom, front, back, display, color

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

    const PhoneDoc = await Phone.create({
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
    res.json(PhoneDoc);
  }

  if (method === "GET") {
    if (req.query?.id) {
      res.json(await Phone.findById(req.query.id));
    } else if (req.query?.traveler) {
      res.json(await Phone.find({ traveler: req.query.traveler }));
    } else {
      res.json(await Phone.find());
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
      activity,
      mode,
      _id,
    } = req.body;
    await Phone.updateOne(
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
      await Phone.deleteOne({ _id: req.query?.id });
      res.json(true);
    }
  }
}
