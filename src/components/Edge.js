"use client";

import styles from "./Edge.module.css";

export default function Edge() {
  const edges = [
    {
      title: "Customized Curriculum",
      description: "Syllabi structured dynamically to address your exact business use cases, technical stack, and learning objectives.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.icon}>
          <path d="M12 20h9"/>
          <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
        </svg>
      )
    },
    {
      title: "Interactive Live Sessions",
      description: "Engage in live virtual classrooms with real-time Q&A, hands-on lab sandboxes, and expert peer discussion rooms.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.icon}>
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
          <line x1="8" y1="21" x2="16" y2="21"/>
          <line x1="12" y1="17" x2="12" y2="21"/>
        </svg>
      )
    },
    {
      title: "Pragmatic Capstones",
      description: "Solve practical business problems. Learners apply frameworks immediately on projects designed from industry scenarios.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.icon}>
          <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
          <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"/>
        </svg>
      )
    },
    {
      title: "Validated Credentials",
      description: "Earn industry-recognized certificates that signify verifiable proficiency and mastery of advanced professional capabilities.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.icon}>
          <circle cx="12" cy="8" r="7"/>
          <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
        </svg>
      )
    },
    {
      title: "Expert Mentor Panels",
      description: "Receive direct, expert mentoring from senior tech leads, product veterans, and operational strategists.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.icon}>
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      )
    },
    {
      title: "Measurable Analytics",
      description: "Track group participation, completion scores, progress indicators, and skill elevations using custom dashboards.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.icon}>
          <line x1="18" y1="20" x2="18" y2="10"/>
          <line x1="12" y1="20" x2="12" y2="4"/>
          <line x1="6" y1="20" x2="6" y2="14"/>
        </svg>
      )
    }
  ];

  return (
    <section id="accredianEdge" className={styles.edgeSection}>
      <div className={`${styles.container} container`}>
        <div className={styles.sectionHeader}>
          <span className={styles.tag}>Why Accredian</span>
          <h2 className={styles.title}>The Accredian Edge</h2>
          <p className={styles.subtitle}>
            We combine pedagogical excellence with industry expertise to deliver high-impact strategic training.
          </p>
        </div>

        <div className={styles.grid}>
          {edges.map((edge, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.iconContainer}>
                {edge.icon}
              </div>
              <h3 className={styles.cardTitle}>{edge.title}</h3>
              <p className={styles.cardDesc}>{edge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
