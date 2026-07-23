"use client";

import { useState, useEffect } from "react";
import styles from "./Header.module.css";

const navLinks = [
  { id: "home", label: "Home" },
  { id: "stats", label: "Stats" },
  { id: "clients", label: "Clients" },
  { id: "accredianEdge", label: "Accredian Edge" },
  { id: "domainExpertise", label: "Expertise" },
  { id: "cat", label: "CAT Framework" },
  { id: "howItWorks", label: "How It Works" },
  { id: "faqs", label: "FAQs" },
  { id: "testimonials", label: "Testimonials" },
];

export default function Header({ onEnquireClick }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Track scroll for styling header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Track active section
      const scrollPosition = window.scrollY + 100;
      for (const link of navLinks) {
        const el = document.getElementById(link.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(link.id);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e, id) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      const offsetTop = el.offsetTop - 80; // offset for sticky header
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
      setActiveSection(id);
    }
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={`${styles.container} container`}>
        <div className={styles.logoContainer} onClick={(e) => handleLinkClick(e, "home")}>
          <span className={styles.logoText}>accredian</span>
          <span className={styles.logoBadge}>enterprise</span>
        </div>

        {/* Desktop Nav */}
        <nav className={styles.desktopNav}>
          <ul className={styles.navList}>
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={(e) => handleLinkClick(e, link.id)}
                  className={`${styles.navLink} ${
                    activeSection === link.id ? styles.active : ""
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.ctaContainer}>
          <button className={styles.ctaButton} onClick={onEnquireClick}>
            Enquire Now
          </button>
          
          {/* Mobile Menu Toggle */}
          <button
            className={`${styles.mobileToggle} ${
              isMobileMenuOpen ? styles.mobileToggleActive : ""
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={styles.hamburgerLine}></span>
            <span className={styles.hamburgerLine}></span>
            <span className={styles.hamburgerLine}></span>
          </button>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      <div
        className={`${styles.mobileDrawer} ${
          isMobileMenuOpen ? styles.mobileDrawerOpen : ""
        }`}
      >
        <ul className={styles.mobileNavList}>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={(e) => handleLinkClick(e, link.id)}
                className={`${styles.mobileNavLink} ${
                  activeSection === link.id ? styles.mobileActive : ""
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className={styles.mobileCtaItem}>
            <button
              className={styles.mobileCtaButton}
              onClick={() => {
                setIsMobileMenuOpen(false);
                onEnquireClick();
              }}
            >
              Enquire Now
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}
