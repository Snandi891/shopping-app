import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Settings() {
  const { data: session } = useSession();

  const router = useRouter();
  async function logout() {
    await router.push("/");
    await signOut();
  }
  if (session) {
    return (
      <>
        <header className="bg-white">
          <div className="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
            <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="sm:flex sm:gap-4 my-4 gap-6 items-center ">
                  <div class="h-10 w-10">
                    <img
                      class="h-full w-full rounded-full object-cover object-center"
                      src={session.user.image}
                      alt=""
                    />
                  </div>
                  <h1 className="text-2xl font-bold text-gray-900 sm:text-2xl">
                    {session.user.name}
                  </h1>
                </div>

                <p className="mt-1.5 text-md text-gray-500">
                  {session.user.email}
                </p>
              </div>

              <div className="flex items-center gap-4">
                <button
                  className="inline-flex items-center justify-center gap-1.5 rounded border
                       border-green-200 hover: bg-green-50  px-5 py-3 text-green-900 transition 
                       hover:text-green-700 focus:outline-none focus:ring"
                  onClick={logout}
                >
                  <span className="text-md font-medium"> Logout </span>
                </button>
              </div>
            </div>
          </div>
        </header>
      </>
    );
  }
}
