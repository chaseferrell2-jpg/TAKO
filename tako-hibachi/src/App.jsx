import { useEffect, useState } from "react";
import { ADDRESS, API_URL, DEFAULT_SITE_DATA, mergeSiteData } from "./data.js";
import TopStrip from "./components/TopStrip.jsx";
import Announcement from "./components/Announcement.jsx";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import MenuSection from "./components/MenuSection.jsx";
import InfoSection from "./components/InfoSection.jsx";
import StickyBar from "./components/StickyBar.jsx";
import AdminPage from "./components/AdminPage.jsx";

/* The admin dashboard lives at /admin (also works with a trailing slash).
   public/_redirects tells Netlify to serve index.html for every path,
   which is what makes this URL work on the live site. */
function isAdminPath() {
  return window.location.pathname.replace(/\/+$/, "") === "/admin";
}

export default function App() {
  const [siteData, setSiteData] = useState(DEFAULT_SITE_DATA);

  /* On load, fetch the owner's saved data from the server so every
     visitor sees the latest announcements, hours, menu, and status.
     If the fetch fails (e.g. running locally without Netlify), the
     site simply shows the defaults from data.js. */
  useEffect(() => {
    fetch(API_URL)
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (data) setSiteData(mergeSiteData(data));
      })
      .catch(() => {
        /* offline or local dev — defaults are already showing */
      });
  }, []);

  if (isAdminPath()) {
    return (
      <AdminPage
        siteData={siteData}
        onSave={setSiteData}
        onExit={() => window.location.assign("/")}
      />
    );
  }

  return (
    <div className="min-h-screen bg-ink pb-[68px] md:pb-0">
      <TopStrip locationText={siteData.locationText} isOpen={siteData.isOpen} />
      <Announcement text={siteData.announcement} />
      <Navbar />
      <main>
        <Hero />
        <MenuSection menu={siteData.menu} />
        <InfoSection hours={siteData.hours} />
      </main>

      <footer className="border-t border-edge py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-4 text-center">
          <p className="font-display text-lg tracking-wide text-white">
            TAKO<span className="text-crimson">.</span> HIBACHI SUSHI
          </p>
          <p className="text-sm text-neutral-400">
            {ADDRESS} · Follow the flames.
          </p>
        </div>
      </footer>

      <StickyBar />
    </div>
  );
}
