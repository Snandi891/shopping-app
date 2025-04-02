import { mongooseConnect } from "@/lib/mongoose";
import { Cart } from "@/models/Cart";

// ram ,processor

export default async function handle(req, res) {
  const { method } = req;

  await mongooseConnect();

  if (method === "POST") {
    const { title, description, price, images } = req.body;

    const CartDoc = await Cart.create({
      title,
      description,

      price,
      images,
    });
    res.json(CartDoc);
  }

  if (method === "GET") {
    if (req.query?.id) {
      res.json(await Cart.findById(req.query.id));
    } else {
      res.json(await Cart.find());
    }
  }

  if (method === "PUT") {
    const { title, description, price, images, _id } = req.body;
    await Cart.updateOne(
      { _id },
      {
        title,
        description,

        price,
        images,
      }
    );
    res.json(true);
  }

  if (method === "DELETE") {
    if (req.query?.id) {
      await Cart.deleteOne({ _id: req.query?.id });
      res.json(true);
    }
  }
}
