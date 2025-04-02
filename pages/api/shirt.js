import { mongooseConnect } from "@/lib/mongoose";
import { Shirt } from "@/models/Shirt";

// rom, front, back, display, color

export default async function handle(req, res) {
  const { method } = req;

  await mongooseConnect();

  if (method === "POST") {
    const { title, description, price, gender, short, images, size } = req.body;

    const ShirtDoc = await Shirt.create({
      title,
      description,
      price,
      gender,
      short,
      size,
      images,
      size,
    });
    res.json(ShirtDoc);
  }

  if (method === "GET") {
    if (req.query?.id) {
      res.json(await Shirt.findById(req.query.id));
    } else {
      res.json(await Shirt.find());
    }
  }

  if (method === "PUT") {
    const { title, description, price, gender, short, size, images, _id } =
      req.body;
    await Shirt.updateOne(
      { _id },
      {
        title,
        description,
        gender,
        short,
        size,
        price,
        images,
      }
    );
    res.json(true);
  }

  if (method === "DELETE") {
    if (req.query?.id) {
      await Shirt.deleteOne({ _id: req.query?.id });
      res.json(true);
    }
  }
}
