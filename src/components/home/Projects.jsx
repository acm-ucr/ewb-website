import Title from "../Title";
import { PROJECTS } from "@/data/projects";
import Project from "@/components/home/Project";

const Projects = () => {
  return (
    <div>
      <Title subTitle="LEARN FROM EXPERIENCE" title="OUR PROJECTS" />
      <br />
      <div className="flex flex-wrap items-center justify-center gap-4">
        {PROJECTS.map((project, index) => (
          <Project
            key={index}
            name={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
      <br />
    </div>
  );
};

export default Projects;

// import Social from "./Social";
// const Join = () => {
//   return (
//     <div className="p-10 flex flex-col gap-y-8">
//
//       <Social />
//     </div>
//   );
// };

// export default Join;
