import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import StickyMobileCTA from "./components/StickyMobileCTA";
import Hero from "./sections/Hero";
import BrandStatement from "./components/BrandStatement";
import FeaturedCollection from "./components/FeaturedCollection";
import Categories from "./components/Categories";
import EditorialFeature from "./sections/EditorialFeature";
import TrustSection from "./sections/TrustSection";
import InstagramSection from "./sections/InstagramSection";
import VisitStore from "./sections/VisitStore";

export default function App() {
  return (
    <div className="heritage-site min-h-screen font-sans">
      <Navbar />
      <main>
        <Hero />
        <BrandStatement />
        <FeaturedCollection />
        <Categories />
        <EditorialFeature />
        <TrustSection />
        <InstagramSection />
        <VisitStore />
      </main>
      <Footer />
      <StickyMobileCTA />
    </div>
  );
}




