"use client";

import styles from "./TargetAudience.module.css";

export default function TargetAudience() {
  const audiences = [
    {
      title: "Tech Professionals",
      description: "Enhance advanced engineering expertise, embrace next-gen technologies (GenAI, ML, Cloud), and drive backend system innovation.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.icon}>
          <polyline points="16 18 22 12 16 6"/>
          <polyline points="8 6 2 12 8 18"/>
        </svg>
      )
    },
    {
      title: "Non-Tech Professionals",
      description: "Adapt digitally, build product thinking, understand analytics frameworks, and collaborate seamlessly in tech-heavy environments.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.icon}>
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
        </svg>
      )
    },
    {
      title: "Emerging Professionals",
      description: "Develop high-demand industry skills, build practical portfolios, and bridge academic-career transitions for rapid growth.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.icon}>
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
          <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
        </svg>
      )
    },
    {
      title: "Senior Professionals",
      description: "Strengthen global business leadership, master strategic change management, and elevate high-impact operational decisions.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.icon}>
          <path d="M12 2L2 7l10 5 10-5-10-5z"/>
          <path d="M2 17l10 5 10-5"/>
          <path d="M2 12l10 5 10-5"/>
        </svg>
      )
    }
  ];

  return (
    <section className={styles.audienceSection}>
      <div className={`${styles.container} container`}>
        <div className={styles.sectionHeader}>
          <span className={styles.tag}>Target Audience</span>
          <h2 className={styles.title}>Who Should Join?</h2>
          <p className={styles.subtitle}>
            Strategic skill enhancement designed to meet the career progression goals of modern enterprise roles.
          </p>
        </div>

        <div className={styles.grid}>
          {audiences.map((aud, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.iconWrapper}>
                {aud.icon}
              </div>
              <h3 className={styles.cardTitle}>{aud.title}</h3>
              <p className={styles.cardDesc}>{aud.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
