import React from "react";
import Head from "next/head";
import ProjectCard from "../components/ProjectCard";
import projectdata from "../../json/projectdata.json";

const Projects = () => {
  return (
    <>
      <Head>
        <title>Aditya | Projects</title>
      </Head>
      <main className=" min-h-screen py-10 flex justify-center">
        <div className=" flex flex-wrap justify-center mx-auto">
          {projectdata.map((data) => {
            return (
              <ProjectCard
                key={data.id}
                title={data.title}
                description={data.description}
                id={data.id}
              />
            );
          })}
        </div>
      </main>
    </>
  );
};

export default Projects;
