import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

const formatPrice = (price) => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export default function bannerPage2() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("/api/banner2").then((res) => {
      setProducts(res.data);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <header className="bg-white">
        <div className="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 sm:text-2xl">
                All Products
              </h1>

              <p className="mt-1.5 text-md text-gray-500">
                Let create a banner2
              </p>
            </div>

            <div className="flex items-center gap-4">
              <Link
                className="inline-flex items-center justify-center gap-1.5 rounded border
                   border-green-200 hover: bg-green-50  px-5 py-3 text-green-900 transition 
                   hover:text-green-700 focus:outline-none focus:ring"
                href={"/bannerPage2/new"}
              >
                <span className="text-md font-medium"> Create Products </span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <hr class="my-2 h-px border-0 bg-gray-300" />

      <div className="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        {products.length === 0 ? (
          <p>No Products Found</p>
        ) : (
          <div class="">
            <table class="w-full border-collapse bg-white text-left text-sm text-gray-500">
              <thead class="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    class="px-6 py-4 font-medium text-gray-900"
                  ></th>
                  <th scope="col" class="px-6 py-4 font-medium text-gray-900">
                    Name
                  </th>
                  <th scope="col" class="px-6 py-4 font-medium text-gray-900">
                    Description
                  </th>
                  <th scope="col" class="px-6 py-4 font-medium text-gray-900">
                    Price
                  </th>
                  <th scope="col" class="px-6 py-4 font-medium text-gray-900">
                    image
                  </th>

                  <th
                    scope="col"
                    class="px-6 py-4 font-medium text-gray-900"
                  ></th>
                  <th
                    scope="col"
                    class="px-6 py-4 font-medium text-gray-900"
                  ></th>
                </tr>
              </thead>
              {products.map((product, index) => (
                <tbody
                  class="divide-y divide-gray-100 border-t border-gray-100"
                  key={product._id}
                >
                  <tr>
                    <th class="px-6 py-4 font-medium text-gray-900">
                      {index + 1}
                    </th>
                    <td class="px-6 py-4">{product.title}</td>
                    <td class="px-6 py-4">{product.gender}</td>
                    <td class="px-6 py-4 truncate max-w-xs ">
                      {product.description}
                    </td>

                    <td class="px-6 py-4">{formatPrice(product.price)}</td>
                    <td class="px-6 py-4 truncate max-w-xs ">
                      <img
                        class=" h-16 w-19 object-contain rounded-full"
                        src={product.images[0]}
                        alt=""
                      />
                    </td>

                    <td class=" gap-4 px-2 py-2 font-medium">
                      <Link
                        href={"/bannerPage2/delete/" + product._id}
                        className="text-red-500"
                      >
                        Delete
                      </Link>
                    </td>
                    <td class=" gap-4 px-2 py-2 font-medium">
                      <Link
                        href={"/bannerPage2/edit/" + product._id}
                        class="text-green-700"
                      >
                        Edit
                      </Link>
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
        )}
      </div>
    </>
  );
}
