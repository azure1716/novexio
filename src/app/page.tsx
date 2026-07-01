import TopNav from "@/components/layout/TopNav";
import SideNav from "@/components/layout/SideNav";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import PortfolioMatrix from "@/components/home/PortfolioMatrix";

export default function Home() {
  return (
    <>
      <TopNav />
      <div className="flex">
        <SideNav />
        <main className="flex-1 ml-0 lg:ml-64 p-0">
          <HeroSection />
          <PortfolioMatrix />
          <Footer />
        </main>
      </div>
    </>
  );
}
