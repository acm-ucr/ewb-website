import About from "@/components/home/About";
import Landing from "@/components/home/Landing";
import Projects from "@/components/home/Projects";
import WhyJoin from "@/components/home/Contacts";
import Title from "@/components/Title";
const Home = () => {
  return (
    <>
      <Landing />
      <About />
      <WhyJoin />
      <Projects />
      <Title />
    </>
  );
};

export default Home;
