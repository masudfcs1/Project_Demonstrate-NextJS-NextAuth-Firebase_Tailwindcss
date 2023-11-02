import React, { useContext, useEffect } from "react";
import { SelectedProjectContext } from "../Profile/ProjectList";
import UserDetail from "./UserDetail";
import Image from "next/image";

export default function ProjectInfo() {
  const { project, setProject } = useContext(SelectedProjectContext);

  return (
    <div>
      <h2 className="font-medium text-[18px] mb-3 border-b-[1px]">
        {project.title}
      </h2>
      <Image
        src={project.image}
        alt={project.title}
        width={500}
        height={200}
        className="rounded-lg cursor-pointer"
        onClick={() => window.open(project.image)}
      />
      <h2 className="  font-bold  ">Description</h2>
      <div className="overflow-y-scroll  h-30 text-[14px] font-light text-gray-500 leading-6 line-clamp-5">
        {project.desc}
      </div>
      <UserDetail />
    </div>
  );
}
