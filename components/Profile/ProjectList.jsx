import React from "react";
import ProjectCard from "../ProjectCard";

export default function ProjectList({ userProject }) {
  // console.log("userProject", userProject);

  return (
    <div className="mt-10 mb-10">
      {userProject ? (
        <div
          className="columns-2 md:columns-3
        lg:columns-4 mx-auto space-y-3 lg:space-y-4"
        >
          {userProject.map((item) => (
            <div key={item}>
              <ProjectCard project={item} />
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}
