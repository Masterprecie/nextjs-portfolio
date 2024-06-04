import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import Testimonials from "@/components/Testimonials";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/utils/data";

export default function Home() {
  return (
    <main className="relative  bg-black-100  justify-center items-center overflow-clip sm:px-10 px-5">
      <div className="max-w-7xl mx-auto h-full w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Testimonials />
        <Experience />
        <Footer />
      </div>
    </main>
  );
}
