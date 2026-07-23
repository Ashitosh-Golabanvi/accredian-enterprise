"use client";

import styles from "./Hero.module.css";

export default function Hero({ onEnquireClick }) {
  const highlights = [
    {
      title: "Tailored Solutions",
      desc: "Custom training programs aligned with your unique business objectives.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.icon}>
          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
          <path d="m9 12 2 2 4-4"/>
        </svg>
      )
    },
    {
      title: "Industry Insights",
      desc: "Curated syllabi addressing real-world operational challenges.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.icon}>
          <path d="M3 3v18h18"/>
          <path d="m19 9-5 5-4-4-3 3"/>
        </svg>
      )
    },
    {
      title: "Expert Guidance",
      desc: "Learn from top industry practitioners with decades of combined experience.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.icon}>
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      )
    }
  ];

  const handleLearnMoreClick = () => {
    const el = document.getElementById("howItWorks");
    if (el) {
      const offsetTop = el.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="home" className={styles.heroSection}>
      <div className={styles.backgroundBlobs}>
        <div className={styles.blob1}></div>
        <div className={styles.blob2}></div>
      </div>
      
      <div className={`${styles.container} container`}>
        <div className={styles.heroContent}>
          <span className={styles.heroTagline}>Accredian for Enterprise</span>
          <h1 className={styles.heroTitle}>
            Next-Gen Expertise for Your <span className="text-gradient">Enterprise</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Cultivate high-performance teams through expert-led learning. We partner with organizations to bridge digital capability gaps and fuel operational innovation.
          </p>

          <div className={styles.highlightsList}>
            {highlights.map((item, index) => (
              <div key={index} className={styles.highlightItem}>
                <div className={styles.iconWrapper}>{item.icon}</div>
                <div className={styles.highlightText}>
                  <h3 className={styles.highlightTitle}>{item.title}</h3>
                  <p className={styles.highlightDesc}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.heroCta}>
            <button className={styles.primaryButton} onClick={onEnquireClick}>
              Enquire Now
            </button>
            <button className={styles.secondaryButton} onClick={handleLearnMoreClick}>
              Learn More
            </button>
          </div>
        </div>

        <div className={styles.heroGraphic}>
          <div className={styles.graphicCard}>
            <div className={styles.headerDotGroup}>
              <span className={styles.dotRed}></span>
              <span className={styles.dotYellow}></span>
              <span className={styles.dotGreen}></span>
            </div>
            
            {/* Visual network of nodes illustrating upskilling connection */}
            <div className={styles.networkGraphic}>
              <div className={`${styles.node} ${styles.nodeCenter}`}>
                <span>Upskilling</span>
              </div>
              <div className={`${styles.node} ${styles.node1}`}>GenAI</div>
              <div className={`${styles.node} ${styles.node2}`}>Data</div>
              <div className={`${styles.node} ${styles.node3}`}>Product</div>
              <div className={`${styles.node} ${styles.node4}`}>Tech</div>
              
              {/* Lines */}
              <div className={`${styles.line} ${styles.line1}`}></div>
              <div className={`${styles.line} ${styles.line2}`}></div>
              <div className={`${styles.line} ${styles.line3}`}></div>
              <div className={`${styles.line} ${styles.line4}`}></div>
            </div>

            {/* Simulated Live Feed / Growth Chart */}
            <div className={styles.growthPanel}>
              <div className={styles.panelTitle}>Team Growth Index</div>
              <div className={styles.chartContainer}>
                <div className={styles.chartBar} style={{ height: "40%" }}></div>
                <div className={styles.chartBar} style={{ height: "55%" }}></div>
                <div className={styles.chartBar} style={{ height: "70%" }}></div>
                <div className={styles.chartBar} style={{ height: "95%" }}></div>
              </div>
              <div className={styles.growthStats}>
                <span className={styles.growthNumber}>+87%</span>
                <span className={styles.growthLabel}>Skill Proficiency Increase</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
