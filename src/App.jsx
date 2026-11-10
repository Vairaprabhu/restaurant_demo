import { useEffect, useState } from "react";
import SiteHeader from "./components/SiteHeader.jsx";
import HeroSection from "./components/HeroSection.jsx";
import StorySection from "./components/StorySection.jsx";
import SignatureMenu from "./components/SignatureMenu.jsx";
import ExperienceSection from "./components/ExperienceSection.jsx";
import FoodGallery from "./components/FoodGallery.jsx";
import ContactSection from "./components/ContactSection.jsx";
import SiteFooter from "./components/SiteFooter.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import PageLoader from "./components/PageLoader.jsx";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isLeaving, setIsLeaving] = useState(false);

  useEffect(() => {
    let completed = false;
    let leaveTimer;
    let removeTimer;

    function finishLoading() {
      if (completed) return;
      completed = true;
      window.clearTimeout(removeTimer);
      setIsLeaving(true);
      leaveTimer = window.setTimeout(() => setIsLoading(false), 350);
    }

    if (document.readyState === "complete") {
      removeTimer = window.setTimeout(finishLoading, 300);
    } else {
      window.addEventListener("load", finishLoading, { once: true });
    }

    const fallbackTimer = window.setTimeout(finishLoading, 3000);
    return () => {
      window.removeEventListener("load", finishLoading);
      window.clearTimeout(fallbackTimer);
      window.clearTimeout(removeTimer);
      window.clearTimeout(leaveTimer);
    };
  }, []);

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
      <ScrollToTop />
      {isLoading && <PageLoader isLeaving={isLeaving} />}
    </>
  );
}

export default App;
