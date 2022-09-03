import type { NextPage } from "next";
import Head from "next/head";
import { FaFacebookF, FaGoogle, FaApple } from "react-icons/fa";
import { SignupForm } from "../components/forms";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Login / Register</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SignupForm />

      {/* <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <div className="">
          <div className="p-5 py-36 px-12">
            <div className="py-10">
              <h2 className="text-3xl fon-bold">Create your account</h2>
              <p className="text-gray-400 my-3">
                It's Includes a free 2 week trial!
              </p>
              <div className="flex justify-center my-2">
                <a
                  href=""
                  className="border-2 border-gray-200 rectangle-full p-3 mx-1"
                >
                  <FaGoogle className="text-sm" />
                </a>
                <a
                  href=""
                  className="border-2 border-gray-200 rectangle-full p-3 mx-1"
                >
                  <FaApple className="text-sm" />
                </a>
                <a
                  href=""
                  className="border-2 border-gray-200 rectangle-full p-3 mx-1"
                >
                  <FaFacebookF className="text-sm" />
                </a>
              </div>
              <p className="text-gray-400 my-3">OR</p>
            </div>
            <div className="">
              <div className="w-full px-3">
                <input
                  className="input"
                  id="grid-password"
                  type="password"
                  placeholder="Full Name"
                />
              </div>
              <div className="w-full px-3">
                <input
                  className="input"
                  id="grid-password"
                  type="password"
                  placeholder="Full Name"
                />
              </div>
              <div className="w-full px-3">
                <input
                  className="input"
                  id="grid-password"
                  type="password"
                  placeholder="Password"
                />
              </div>
            </div>
          </div>
        </div>
      </main> */}
    </div>
  );
};

export default Home;
