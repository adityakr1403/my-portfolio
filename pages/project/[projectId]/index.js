import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import projectdata from "../projectdata.json";
import Head from "next/head";
import Image from "next/image";

const ProjectId = () => {
  const router = useRouter();
  const projectId = router.query.projectId;
  const [data, setdata] = useState({
    id: "",
    title: "",
    description: "",
    url: "",
    images: [],
  });

  useEffect(() => {
    setdata(projectdata[projectId - 1]);
  }, []);

  return (
    <>
      <Head>
        <title>Aditya | Project - {data.title}</title>
      </Head>
      <main className=" min-h-screen py-10 flex flex-col justify-center bg-teal-100">
        <div className=" text-left text-white">
          <a
            target="_blank"
            rel="noreferrer"
            href={data.url}
            className=" mx-4 bg-violet-900 px-4 py-2 rounded-xl"
          >
            Go to Github Repo
          </a>
        </div>
        <div className=" flex flex-col justify-center mx-auto px-20">
          {data.images.map((image, index) => (
            <div key={index} className="flex justify-center my-5 mx-4">
              <Image
                alt="avatar"
                src={image}
                width="100"
                height="100"
                layout="responsive"
                objectFit="contain"
                className="rounded-md shadow-2xl"
              />
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default ProjectId;
