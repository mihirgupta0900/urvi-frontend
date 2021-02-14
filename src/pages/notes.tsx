import { graphql, Link, PageProps } from "gatsby";
import React, { FC } from "react";
import Layout from "../components/Layout";
import TopFade from "../components/TopFade";
import { slugify } from "../utils";
import Fade from "../components/Fade";

const Notes: FC<PageProps<Data>> = ({ data }) => {
  return (
    <div style={{ minHeight: "100vh" }} className="bg-bgc text-white">
      <Layout>
        <div
          style={{ height: "20vh" }}
          className="flex justify-center items-center "
        >
          <TopFade>
            <h1 className="md:text-7xl text-6xl uppercase text-center md:w-1/7 font-bold mx-auto border-b-4 border-secondary">
              Notes
            </h1>
          </TopFade>
        </div>
        <div className="md:w-1/2 mx-auto mt-4 flex flex-wrap justify-around">
          {data.strapi.notes.map((note) => (
            <Fade>
              <div className="md:w-1/3 w-full md:mx-2 mx-6 mb-6">
                <Link to={`/notes/${slugify(note.title)}`}>
                  <h2 className="md:text-3xl text-2xl">{note.title}</h2>
                </Link>
                <p className="mt-2 capitalize">{note.notes_author.name}</p>
                <p className="capitalize">{note.notes_category.name}</p>
              </div>
            </Fade>
          ))}
        </div>
      </Layout>
    </div>
  );
};

export const query = graphql`
  query NotesQuery {
    strapi {
      notes {
        title
        notes_author {
          name
        }
        notes_category {
          name
        }
        date_published
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
  notes_author: NotesAuthor;
  notes_category: NotesCategory;
  date_published: string;
}

export interface Strapi {
  notes: Note[];
}

export interface Data {
  strapi: Strapi;
}

export default Notes;
