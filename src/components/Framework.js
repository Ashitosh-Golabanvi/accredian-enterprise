"use client";

import styles from "./Framework.module.css";

export default function Framework() {
  const steps = [
    {
      letter: "C",
      title: "Capability Assessment",
      description: "We benchmark your team's current skill levels, identify operational gaps, and structure customized roadmap trajectories.",
      details: ["Skill Gap Analysis", "Role Competency Mapping", "Custom Syllabus Tailoring"]
    },
    {
      letter: "A",
      title: "Active Learning",
      description: "Teams engage in live virtual classrooms, hands-on development sandboxes, and industry-oriented capstone projects.",
      details: ["Expert-Led Masterclasses", "Practical Lab Sandbox", "Collaborative Cohorts"]
    },
    {
      letter: "T",
      title: "Transformative Outcomes",
      description: "Verify team proficiency through industry credentials and monitor organizational growth indicators via analytics dashboards.",
      details: ["Validated Certificates", "Skill Elevation Audits", "Team Proficiency Dashboards"]
    }
  ];

  return (
    <section id="cat" className={styles.catSection}>
      <div className={`${styles.container} container`}>
        <div className={styles.sectionHeader}>
          <span className={styles.tag}>Learning Pedagogy</span>
          <h2 className={styles.title}>The CAT Framework</h2>
          <p className={styles.subtitle}>
            Our structured, three-pronged educational methodology engineered to deliver predictable skill elevations.
          </p>
        </div>

        <div className={styles.flowLayout}>
          {steps.map((step, index) => (
            <div key={index} className={styles.stepCard}>
              <div className={styles.letterWrapper}>
                <span className={`${styles.letter} text-gradient`}>{step.letter}</span>
              </div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDesc}>{step.description}</p>
              
              <div className={styles.detailsList}>
                {step.details.map((detail, idx) => (
                  <div key={idx} className={styles.detailItem}>
                    <span className={styles.bullet}></span>
                    {detail}
                  </div>
                ))}
              </div>

              {index < steps.length - 1 && (
                <div className={styles.connector}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={styles.arrowIcon}>
                    <line x1="5" y1="12" x2="19" y2="12"/>
                    <polyline points="12 5 19 12 12 19"/>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
