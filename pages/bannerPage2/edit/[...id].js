import BannerPage2 from "@/components/BannerPage2";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function EditBanner2() {
  const router = useRouter();
  const { id } = router.query;

  const [productInfo, setProductInfo] = useState(null);
  useEffect(() => {
    if (!id) {
      return;
    } else {
      axios.get("/api/banner2?id=" + id).then((response) => {
        setProductInfo(response.data);
      });
    }
  }, [id]);
  return (
    <>
      <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between py-3">
        <div>
          <p className="mt-1.5 text-md text-gray-500">
            Editing {productInfo?.title}
          </p>
        </div>
      </div>

      <hr class="my-2 h-px border-0 bg-gray-300" />
      <div className="my-10">
        {productInfo && <BannerPage2 {...productInfo} />}
      </div>
    </>
  );
}
