"use client";

import styles from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToSection = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const offsetTop = el.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className={styles.footer}>
      {/* Upper Banner: Speach advisor / Brand statement */}
      <div className={styles.banner}>
        <div className={`${styles.bannerContainer} container`}>
          <div className={styles.bannerText}>
            <h3 className={styles.bannerTitle}>Speak with Our Enterprise Advisors</h3>
            <p className={styles.bannerDesc}>Receive a custom capability audit and mapping roadmap designed for your team size.</p>
          </div>
          <a href="mailto:enterprise@accredian.com" className={styles.bannerMailBtn}>
            enterprise@accredian.com
          </a>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className={`${styles.mainFooter} container`}>
        <div className={styles.grid}>
          {/* Brand Info */}
          <div className={styles.brandCol}>
            <div className={styles.logo}>
              <span className={styles.logoText}>accredian</span>
              <span className={styles.logoBadge}>enterprise</span>
            </div>
            <p className={styles.brandDescText}>
              Accredian is a leading educational platform dedicated to enterprise capability development, delivering advanced curricula in GenAI, Data, Tech, and Leadership.
            </p>
            <div className={styles.socials}>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.socialIcon}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.socialIcon}><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.socialIcon}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Youtube">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.socialIcon}><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className={styles.linksCol}>
            <h4 className={styles.colTitle}>Company</h4>
            <ul className={styles.linksList}>
              <li><a href="#home" onClick={(e) => handleScrollToSection(e, "home")} className={styles.footerLink}>Home</a></li>
              <li><a href="#accredianEdge" onClick={(e) => handleScrollToSection(e, "accredianEdge")} className={styles.footerLink}>Why Accredian</a></li>
              <li><a href="#domainExpertise" onClick={(e) => handleScrollToSection(e, "domainExpertise")} className={styles.footerLink}>Expertise Verticals</a></li>
              <li><a href="#cat" onClick={(e) => handleScrollToSection(e, "cat")} className={styles.footerLink}>CAT Pedagogy</a></li>
              <li><a href="#faqs" onClick={(e) => handleScrollToSection(e, "faqs")} className={styles.footerLink}>FAQ Support</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div className={styles.linksCol}>
            <h4 className={styles.colTitle}>Resources</h4>
            <ul className={styles.linksList}>
              <li><a href="https://accredian.com/about" target="_blank" rel="noopener noreferrer" className={styles.footerLink}>About Us</a></li>
              <li><a href="https://accredian.com/blog" target="_blank" rel="noopener noreferrer" className={styles.footerLink}>Research Blog</a></li>
              <li><a href="https://accredian.com/careers" target="_blank" rel="noopener noreferrer" className={styles.footerLink}>Work Careers</a></li>
              <li><a href="https://accredian.com/privacy" target="_blank" rel="noopener noreferrer" className={styles.footerLink}>Privacy Policy</a></li>
              <li><a href="https://accredian.com/terms" target="_blank" rel="noopener noreferrer" className={styles.footerLink}>Terms of Service</a></li>
            </ul>
          </div>

          {/* Contact details */}
          <div className={styles.contactCol}>
            <h4 className={styles.colTitle}>Office Headquarters</h4>
            <p className={styles.contactText}>
              Accredian Corporate Tower,<br />
              Sector 48, Gurugram,<br />
              Haryana 122018, India
            </p>
            <p className={styles.contactEmail}>
              <strong>Direct:</strong> <a href="mailto:enterprise@accredian.com">enterprise@accredian.com</a>
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className={styles.bottomBar}>
        <div className={`${styles.bottomContainer} container`}>
          <p className={styles.copyright}>
            &copy; {currentYear} Accredian. All rights reserved. Built as part of Accredian Enterprise clone assignment.
          </p>
        </div>
      </div>
    </footer>
  );
}
