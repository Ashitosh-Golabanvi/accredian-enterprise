"use client";

import { useState } from "react";
import styles from "./Expertise.module.css";

export default function Expertise({ onEnquireClick }) {
  const [activeTab, setActiveTab] = useState("product");

  const domains = [
    {
      id: "product",
      label: "Product & Innovation Hub",
      title: "Product Management & Business Innovation",
      description: "Equip your teams to build, scale, and manage user-centric digital products. From design thinking to market strategies.",
      skills: ["Product Strategy", "User Experience (UX) Design", "Agile & Scrum Frameworks", "Product Analytics", "Market Validation"],
      courses: [
        "Executive Program in Product Management",
        "Masterclass in Design Thinking & Innovation",
        "Strategic Product Marketing Certification"
      ]
    },
    {
      id: "genai",
      label: "Gen-AI Mastery",
      title: "Generative AI & Enterprise Automation",
      description: "Empower your workforce with prompt engineering, LLM integration, and AI-first workflows to drive operational efficiency.",
      skills: ["Prompt Engineering", "LLM Fine-Tuning", "AI Ethics & Governance", "Retrieval-Augmented Generation (RAG)", "Workflow Automation"],
      courses: [
        "Generative AI for Product & Tech Leaders",
        "Enterprise LLM Integration & Deployment",
        "Prompt Engineering for Business Teams"
      ]
    },
    {
      id: "leadership",
      label: "Leadership Elevation",
      title: "Strategic Leadership & Management",
      description: "Nurture tomorrow's leaders. Programs covering executive communication, change management, and strategy implementation.",
      skills: ["Executive Strategy", "Change Management", "High-Impact Communication", "Conflict Resolution", "Data-Driven Decisions"],
      courses: [
        "Advanced Management Programme",
        "Leadership in the Digital Transformation Era",
        "Strategic Decision Making & Execution"
      ]
    },
    {
      id: "techdata",
      label: "Tech & Data Insights",
      title: "Advanced Software Tech & Data Analytics",
      description: "Scale your technology capabilities. Cover cloud architecture, machine learning systems, data engineering, and analytics.",
      skills: ["Machine Learning & Deep Learning", "Cloud Infrastructure (AWS/GCP)", "Data Engineering Pipelines", "Cybersecurity Protocols", "Full-Stack Development"],
      courses: [
        "Post Graduate Program in Data Science",
        "Cloud Architecture & DevOps Masterclass",
        "Cybersecurity & Threat Mitigation Certification"
      ]
    },
    {
      id: "operations",
      label: "Operations Excellence",
      title: "Operational Excellence & Supply Chain",
      description: "Optimize internal workflows, supply chains, and quality standards through Lean principles and process analytics.",
      skills: ["Lean & Six Sigma", "Supply Chain Management", "Process Automation", "Quality Assurance (QA) Management", "Risk Assessment"],
      courses: [
        "Lean Six Sigma Green Belt Certification",
        "Global Supply Chain Management Program",
        "Operations Design & Performance Analytics"
      ]
    },
    {
      id: "digital",
      label: "Digital Enterprise",
      title: "Digital Business Transformation",
      description: "Transition legacy operations into modern cloud-first digital ecosystems, improving customer touchpoints and agility.",
      skills: ["Digital Maturity Audits", "Omnichannel Marketing Strategy", "Cloud-First Migration", "SaaS Business Models", "Customer Journey Mapping"],
      courses: [
        "Digital Transformation Strategy Course",
        "SaaS Growth & Customer Success Program",
        "Modern Digital Marketing & Analytics"
      ]
    }
  ];

  const activeDomain = domains.find((d) => d.id === activeTab) || domains[0];

  return (
    <section id="domainExpertise" className={styles.expertiseSection}>
      <div className={`${styles.container} container`}>
        <div className={styles.sectionHeader}>
          <span className={styles.tag}>Expertise Verticals</span>
          <h2 className={styles.title}>Our Domain Expertise</h2>
          <p className={styles.subtitle}>
            Specialized enterprise curricula engineered to fuel business growth and technical proficiency.
          </p>
        </div>

        <div className={styles.contentLayout}>
          {/* Tabs Navigation */}
          <div className={styles.tabsSidebar}>
            {domains.map((domain) => (
              <button
                key={domain.id}
                className={`${styles.tabBtn} ${
                  activeTab === domain.id ? styles.tabBtnActive : ""
                }`}
                onClick={() => setActiveTab(domain.id)}
              >
                {domain.label}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={styles.tabArrow}>
                  <polyline points="9 18 15 12 9 6"/>
                </svg>
              </button>
            ))}
          </div>

          {/* Tab Content Display */}
          <div className={styles.contentDisplay} key={activeDomain.id}>
            <h3 className={styles.domainTitle}>{activeDomain.title}</h3>
            <p className={styles.domainDesc}>{activeDomain.description}</p>

            <div className={styles.divider}></div>

            <div className={styles.detailGrid}>
              <div className={styles.detailColumn}>
                <h4 className={styles.columnHeader}>Core Skill Capabilities</h4>
                <ul className={styles.skillList}>
                  {activeDomain.skills.map((skill, index) => (
                    <li key={index} className={styles.skillItem}>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={styles.checkIcon}>
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.detailColumn}>
                <h4 className={styles.columnHeader}>Example Enterprise Programs</h4>
                <ul className={styles.courseList}>
                  {activeDomain.courses.map((course, index) => (
                    <li key={index} className={styles.courseItem}>
                      <span className={styles.courseBullet}>0{index + 1}</span>
                      {course}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className={styles.actionRow}>
              <button className={styles.enquireBtn} onClick={onEnquireClick}>
                Request Customized Syllabus
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
