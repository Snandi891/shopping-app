import { mongooseConnect } from "@/lib/mongoose";
import { Order } from "@/models/Order";

// ram ,processor

export default async function handle(req, res) {
  const { method } = req;

  await mongooseConnect();

  if (method === "POST") {
    const { title, description, traveler, name, phone, ardhar, price, images } =
      req.body;

    const OrderDoc = await Order.create({
      title,
      description,
      traveler,
      name,
      phone,
      ardhar,
      price,
      images,
    });
    res.json(OrderDoc);
  }

  if (method === "GET") {
    if (req.query?.id) {
      res.json(await Order.findById(req.query.id));
    } else {
      res.json(await Order.find());
    }
  }

  if (method === "PUT") {
    const {
      title,
      description,
      traveler,
      name,
      phone,
      ardhar,
      price,
      images,
      _id,
    } = req.body;
    await Order.updateOne(
      { _id },
      {
        title,
        description,
        traveler,
        name,
        phone,
        ardhar,
        price,
        images,
      }
    );
    res.json(true);
  }

  if (method === "DELETE") {
    if (req.query?.id) {
      await Order.deleteOne({ _id: req.query?.id });
      res.json(true);
    }
  }
}
