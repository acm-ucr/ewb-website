import About from "@/components/home/About";
import Landing from "@/components/home/Landing";
import Projects from "@/components/home/Projects";
import WhyJoin from "@/components/home/Contacts";
import Events from "@/components/home/Events";
import Join from "@/components/home/Join";
const Home = () => {
  return (
    <>
      <Landing />
      <About />
      <WhyJoin />
      <Projects />
      <Events />
      <Join />
    </>
  );
};

export default Home;
