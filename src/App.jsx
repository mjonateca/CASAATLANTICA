import ContactSection from './components/ContactSection.jsx';
import ExperienceSection from './components/ExperienceSection.jsx';
import FeatureGrid from './components/FeatureGrid.jsx';
import FinalCTA from './components/FinalCTA.jsx';
import Footer from './components/Footer.jsx';
import GalleryGrid from './components/GalleryGrid.jsx';
import Hero from './components/Hero.jsx';
import LocationSection from './components/LocationSection.jsx';
import Navbar from './components/Navbar.jsx';
import StayOptions from './components/StayOptions.jsx';
import StorySection from './components/StorySection.jsx';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StorySection />
        <FeatureGrid />
        <ExperienceSection />
        <LocationSection />
        <GalleryGrid />
        <StayOptions />
        <FinalCTA />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
