import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import About from '../components/About';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import Appointment from '../components/Appointment';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Services />
        <WhyChooseUs />
        <Appointment />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
    </>
  );
}
