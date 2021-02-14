import { graphql, PageProps } from "gatsby";
import React, { FC } from "react";
import Layout from "../components/Layout";
import Img, { FluidObject } from "gatsby-image";

const Visdom: FC<PageProps<Data>> = ({ data }) => {
  return (
    <div className="bg-black text-white">
      <Layout>
        <div
          style={{ height: "20vh" }}
          className="flex justify-center items-center "
        >
          <h1 className="md:text-7xl text-6xl uppercase text-center md:w-1/4 font-bold mx-auto border-b-4 border-secondary">
            Vis-Dom
          </h1>
        </div>
        <div
          style={{ minHeight: "100vh" }}
          className="flex flex-wrap justify-around mt-10 mx-20"
        >
          {data.strapi.visdoms.map((visdom) => (
            <div className="md:w-1/4 w-full">
              <div className=" rounded-md">
                <Img
                  fluid={visdom.pic.imageFile.childImageSharp.fluid}
                  className="w-full rounded-md"
                />
              </div>
              <p className="text-center mt-6 text-xl">{visdom.name}</p>
            </div>
          ))}
        </div>
      </Layout>
    </div>
  );
};

export interface ChildImageSharp {
  fluid: FluidObject;
}

export interface ImageFile {
  childImageSharp: ChildImageSharp;
}

export interface Pic {
  url: string;
  imageFile?: ImageFile;
}

export interface Visdom {
  name: string;
  pic: Pic;
}

export interface Strapi {
  visdoms: Visdom[];
}

export interface Data {
  strapi: Strapi;
}

export const query = graphql`
  query VisdomQuery {
    strapi {
      visdoms {
        name
        pic {
          url
          imageFile {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;

export default Visdom;
