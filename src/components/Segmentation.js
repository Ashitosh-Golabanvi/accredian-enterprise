"use client";

import styles from "./Segmentation.module.css";

export default function Segmentation() {
  const segments = [
    {
      title: "Program Specific",
      subtitle: "Academic Depth & Duration",
      items: ["Certificates", "Executive Programs", "Post Graduate Certificates", "Strategic Masterclasses"],
      color: "blue"
    },
    {
      title: "Industry Specific",
      subtitle: "Sector-Focused Frameworks",
      items: ["Information Tech", "Healthcare & Pharma", "Retail & E-commerce", "Banking & Finance", "Manufacturing & Supply Chain"],
      color: "green"
    },
    {
      title: "Topic Specific",
      subtitle: "Specialized Skill Domains",
      items: ["Machine Learning & GenAI", "Product & Design", "Data Analytics & BI", "Cybersecurity & InfoSec", "Cloud & Infrastructure"],
      color: "purple"
    },
    {
      title: "Level Specific",
      subtitle: "Career Level Alignment",
      items: ["Senior Leadership", "Mid-Career Professionals", "Emerging Talent & Freshers", "Cross-Functional Teams"],
      color: "orange"
    }
  ];

  return (
    <section className={styles.segmentSection}>
      <div className={`${styles.container} container`}>
        <div className={styles.sectionHeader}>
          <span className={styles.tag}>Flexible Formats</span>
          <h2 className={styles.title}>Tailored Course Segmentation</h2>
          <p className={styles.subtitle}>
            Explore custom-fit courses designed to address every organizational level and professional focus area.
          </p>
        </div>

        <div className={styles.grid}>
          {segments.map((seg, index) => (
            <div key={index} className={`${styles.card} ${styles[seg.color]}`}>
              <div className={styles.cardHeader}>
                <h3 className={styles.cardTitle}>{seg.title}</h3>
                <span className={styles.cardSubtitle}>{seg.subtitle}</span>
              </div>
              <ul className={styles.itemList}>
                {seg.items.map((item, idx) => (
                  <li key={idx} className={styles.item}>
                    <span className={styles.bullet}></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
