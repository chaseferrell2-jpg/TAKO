import { useEffect, useState } from "react";
import { loadSiteData, saveSiteData } from "./data.js";
import TopStrip from "./components/TopStrip.jsx";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import MenuSection from "./components/MenuSection.jsx";
import StickyBar from "./components/StickyBar.jsx";
import AdminPage from "./components/AdminPage.jsx";

export default function App() {
  const [siteData, setSiteData] = useState(loadSiteData);
  const [view, setView] = useState("site"); // "site" | "admin"

  // Persist every change so updates survive browser refreshes
  useEffect(() => {
    saveSiteData(siteData);
  }, [siteData]);

  if (view === "admin") {
    return (
      <AdminPage
        siteData={siteData}
        onSave={setSiteData}
        onExit={() => setView("site")}
      />
    );
  }

  return (
    <div className="min-h-screen bg-ink pb-16 md:pb-0">
      <TopStrip locationText={siteData.locationText} isOpen={siteData.isOpen} />
      <Navbar />
      <main>
        <Hero />
        <MenuSection menu={siteData.menu} />
      </main>

      <footer className="border-t border-edge py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-4 text-center">
          <p className="font-display text-lg tracking-wide text-white">
            TAKO<span className="text-crimson">.</span> HIBACHI SUSHI
          </p>
          <p className="text-sm text-neutral-400">
            McMinnville, TN · Follow the flames.
          </p>
          <button
            onClick={() => setView("admin")}
            className="mt-3 text-xs text-neutral-600 transition hover:text-neutral-400"
          >
            Owner login
          </button>
        </div>
      </footer>

      <StickyBar />
    </div>
  );
}
