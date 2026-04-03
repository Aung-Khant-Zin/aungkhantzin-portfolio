import React, { useEffect, useState } from "react";

const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function NavBar() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 720);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isMobile) {
      setDrawerOpen(false);
    }
  }, [isMobile]);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      const isBeyondHero = currentY > 60;
      setScrolled((prev) => (prev !== isBeyondHero ? isBeyondHero : prev));

      if (isMobile && drawerOpen) {
        setDrawerOpen(false);
      }

      let nextActive = NAV_LINKS[0].id;
      for (const link of NAV_LINKS) {
        const element = document.getElementById(link.id);
        if (!element) continue;
        const rect = element.getBoundingClientRect();
        if (rect.top <= 160 && rect.bottom >= 160) {
          nextActive = link.id;
          break;
        }
      }
      setActive((prev) => (prev === nextActive ? prev : nextActive));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMobile, drawerOpen]);

  const handleNavClick = () => {
    if (isMobile) {
      setDrawerOpen(false);
    }
  };

  const navClasses = ["nav"];
  if (!isMobile) {
    navClasses.push(scrolled ? "nav--scrolled" : "nav--top");
  }
  if (drawerOpen && isMobile) {
    navClasses.push("nav--drawer-open");
  }

  return (
    <>
      <nav className={navClasses.join(" ")}>
        <div className="nav-inner">
          <span className="logo">AKZ</span>
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={active === link.id ? "active" : undefined}
                  onClick={handleNavClick}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      {isMobile && (
        <>
          <button
            className={`nav-fab ${drawerOpen ? "open" : ""}`}
            type="button"
            onClick={() => setDrawerOpen((prev) => !prev)}
            aria-label={drawerOpen ? "Close navigation" : "Open navigation"}
          >
            <span />
          </button>
          {drawerOpen && <div className="nav-overlay" onClick={() => setDrawerOpen(false)} />}
        </>
      )}
    </>
  );
}
