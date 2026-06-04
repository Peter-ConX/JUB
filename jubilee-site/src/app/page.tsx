import About from "@/components/About";
import CTA from "@/components/CTA";
import EnquiryForm from "@/components/EnquiryForm";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <About />
      <Services />
      <Gallery />
      <WhyChooseUs />
      <CTA />
      <EnquiryForm />
      <Footer />
    </main>
  );
}
