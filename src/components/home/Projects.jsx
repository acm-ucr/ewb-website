import Title from "../Title";
import { PROJECTS } from "@/data/projects";
import Project from "@/components/home/Project";

const Projects = () => {
  return (
    <div className="flex flex-col w-11/12 md:w-7/12">
      <Title subTitle="LEARN FROM EXPERIENCE" title="OUR PROJECTS" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-10">
        {PROJECTS.map((project, index) => (
          <Project
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
