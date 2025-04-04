import "@/styles/globals.css";

import { Poppins } from "next/font/google";

import Header from "@/components/Header";
import { Toaster } from "react-hot-toast";

const inter = Poppins({ subsets: ["latin"], weight: "400" });

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <main
      className={`mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8 ${inter.className}`}
    >
      <Header />
      <Component {...pageProps} />
      <Toaster position="top-center" reverseOrder={false} />
    </main>
  );
}
