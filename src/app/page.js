import About from "@/components/home/About";
import Landing from "@/components/home/Landing";
import Projects from "@/components/home/Projects";
import WhyJoin from "@/components/home/WhyJoin";
import Join from "@/components/home/Join";

const Home = () => {
  return (
    <div className="w-full flex flex-col items-center gap-20">
      <Landing />
      <About />
      <WhyJoin />
      <Projects />
      <Join />
    </div>
  );
};

export default Home;
