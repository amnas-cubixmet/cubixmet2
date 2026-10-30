import SiteHeader from "../components/home/SiteHeader";
import HeroSection from "../components/home/HeroSection";
import HomeSections from "../components/home/HomeSections";
import SiteFooter from "../components/home/SiteFooter";

export default function Home() {
  return (
    <main className="overflow-x-clip bg-[#050505] text-white">
      <SiteHeader />
      <HeroSection />
      <HomeSections />
      <SiteFooter />
    </main>
  );
}
