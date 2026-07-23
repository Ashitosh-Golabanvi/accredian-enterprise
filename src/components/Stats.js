"use client";

import styles from "./Stats.module.css";

export default function Stats() {
  const statsData = [
    {
      value: "10K+",
      label: "Professionals Trained",
      description: "Successfully upskilled across diverse industries for exceptional career growth and transition.",
    },
    {
      value: "200+",
      label: "Sessions Delivered",
      description: "Interactive learning sessions conducted by world-class industry experts and leaders.",
    },
    {
      value: "5K+",
      label: "Active Learners",
      description: "Presently engaged in masterclasses, projects, and structured training programs.",
    },
  ];

  return (
    <section id="stats" className={styles.statsSection}>
      <div className={`${styles.container} container`}>
        <div className={styles.sectionHeader}>
          <span className={styles.tag}>Track Record</span>
          <h2 className={styles.title}>The Numbers Behind Our Success</h2>
          <p className={styles.subtitle}>
            Empowering modern workforces with state-of-the-art skills and technical insights.
          </p>
        </div>

        <div className={styles.grid}>
          {statsData.map((stat, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.valueWrapper}>
                <span className={`${styles.value} text-gradient`}>{stat.value}</span>
              </div>
              <h3 className={styles.label}>{stat.label}</h3>
              <p className={styles.description}>{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
