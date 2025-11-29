import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";

const IndexPage = () => {
  return (
    <main>
      <section className="relative flex flex-wrap lg:h-screen lg:items-center">
        <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
          <StaticImage
            alt=""
            src="https://images.unsplash.com/photo-1543406500-f0fc54b07d12?q=80&w=3137&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
        <div className="w-full flex flex-col items-center justify-center px-4 py-6 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-lg text-center">
            <StaticImage
              src="../images/8Countz.png"
              alt="8countz"
              height={120}
            />
            <p className="mt-2 text-gray-500 text-lg text-left">
              We are crafting something epic for the dance community. Get ready
              to show your moves, and connect with the community like never before.
            </p>
          </div>
          <div className="mx-auto mb-0 mt-8 max-w-md space-y-4 text-center">
            <a
              role="button"
              target="_blank"
              href="https://www.instagram.com/8countzapp"
              className="inline-block rounded border border-[#f64b65] bg-[#f64b65] px-6 py-3 text-sm font-medium text-white focus:outline-none focus:ring"
            >
              Follow us on Instagram
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

// Page's metadata will go into Head
export const Head = () => <title>8Countz</title>;

export default IndexPage;
