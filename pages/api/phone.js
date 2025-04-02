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
      ram,
      rom,
      cam,
      short,
      front,
      back,
      display,
      color,
      processor,
      images,
      size,
    } = req.body;

    const PhoneDoc = await Phone.create({
      title,
      description,
      price,
      ram,
      rom,
      cam,
      short,
      front,
      back,
      display,
      color,
      processor,
      images,
      size,
    });
    res.json(PhoneDoc);
  }

  if (method === "GET") {
    if (req.query?.id) {
      res.json(await Phone.findById(req.query.id));
    } else {
      res.json(await Phone.find());
    }
  }

  if (method === "PUT") {
    const {
      title,
      description,
      price,
      gender,
      size,
      cam,
      short,
      rom,
      front,
      back,
      display,
      color,
      ram,
      processor,
      images,
      _id,
    } = req.body;
    await Phone.updateOne(
      { _id },
      {
        title,
        description,
        size,
        processor,
        ram,
        rom,
        short,
        front,
        back,
        cam,
        display,
        color,
        gender,
        price,
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
