import About from "@/components/home/About";
import Landing from "@/components/home/Landing";
import Projects from "@/components/home/Projects";
import WhyJoin from "@/components/home/Contacts";
import { ICONS } from "../data/icons";
import Focus from "../components/home/Focus";

const Home = () => {
  return (
    <>
      <Landing />
      <About />
      <WhyJoin />
      <Projects />
      <Focus
        title="OUTREACH"
        description="Get connect with our community and make an impact on our society"
        link="google.com"
        icon={ICONS.handshake}
      />
    </>
  );
};

export default Home;
