import { mongooseConnect } from "@/lib/mongoose";
import { Banner2 } from "@/models/Banner2";

// ram ,processor

export default async function handle(req, res) {
  const { method } = req;

  await mongooseConnect();

  if (method === "POST") {
    const { title, description, price, ram, processor, images, size } =
      req.body;

    const Banner2Doc = await Banner2.create({
      title,
      description,
      price,
      ram,
      processor,
      images,
      size,
    });
    res.json(Banner2Doc);
  }

  if (method === "GET") {
    if (req.query?.id) {
      res.json(await Banner2.findById(req.query.id));
    } else {
      res.json(await Banner2.find());
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
    await Banner2.updateOne(
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
      await Banner2.deleteOne({ _id: req.query?.id });
      res.json(true);
    }
  }
}
