import { PropsWithChildren, Suspense, useEffect, useState } from "react";
import About from "./About";
import Career from "./Career";
import Contact from "./Contact";
import Cursor from "./Cursor";
import Landing from "./Landing";
import Navbar from "./Navbar";
import SocialIcons from "./SocialIcons";
import WhatIDo from "./WhatIDo";
import Work from "./Work";
import ToolsTech from "./ToolsTech";
import Achievements from "./Achievements";
import Education from "./Education";
import setSplitText from "./utils/splitText";

const MainContainer = ({ children }: PropsWithChildren) => {
  const [isDesktopView, setIsDesktopView] = useState<boolean>(
    window.innerWidth > 1024
  );

  useEffect(() => {
    const resizeHandler = () => {
      setSplitText();
      setIsDesktopView(window.innerWidth > 1024);
    };
    resizeHandler();
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, [isDesktopView]);

  return (
    <div className="container-main">
      <Cursor />
      <Navbar />
      <SocialIcons />
      {isDesktopView && children}
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div className="container-main">
            <Landing>{!isDesktopView && children}</Landing>

            {/* Section divider */}
            <div className="page-divider">
              <div className="page-divider-line"></div>
              <span className="page-divider-text">01 — ABOUT</span>
              <div className="page-divider-line"></div>
            </div>

            <About />

            {/* Section divider */}
            <div className="page-divider">
              <div className="page-divider-line"></div>
              <span className="page-divider-text">02 — EXPERTISE</span>
              <div className="page-divider-line"></div>
            </div>

            <WhatIDo />

            {/* Section divider */}
            <div className="page-divider">
              <div className="page-divider-line"></div>
              <span className="page-divider-text">03 — EXPERIENCE</span>
              <div className="page-divider-line"></div>
            </div>

            <Career />

            {/* Section divider */}
            <div className="page-divider">
              <div className="page-divider-line"></div>
              <span className="page-divider-text">04 — PROJECTS</span>
              <div className="page-divider-line"></div>
            </div>

            <Work />

            {/* Section divider */}
            <div className="page-divider">
              <div className="page-divider-line"></div>
              <span className="page-divider-text">05 — TOOLS & TECH</span>
              <div className="page-divider-line"></div>
            </div>

            <Suspense fallback={<div style={{ minHeight: '50vh' }}></div>}>
              <ToolsTech />
            </Suspense>

            {/* Section divider */}
            <div className="page-divider">
              <div className="page-divider-line"></div>
              <span className="page-divider-text">06 — ACHIEVEMENTS</span>
              <div className="page-divider-line"></div>
            </div>

            <Achievements />

            {/* Section divider */}
            <div className="page-divider">
              <div className="page-divider-line"></div>
              <span className="page-divider-text">07 — EDUCATION</span>
              <div className="page-divider-line"></div>
            </div>

            <Education />

            {/* Section divider */}
            <div className="page-divider">
              <div className="page-divider-line"></div>
              <span className="page-divider-text">08 — CONTACT</span>
              <div className="page-divider-line"></div>
            </div>

            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
