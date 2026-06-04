import Hero from "../components/Hero.tsx";
import MenuHighlights from "../components/MenuHighlights.tsx";
import AboutSection from "../components/AboutSection.tsx";
import Testimonials from "../components/Testimonials.tsx";
import InstagramFeed from "../components/InstagramFeed.tsx";
import ContactSection from "../components/ContactSection.tsx";
import Footer from "../components/Footer.tsx";
const Home = () => {
  return (
    <>
    <Hero />
     <MenuHighlights />
<AboutSection />
<Testimonials />
<InstagramFeed />
<ContactSection />
<Footer />

    </>
  );
};

export default Home;  
