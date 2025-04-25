import axios from "axios";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Spinner from "./Spinner";
import { ReactSortable } from "react-sortablejs";
import toast from "react-hot-toast";

const BannerPage2 = ({
  _id,
  hours: existinghours,
  minutes: existingMinutes,
  seconds: existingSeconds,
}) => {
  const [redirect, setRedirect] = useState(false);
  const router = useRouter();

  const [hours, setHours] = useState(existinghours || "");
  const [minutes, setMinutes] = useState(existingMinutes || "");
  const [seconds, setSeconds] = useState(existingSeconds || "");

  async function createBanner2(ev) {
    ev.preventDefault();

    const data = {
      hours,
      minutes,
      seconds,
    };
    if (_id) {
      await axios.put("/api/banner2", { ...data, _id });
      toast.success(" Product Sucessfully updated!");
    } else {
      await axios.post("/api/banner2", data);
      toast.success(" Product Sucessfully Created");
    }

    // await axios.post("/api/shirt", data);

    setRedirect(true);
  }

  if (redirect) {
    router.push("/bannerPage2");
    return null;
  }

  return (
    <>
      <form onSubmit={createBanner2} className="mx-auto max-w-screen-sm ">
        <div class="mx-auto my-6 ">
          <div>
            <label
              for="example1"
              class="mb-1 block text-lg font-medium text-gray-700"
            >
              hour
            </label>
            <input
              type="text"
              id="example1"
              class="block w-full rounded-md border border-gray-300 shadow-sm focus:border-primary-400 p-2 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
              placeholder="hour"
              value={hours}
              onChange={(ev) => setHours(ev.target.value)}
            />
          </div>
        </div>
        <div class="mx-auto my-6 ">
          <div>
            <label
              for="example1"
              class="mb-1 block text-lg font-medium text-gray-700"
            >
              minite
            </label>
            <input
              type="text"
              id="example1"
              class="block w-full rounded-md border border-gray-300 shadow-sm focus:border-primary-400 p-2 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
              placeholder="minite"
              value={minutes}
              onChange={(ev) => setMinutes(ev.target.value)}
            />
          </div>
        </div>
        <div class="mx-auto my-6 ">
          <div>
            <label
              for="example1"
              class="mb-1 block text-lg font-medium text-gray-700"
            >
              seconds
            </label>
            <input
              type="text"
              id="example1"
              class="block w-full rounded-md border border-gray-300 shadow-sm focus:border-primary-400 p-2 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
              placeholder="seconds"
              value={seconds}
              onChange={(ev) => setSeconds(ev.target.value)}
            />
          </div>
        </div>

        <div class="mx-auto my-6 ">
          <button
            className="inline-block rounded border border-indigo-600 px-12 py-3 text-sm font-medium text-indigo-600 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500 w-full"
            type="submit"
          >
            Save time
          </button>
        </div>
      </form>
    </>
  );
};

export default BannerPage2;
