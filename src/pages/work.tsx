import React from "react";
import Layout from "../components/Layout";

const Work = () => {
  return (
    <div className="bg-bgc">
      <Layout>
        <div className="text-white ">
          <div
            style={{ height: "20vh" }}
            className="flex justify-center items-center "
          >
            <h1 className="text-7xl uppercase text-center w-1/4 font-bold mx-auto border-b-2 border-secondary">
              My Work
            </h1>
          </div>
          <div style={{ height: "100vh" }} className=""></div>
        </div>
      </Layout>
    </div>
  );
};

export default Work;
