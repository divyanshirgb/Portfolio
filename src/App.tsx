import { Hero } from "./components/Hero";
import { CaseStudies } from "./components/CaseStudies";
import { BrandingProjects } from "./components/BrandingProjects";
import { Playground } from "./components/Playground";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { SectionDivider } from "./components/SectionDivider";

export default function App() {
  return (
    <div className="bg-black min-h-screen">
      <Hero />
      <CaseStudies />
      <SectionDivider />
      <BrandingProjects />
      <SectionDivider />
      <Playground />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Contact />
    </div>
  );
}