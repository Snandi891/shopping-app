import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function EditProduct() {
  const form = useRef();
  const router = useRouter();

  const { id } = router.query;

  const sendEmail = (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    formData.append("price", productInfo?.price);
    formData.append("name", productInfo?.name);

    // const formData = new FormData(form.current);
    // formData.append("name", productInfo?.name);

    emailjs
      .sendForm(
        "service_sueadxp", // from EmailJS dashboard
        "template_16elm96", // from EmailJS dashboard
        form.current,
        "uLdij9xsfTvmU6yQk" // from EmailJS dashboard
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          alert("Email sent successfully!");
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("Failed to send email.");
        }
      );
  };

  const [productInfo, setProductInfo] = useState([]);
  useEffect(() => {
    if (!id) {
      return;
    } else {
      axios.get("/api/order?id=" + id).then((response) => {
        setProductInfo(response.data);
      });
    }
  }, [id]);
  return (
    <>
      <div>
        <div className="flex flex-col items-start gap-4 md:flex-row md:items-center overflow-y-scroll md:justify-between py-3">
          <div>
            <p class="px-6 py-4 truncate max-w-xs ">
              <img
                class=" h-30 w-35 object-contain rounded-full"
                src={productInfo.images}
                alt=""
              />
            </p>
            <p className="mt-1.5 text-md text-gray-500">
              Travel {""}: {productInfo?.title}
            </p>
            <p className="mt-1.5 text-md text-gray-500">
              Price : {productInfo?.price}
            </p>
            <p className="mt-1.5 text-md text-gray-500">
              Travel Description : {productInfo?.description}
            </p>
            <p className="mt-1.5 text-md text-gray-500">
              Traveler : {productInfo?.traveler}
            </p>

            <p className="mt-1.5 text-md text-gray-500">
              Customer Name : {productInfo?.name}
            </p>
            <p className="mt-1.5 text-md text-gray-500">
              Customer ardhar Number : {productInfo?.ardhar}
            </p>
            <p className="mt-1.5 text-md text-gray-500">
              Customer Phone no : {productInfo?.phone}
            </p>
          </div>
        </div>
        <div className="min-h-screen flex items-center justify-center">
          <form
            onSubmit={sendEmail}
            ref={form}
            className="max-w-md mx-auto p-6 bg-white shadow-md rounded-2xl space-y-4"
          >
            <h2 className="text-2xl font-bold text-center">Contact Us</h2>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                From Email
              </label>
              <input
                type="email"
                name="from_email"
                // value={formData.name}
                // onChange={handleChange}
                className="mt-1 block w-full rounded-xl border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <input type="hidden" name="name" value={productInfo?.name} />

              <p>
                <strong>name:</strong> {productInfo?.name}
              </p>
            </div>

            <div>
              <input type="hidden" name="price" value={productInfo?.price} />

              <p>
                <strong>Price:</strong> {productInfo?.price}
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                To Email
              </label>
              <input
                type="email"
                name="to_email"
                // value={formData.email}
                // onChange={handleChange}
                className="mt-1 block w-full rounded-xl border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                name="message"
                rows="4"
                // value={formData.message}
                // onChange={handleChange}
                className="mt-1 block w-full rounded-xl border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-medium py-2 px-4 rounded-xl hover:bg-blue-700 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
