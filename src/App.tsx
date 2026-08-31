import Header from "./components/Header";
import Hero from "./components/Hero";
import TrustIntro from "./components/TrustIntro";
import Services from "./components/Services";
import CtaBanner from "./components/CtaBanner";
import Gallery from "./components/Gallery";
import Testimonial from "./components/Testimonial";
import MiniGallery from "./components/MiniGallery";
import Faq from "./components/Faq";
import BigCta from "./components/BigCta";
import VideoSection from "./components/VideoSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <TrustIntro />
        <Services />
        <CtaBanner />
        <Gallery />
        <Testimonial />
        <MiniGallery />
        <Faq />
        <BigCta />
        <VideoSection />
      </main>
      <Footer />
    </div>
  );
}
