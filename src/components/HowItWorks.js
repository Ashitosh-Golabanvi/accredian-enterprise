"use client";

import styles from "./HowItWorks.module.css";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Skill Gap Analysis",
      description: "We assess your team's current technical levels, evaluate critical business deficiencies, and establish baseline performance metrics.",
    },
    {
      number: "02",
      title: "Customized Training Plan",
      description: "We create a tailored curriculum syllabus and training roadmap built specifically to address your stack, timelines, and business goals.",
    },
    {
      number: "03",
      title: "Flexible Program Delivery",
      description: "We execute interactive sessions led by industry experts, configured dynamically to minimize impact on standard development sprint hours.",
    }
  ];

  return (
    <section id="howItWorks" className={styles.howSection}>
      <div className={`${styles.container} container`}>
        <div className={styles.sectionHeader}>
          <span className={styles.tag}>Methodology</span>
          <h2 className={styles.title}>How We Deliver Results That Matter?</h2>
          <p className={styles.subtitle}>
            A structured, collaborative approach to strategic corporate training and technical upskilling.
          </p>
        </div>

        <div className={styles.timelineGrid}>
          {steps.map((step, index) => (
            <div key={index} className={styles.timelineItem}>
              <div className={styles.numberCol}>
                <span className={styles.number}>{step.number}</span>
                {index < steps.length - 1 && <span className={styles.line}></span>}
              </div>
              <div className={styles.contentCol}>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
