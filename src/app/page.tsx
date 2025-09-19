
import Header from "./headers/Headers";
import ContactSection from "./Pages/Contact";
import IAM from "./Pages/IAM";
import InfiniteCarousel from "./Pages/InfiniteCarousel";
import Modelo from "./Pages/Modelo";
import ProjectsSection from "./Pages/ProjectsSection";
import Testimonios from "./Pages/Testimonios";
import Timeline from "./Pages/TimeLine";

export default function Home() {
  return (
 <div translate="no" className="hide-scrollbar">
  <Header/>
  <Modelo/>
  <IAM/>
  <InfiniteCarousel/>
  <Timeline />
  <ProjectsSection />
  <Testimonios/>
  <ContactSection/>
</div>
  );
}
