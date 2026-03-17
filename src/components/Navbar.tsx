import { useEffect, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);
export let smoother: ScrollSmoother;

const Navbar = () => {
  const [activeLang, setActiveLang] = useState({ code: 'en', label: 'English', flag: '🇬🇧' });
  const [isLangOpen, setIsLangOpen] = useState(false);

  const langs = [
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'fr', label: 'Français', flag: '🇫🇷' },
    { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
  ];

  const changeLanguage = (lang: { code: string, label: string, flag: string }) => {
    setActiveLang(lang);
    setIsLangOpen(false);

    // Find Google Translate combo box and update it
    const selectStr = document.querySelector('.goog-te-combo') as HTMLSelectElement;
    if (selectStr) {
      selectStr.value = lang.code;
      selectStr.dispatchEvent(new Event('change'));
    }
  };

  useEffect(() => {
    smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.7,
      speed: 1.7,
      effects: true,
      autoResize: true,
      ignoreMobileResize: true,
    });

    smoother.scrollTop(0);
    smoother.paused(true);

    let links = document.querySelectorAll(".header ul a");
    links.forEach((elem) => {
      let element = elem as HTMLAnchorElement;
      element.addEventListener("click", (e) => {
        if (window.innerWidth > 1024) {
          e.preventDefault();
          let elem = e.currentTarget as HTMLAnchorElement;
          let section = elem.getAttribute("data-href");
          smoother.scrollTo(section, true, "top top");
        }
      });
    });
    window.addEventListener("resize", () => {
      ScrollSmoother.refresh(true);
    });
  }, []);
  return (
    <>
      <div className="header">
        <a href="/#" className="navbar-title" data-cursor="disable">
          <img src="/images/mayank-profile.png" alt="Mayank" style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover', border: '2px solid var(--accentColor)' }} />
        </a>
        <a
          href="mailto:thakurmayank721@gmail.com"
          className="navbar-connect"
          data-cursor="disable"
        >
          thakurmayank721@gmail.com
        </a>
        <ul>
          <li>
            <a data-href="#about" href="#about">
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li>
            <a data-href="#work" href="#work">
              <HoverLinks text="WORK" />
            </a>
          </li>
          <li>
            <a data-href="#contact" href="#contact">
              <HoverLinks text="CONTACT" />
            </a>
          </li>
          <li className="lang-switcher">
            <div className="lang-dropdown-container">
              <button
                className="lang-btn active"
                onClick={() => setIsLangOpen(!isLangOpen)}
              >
                <span className="lang-flag">{activeLang.flag}</span>
                <span className="lang-label">{activeLang.label}</span>
                <span className="lang-arrow">▼</span>
              </button>

              <div className={`lang-dropdown-menu ${isLangOpen ? 'open' : ''}`}>
                {langs.map((lang) => (
                  <button
                    key={lang.code}
                    className={`lang-option ${activeLang.code === lang.code ? 'selected' : ''}`}
                    onClick={() => changeLanguage(lang)}
                  >
                    <span className="lang-flag">{lang.flag}</span>
                    <span className="lang-label">{lang.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </li>
        </ul>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
