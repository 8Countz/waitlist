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
        <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-lg text-center">
            <div>
              <StaticImage
                src="../images/8Countz.png"
                alt="8countz"
                height={150}
              />
            </div>

            <p className="mt-4 text-gray-500">
              We’re crafting something epic for the dance community. Get ready
              to show your moves, take on challenges, and be part of something
              big! We'd love your input—help us shape this experience!
            </p>
          </div>

          <div className="mx-auto mb-0 mt-8 max-w-md space-y-4">
            <button className="inline-block w-full rounded border border-[#f64b65] bg-[#f64b65] px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-[#f64b65] focus:outline-none focus:ring active:text-[#f64b65]">
              Yes, I would like to help!
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

// Page's metadata will go into Head
export const Head = () => <title>8Countz</title>;

export default IndexPage;
