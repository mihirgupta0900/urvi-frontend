import { graphql, PageProps } from "gatsby";
import React, { FC } from "react";
import Layout from "../components/Layout";
import Markdown from "react-markdown";

const BlogTemplate: FC<PageProps<Data>> = ({ data }) => {
  const {
    body,
    title,
    date_published,
    notes_author,
    notes_category,
  } = data.strapi.note;
  return (
    <div style={{ minHeight: "100vh" }} className="bg-bgc text-white">
      <Layout>
        <div className="md:w-1/2 mx-6 md:mx-auto flex flex-col items-center justify-center">
          <h1 className="md:text-6xl text-4xl border-b-4 md:text-left text-center border-secondary font-bold">
            {title}
          </h1>
          <p className="mt-2">{date_published}</p>
        </div>
        <div
          style={{ opacity: 0.9 }}
          className="md:w-1/2 md:mx-auto mx-6 mt-10"
        >
          <Markdown children={body} />
        </div>
      </Layout>
    </div>
  );
};

export default BlogTemplate;

export const query = graphql`
  query NoteQuery($id: ID!) {
    strapi {
      note(id: $id) {
        title
        body
        date_published
        notes_author {
          name
        }
        notes_category {
          name
        }
      }
    }
  }
`;

export interface NotesAuthor {
  name: string;
}

export interface NotesCategory {
  name: string;
}

export interface Note {
  title: string;
  body: string;
  date_published: string;
  notes_author: NotesAuthor;
  notes_category: NotesCategory;
}

export interface Strapi {
  note: Note;
}

export interface Data {
  strapi: Strapi;
}
