
import Header from "./headers/Headers";
import IAM from "./Pages/IAM";
import InfiniteCarousel from "./Pages/InfiniteCarousel";
import ProjectsSection from "./Pages/ProjectsSection";
import Timeline from "./Pages/TimeLine";

export default function Home() {
  return (
    <div translate="no">
    <Header/>
    <IAM/>
    <InfiniteCarousel/>
    <Timeline />
    <ProjectsSection />
    </div>
  );
}
