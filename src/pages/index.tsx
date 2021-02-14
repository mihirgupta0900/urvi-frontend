import { graphql } from "gatsby";
import React, { FC } from "react";
import Layout from "../components/Layout";
import Img, { FluidObject } from "gatsby-image";
import { PageProps } from "gatsby";
import TopFade from "../components/TopFade";

const Index: FC<PageProps<Data>> = ({ data }) => {
  return (
    <div className="md:bg-offwhite bg-black md:text-black text-white">
      <Layout isHome={true}>
        <div
          style={{ minHeight: "85vh" }}
          className="flex md:flex-row flex-col"
        >
          <div className="md:w-2/3 md:mt-0 mt-12 md:mx-0 w-full flex justify-center items-center">
            <TopFade>
              <div className="lg:w-1/2 md:w-2/3 lg:leading-normal leading-relaxed md:mx-auto flex flex-col">
                <h1 className="text-5xl lg:text-6xl md:text-left text-center 2xl:text-7xl font-semibold">
                  Urvi Jain
                </h1>
                <h3 className="text-xl my-2 md:mx-0 mx-10">
                  Economics student who loves to illustrate
                </h3>
                <div className="flex mt-10 md:justify-start justify-center">
                  <a href="https://twitter.com/urvi_jain8">
                    <button className="md:py-2 py-1 md:px-4 px-2 rounded-md bg-secondary">
                      Contact Me!
                    </button>
                  </a>
                </div>
              </div>
            </TopFade>
          </div>
          <div className="md:w-1/3 w-full bg-black flex justify-center items-center">
            <TopFade>
              <div className="md:w-full w-1/2 mx-auto md:mt-0 mt-36">
                <Img fluid={data.pic.fluid} />
              </div>
            </TopFade>
          </div>
        </div>
      </Layout>
    </div>
  );
};

interface Data {
  pic: {
    fluid: FluidObject;
  };
}

export const query = graphql`
  query index {
    pic: imageSharp(
      fluid: {
        src: {
          eq: "/static/e510657917c179a6f6c74e20a1b0ed88/ee604/kindness.png"
        }
      }
    ) {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;

export default Index;
