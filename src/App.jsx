import SiteHeader from "./components/SiteHeader.jsx";
import HeroSection from "./components/HeroSection.jsx";
import StorySection from "./components/StorySection.jsx";
import SignatureMenu from "./components/SignatureMenu.jsx";
import ExperienceSection from "./components/ExperienceSection.jsx";
import FoodGallery from "./components/FoodGallery.jsx";
import ContactSection from "./components/ContactSection.jsx";
import SiteFooter from "./components/SiteFooter.jsx";

function App() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <StorySection />
        <SignatureMenu />
        <ExperienceSection />
        <FoodGallery />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}

export default App;
