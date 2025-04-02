import { mongooseConnect } from "@/lib/mongoose";
import { Banner } from "@/models/Banner";

// ram ,processor

export default async function handle(req, res) {
  const { method } = req;

  await mongooseConnect();

  if (method === "POST") {
    const { title, description, price, ram, processor, images, size } =
      req.body;

    const BannerDoc = await Banner.create({
      title,
      description,
      price,
      ram,
      processor,
      images,
      size,
    });
    res.json(BannerDoc);
  }

  if (method === "GET") {
    if (req.query?.id) {
      res.json(await Banner.findById(req.query.id));
    } else {
      res.json(await Banner.find());
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
    await Banner.updateOne(
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
      await Banner.deleteOne({ _id: req.query?.id });
      res.json(true);
    }
  }
}
