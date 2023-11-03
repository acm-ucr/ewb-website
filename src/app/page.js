import About from "@/components/home/About";
import Landing from "@/components/home/Landing";
import Projects from "@/components/home/Projects";
import WhyJoin from "@/components/home/Contacts";
import Subtitle from "@/components/Subtitle";
const Home = () => {
  return (
    <>
      <Landing />
      <About />
      <WhyJoin />
      <Projects />
      <Subtitle
        title="Motivation"
        descripton="  Rural communities are already disadvantaged socioeconomically"
      />
    </>
  );
};

export default Home;
