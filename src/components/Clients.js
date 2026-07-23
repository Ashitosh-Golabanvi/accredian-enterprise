"use client";

import styles from "./Clients.module.css";

export default function Clients() {
  const partners = [
    { name: "Google", icon: "Google" },
    { name: "Amazon", icon: "Amazon" },
    { name: "Microsoft", icon: "Microsoft" },
    { name: "Salesforce", icon: "Salesforce" },
    { name: "Adobe", icon: "Adobe" },
    { name: "Accenture", icon: "Accenture" },
    { name: "Deloitte", icon: "Deloitte" },
    { name: "Meta", icon: "Meta" },
  ];

  // We duplicate the list to ensure a seamless infinite scroll transition
  const marqueeList = [...partners, ...partners];

  return (
    <section id="clients" className={styles.clientsSection}>
      <div className={`${styles.container} container`}>
        <div className={styles.sectionHeader}>
          <span className={styles.tag}>Trusted By Leaders</span>
          <h2 className={styles.title}>Our Proven Partnerships</h2>
          <p className={styles.subtitle}>
            Empowering top-tier organizations to accelerate innovation and unlock technological excellence.
          </p>
        </div>
      </div>

      <div className={styles.marqueeWrapper}>
        <div className={styles.marquee}>
          {marqueeList.map((partner, index) => (
            <div key={index} className={styles.partnerLogoCard}>
              <span className={styles.partnerName}>{partner.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
