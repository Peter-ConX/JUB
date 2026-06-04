import About from "@/components/About";
import CTA from "@/components/CTA";
import DemoBanner from "@/components/DemoBanner";
import EnquiryForm from "@/components/EnquiryForm";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <>
      <DemoBanner />
      <main className="overscroll-none">
        <Navbar />
        <Hero />
        <Features />
        <About />
        <Services />
        <Gallery />
        <Testimonials />
        <WhyChooseUs />
        <CTA />
        <EnquiryForm />
        <Footer />
      </main>
    </>
  );
}
