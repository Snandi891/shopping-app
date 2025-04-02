import { mongooseConnect } from "@/lib/mongoose";
import { Banner3 } from "@/models/Banner3";

// ram ,processor

export default async function handle(req, res) {
  const { method } = req;

  await mongooseConnect();

  if (method === "POST") {
    const { title, description, price, ram, processor, images, size } =
      req.body;

    const Banner3Doc = await Banner3.create({
      title,
      description,
      price,
      ram,
      processor,
      images,
      size,
    });
    res.json(Banner3Doc);
  }

  if (method === "GET") {
    if (req.query?.id) {
      res.json(await Banner3.findById(req.query.id));
    } else {
      res.json(await Banner3.find());
    }
  }

  if (method === "PUT") {
    const {
      title,
      description,
      price,
      gender,
      size,
      ram,
      processor,
      images,
      _id,
    } = req.body;
    await Banner3.updateOne(
      { _id },
      {
        title,
        description,
        size,
        processor,
        ram,
        gender,
        price,
        images,
      }
    );
    res.json(true);
  }

  if (method === "DELETE") {
    if (req.query?.id) {
      await Banner3.deleteOne({ _id: req.query?.id });
      res.json(true);
    }
  }
}
