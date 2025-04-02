import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function Home() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <header className="bg-white">
          <div className="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
            <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-900 sm:text-2xl">
                  Welcome Back,{" "}
                  <span className="text-green-700 sm:text-3xl">
                    {session.user.name}
                  </span>
                </h1>

                <p className="mt-1.5 text-md text-gray-500">
                  View the statistics about your business, Also manage and add
                  products.
                </p>
              </div>

              <div className="flex items-center gap-4">
                <Link
                  className="inline-flex items-center justify-center gap-1.5 rounded border
                   border-gray-200 bg-white px-5 py-3 text-gray-900 transition 
                   hover:text-gray-700 focus:outline-none focus:ring"
                  href={"/bannerPage"}
                >
                  <span className="text-md font-medium"> Banner </span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </Link>
                <Link
                  className="inline-flex items-center justify-center gap-1.5 rounded border
                   border-gray-200 bg-white px-5 py-3 text-gray-900 transition 
                   hover:text-gray-700 focus:outline-none focus:ring"
                  href={"/bannerPage2"}
                >
                  <span className="text-md font-medium"> Banner 1 </span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </Link>

                <Link
                  className="inline-flex items-center justify-center gap-1.5 rounded border
                   border-gray-200 bg-white px-5 py-3 text-gray-900 transition 
                   hover:text-gray-700 focus:outline-none focus:ring"
                  href={"/bannerPage3"}
                >
                  <span className="text-md font-medium"> Banner 2 </span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </Link>

                <Link
                  className="inline-flex items-center justify-center gap-1.5 rounded border
                   border-gray-200 bg-white px-5 py-3 text-gray-900 transition 
                   hover:text-gray-700 focus:outline-none focus:ring"
                  href={"/bannerPage4"}
                >
                  <span className="text-md font-medium"> Banner 3 </span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </header>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8">
          <Link
            className="h-32 rounded-lg justify-center items-center bg-gray-200"
            href={"/orderPage"}
          >
            <h1 className="text-4xl font-bold max-w-1g pt-10 text-center">
              Orders
            </h1>
          </Link>
          <Link
            className="h-32 rounded-lg justify-center items-center bg-gray-200"
            href={"/cartPage"}
          >
            <h1 className="text-4xl font-bold max-w-1g pt-10 text-center">
              Cart
            </h1>
          </Link>
          <div className="h-32 rounded-lg bg-gray-200"></div>
          <div className="h-32 rounded-lg bg-gray-200"></div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="flex flex-col max-w-4xl min-h-screen justify-center items-center m-auto">
        <h1 className="text-4xl font-bold max-w-1g text-center">Welcome Sir</h1>
        <p className="font-medium my-4"> hhhhhhh</p>
        <button
          className="inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 
        text-md font-medium text-white hover:bg-transparent hover:text-indigo-600 
        focus:outline-none focus:ring active:text-indigo-500 "
          onClick={() => signIn("google")}
        >
          sign in google
        </button>
      </div>
    </>
  );
}
