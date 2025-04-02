import { mongooseConnect } from "@/lib/mongoose";
import { Jins } from "@/models/Jins";

export default async function handle(req, res) {
  const { method } = req;

  await mongooseConnect();

  if (method === "POST") {
    const { title, description, price, short, gender, images, size } = req.body;

    const JinsDoc = await Jins.create({
      title,
      description,
      price,
      short,
      images,
      gender,
      size,
    });
    res.json(JinsDoc);
  }

  if (method === "GET") {
    if (req.query?.id) {
      res.json(await Jins.findById(req.query.id));
    } else {
      res.json(await Jins.find());
    }
  }

  if (method === "PUT") {
    const { title, description, price, short, gender, size, images, _id } =
      req.body;
    await Jins.updateOne(
      { _id },
      {
        title,
        description,
        size,
        gender,
        price,
        short,
        images,
      }
    );
    res.json(true);
  }

  if (method === "DELETE") {
    if (req.query?.id) {
      await Jins.deleteOne({ _id: req.query?.id });
      res.json(true);
    }
  }
}
