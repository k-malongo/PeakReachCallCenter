import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("header");
  const [navTop, setNavTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById("header");
      const header_rect = header.getBoundingClientRect();

      if (header_rect.bottom < 0.9 * window.innerHeight) {
        setNavTop(false);
      } else {
        setNavTop(true);
      }

      const elements = [
        "header",
        "services",
        "about",
		"start",
        "testimonials",
        "faq",
        "team",
        "contact",
      ];
      const observable = {};
      elements.forEach((element) => {
        const el = document.getElementById(element);
        if (el) observable[element] = el;
      });
      const pos = {};
      for (const key in observable) {
        const rect = observable[key].getBoundingClientRect();
        pos[key] = rect;
      }
      const scrolled = Object.keys(pos).filter((key) => {
        const rect = pos[key];
        if (rect.top < window.innerHeight / 2 && rect.bottom >= 0) {
          return true;
        }
        return false;
      });
      setActiveLink(scrolled[scrolled.length - 1]);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="navbar" className={navTop ? "nav_top" : "nav_scrolled"}>
      <div className="content">
        <div className="brand">
          <img className="logo" src="/images/logo1.png" alt="logo" />
          <h1>Peak Reach</h1>
        </div>

        <div className="links">
          <Link
            to="/"
            className={activeLink === "header" ? "active link" : "link"}
          >
            Home
          </Link>
          <Link
            to="/#services"
            className={activeLink === "services" ? "active link" : "link"}
          >
            Services
          </Link>
          <Link
            to="/#about"
            className={
              activeLink === "about" ||
              activeLink === "testimonials" ||
              activeLink === "start"
                ? "active link"
                : "link"
            }
          >
            About Us
          </Link>
          <Link
            to="/#faq"
            className={activeLink === "faq" ? "active link" : "link"}
          >
            FAQs
          </Link>
          <Link
            to="/#team"
            className={activeLink === "team" ? "active link" : "link"}
          >
            Our Team
          </Link>
          <Link
            to="/#contact"
            className={activeLink === "contact" ? "active link" : "link"}
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}
