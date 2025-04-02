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
      ram,
      rom,
      roms,
      short,
      offer,
      processor,
      images,
      size,
    } = req.body;

    const LaptopDoc = await Laptop.create({
      title,
      description,
      price,
      ram,
      offer,
      rom,
      short,
      roms,
      processor,
      images,
      size,
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
      gender,
      offer,
      short,
      size,
      rom,
      roms,
      ram,
      processor,
      images,
      _id,
    } = req.body;
    await Laptop.updateOne(
      { _id },
      {
        title,
        description,
        size,
        processor,
        ram,
        offer,
        short,
        rom,
        roms,
        gender,
        price,
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
