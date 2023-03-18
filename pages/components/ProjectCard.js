import Link from "next/link";
import React from "react";

const ProjectCard = (props) => {
  return (
    <>
      {console.log(props)}
      <div className="p-6 rounded-lg shadow-xl bg-teal-100 max-w-sm flex flex-col justify-between w-80 h-80 my-10 mx-4">
        <div className="overflow-hidden">
          <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">
            {props.title}
          </h5>
          <p className="text-gray-700 text-base mb-4">{props.description}</p>
        </div>
        <Link
          href={`/project/${props.id}`}
          className=" mt-8 text-center px-6 py-2.5 bg-teal-700 text-white font-medium text-xs leading-tight uppercase rounded shadow-lg hover:bg-teal-500 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          View Project
        </Link>
      </div>
    </>
  );
};

export default ProjectCard;
