import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import StickyMobileCTA from "./components/StickyMobileCTA";
import Hero from "./sections/Hero";
import BrandStatement from "./sections/BrandStatement";
import FeaturedCollection from "./sections/FeaturedCollection";
import Categories from "./sections/Categories";
import EditorialFeature from "./sections/EditorialFeature";
import TrustSection from "./sections/TrustSection";
import InstagramSection from "./sections/InstagramSection";
import VisitStore from "./sections/VisitStore";

export default function App() {
  return (
    <div className="min-h-screen bg-ivory font-sans text-charcoal">
      <Navbar />
      <main className="pb-16 md:pb-0">
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
