import { graphql, Link, PageProps } from "gatsby";
import React, { FC } from "react";
import Layout from "../components/Layout";
import TopFade from "../components/TopFade";
import { slugify } from "../utils/index";
import Fade from "../components/Fade";

const Blog: FC<PageProps<Data>> = ({ data }) => {
  return (
    <div style={{ minHeight: "100vh" }} className="bg-bgc text-white">
      <Layout>
        <div
          style={{ height: "20vh" }}
          className="flex justify-center items-center "
        >
          <TopFade>
            <h1 className="md:text-7xl text-6xl uppercase text-center w-1/7 font-bold mx-auto border-b-4 border-secondary">
              Blog
            </h1>
          </TopFade>
        </div>
        <div className="md:w-1/2 w-full md:mx-auto mt-4 mx-6 flex flex-wrap justify-around">
          {data.strapi.blogs.map((blog) => (
            <Fade>
              <div className="sm:w-1/3 w-full mx-2 mb-6">
                <Link to={`/blog/${slugify(blog.title)}`}>
                  <h2 className="md:text-3xl text-2xl">{blog.title}</h2>
                </Link>
                <p className="md:text-md text-sm md:mr-0 mr-5">
                  {blog.description}
                </p>
                <p className="mt-2">{blog.date}</p>
              </div>
            </Fade>
          ))}
        </div>
      </Layout>
    </div>
  );
};

export interface Blog {
  title: string;
  date: string;
  description: string;
}

export interface Strapi {
  blogs: Blog[];
}

export interface Data {
  strapi: Strapi;
}

export const query = graphql`
  query BlogsQuery {
    strapi {
      blogs {
        title
        date
        description
      }
    }
  }
`;

export default Blog;
