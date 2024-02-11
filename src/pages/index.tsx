import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";

const IndexPage = () => {
  return (
    <main>
      <section className="relative flex flex-wrap lg:h-screen lg:items-center">
        <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
          <StaticImage
            alt=""
            src="https://images.unsplash.com/photo-1618260970135-8afc4074aad4?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
        <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-lg text-center">
            <h1 className="text-2xl font-bold sm:text-3xl">
              Welcome home dancers 🕺 💃
            </h1>

            <p className="mt-4 text-gray-500">
              Something interesting is coming up 🎉, reserve your spot below 👇
            </p>
          </div>

          <form action="#" className="mx-auto mb-0 mt-8 max-w-md space-y-4">
            <div>
              <label htmlFor="name" className="sr-only">
                Your name
              </label>

              <div className="relative">
                <input
                  type="text"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter your name"
                />

                <span className="absolute inset-y-0 end-0 grid place-content-center px-4"></span>
              </div>
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>

              <div className="relative">
                <input
                  type="email"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter email"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <button className="inline-block w-full rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500">
                Join Waitlist
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

// Page's metadata will go into Head
export const Head = () => <title>8Countz</title>;

export default IndexPage;
