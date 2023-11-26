import Title from "../Title";
import { PROJECTS } from "@/data/projects";
import Project from "@/components/home/Project";

const Projects = () => {
  return (
    <div className="w-10/12 md:w-1/2 flex flex-col items-center gap-10">
      <div className="absolute w-1/3 aspect-square bg-ewb-blue-100/40 rounded-full -translate-y-14" />
      <Title subTitle="LEARN FROM EXPERIENCE" title="OUR PROJECTS" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {PROJECTS.map((project, index) => (
          <Project
            index={index}
            key={index}
            name={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
