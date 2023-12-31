import React, { createContext, useState } from "react";
import ProjectCard from "../ProjectCard";
import ProjectDetailModal from "../ProjectDetails/ProjectDetailModal";

export const SelectedProjectContext = createContext();

export default function ProjectList({ userProject }) {
  // console.log("userProject", userProject);
  const [showModal, setShowModal] = useState(false);
  const [project, setProject] = useState([]);

  const onProjectClick = (item) => {
    setShowModal(true);
    setProject(item);
  };

  return (
    <div className="mt-10 mb-10 p-5">
      {userProject ? (
        <div
          // className="columns-2 md:columns-3 lg:columns-4 mx-auto space-y-3 lg:space-y-4"
          className=" space-x-4 space-y-4 mx-auto grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4"
        >
          {userProject.map((item) => (
            <div key={item} onClick={() => onProjectClick(item)}>
              <ProjectCard project={item} />
            </div>
          ))}
        </div>
      ) : null}

      <SelectedProjectContext.Provider value={{ project, setProject }}>
        {showModal ? (
          <ProjectDetailModal setShowModal={(value) => setShowModal(value)} />
        ) : null}
      </SelectedProjectContext.Provider>
    </div>
  );
}
