import { mongooseConnect } from "@/lib/mongoose";
import { Shoes } from "@/models/Shoes";

export default async function handle(req, res) {
  const { method } = req;

  await mongooseConnect();

  if (method === "POST") {
    const {
      title,
      description,
      price,
      short,
      brand,
      color,
      name,
      images,
      size,
    } = req.body;

    const ShoesDoc = await Shoes.create({
      title,
      description,
      price,
      images,
      brand,
      short,

      name,
      color,
      size,
    });
    res.json(ShoesDoc);
  }

  if (method === "GET") {
    if (req.query?.id) {
      res.json(await Shoes.findById(req.query.id));
    } else {
      res.json(await Shoes.find());
    }
  }

  if (method === "PUT") {
    const {
      title,
      description,
      price,
      short,
      name,
      brand,
      color,
      size,
      images,
      _id,
    } = req.body;
    await Shoes.updateOne(
      { _id },
      {
        title,
        description,
        size,
        brand,
        short,
        name,
        color,
        price,
        images,
      }
    );
    res.json(true);
  }

  if (method === "DELETE") {
    if (req.query?.id) {
      await Shoes.deleteOne({ _id: req.query?.id });
      res.json(true);
    }
  }
}
