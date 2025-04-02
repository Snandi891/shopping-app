import { mongooseConnect } from "@/lib/mongoose";
import { Sunglass } from "@/models/Sunglass";

export default async function handle(req, res) {
  const { method } = req;

  await mongooseConnect();

  if (method === "POST") {
    const { title, description, price, brand, color, images } = req.body;

    const SunglassDoc = await Sunglass.create({
      title,
      description,
      price,
      images,
      brand,
      color,
    });
    res.json(SunglassDoc);
  }

  if (method === "GET") {
    if (req.query?.id) {
      res.json(await Sunglass.findById(req.query.id));
    } else {
      res.json(await Sunglass.find());
    }
  }

  if (method === "PUT") {
    const { title, description, price, brand, color, images, _id } = req.body;
    await Sunglass.updateOne(
      { _id },
      {
        title,
        description,
        brand,
        color,
        price,
        images,
      }
    );
    res.json(true);
  }

  if (method === "DELETE") {
    if (req.query?.id) {
      await Sunglass.deleteOne({ _id: req.query?.id });
      res.json(true);
    }
  }
}
