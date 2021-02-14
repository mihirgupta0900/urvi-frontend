import { graphql, PageProps } from "gatsby";
import React, { FC } from "react";
import Layout from "../components/Layout";
import Markdown from "react-markdown";

const BlogTemplate: FC<PageProps<Data>> = ({ data }) => {
  const { body, title, date, description } = data.strapi.blog;
  return (
    <div style={{ minHeight: "100vh" }} className="bg-bgc text-white">
      <Layout>
        <div className="md:w-1/2 mx-auto flex flex-col items-center justify-center">
          <h1 className="md:text-6xl text-4xl border-b-4 border-secondary font-bold uppercase">
            {title}
          </h1>
          <p className="text-center mt-2">{date}</p>
        </div>
        <div
          style={{ opacity: 0.9 }}
          className="md:w-1/2 w-full md:px-0 px-5 mx-auto mt-5"
        >
          <Markdown children={body} />
        </div>
      </Layout>
    </div>
  );
};

export default BlogTemplate;

export const query = graphql`
  query BlogQuery($id: ID!) {
    strapi {
      blog(id: $id) {
        title
        date
        description
        body
      }
    }
  }
`;

export interface Blog {
  title: string;
  date: string;
  description: string;
  id: string;
  body: string;
}

export interface Strapi {
  blog: Blog;
}

export interface Data {
  strapi: Strapi;
}
