"use client";

import { useState } from "react";
import styles from "./FAQs.module.css";

export default function FAQs() {
  const [activeCategory, setActiveCategory] = useState("course");
  const [expandedIndex, setExpandedIndex] = useState(0);

  const categories = [
    { id: "course", label: "About the Course" },
    { id: "delivery", label: "About the Delivery" },
    { id: "misc", label: "Miscellaneous" }
  ];

  const faqData = {
    course: [
      {
        question: "Can we customize the training curriculum for our specific tools?",
        answer: "Yes, absolutely. Our faculty collaborates with your tech leads to tailor syllabus modules, case studies, and coding lab exercises around your precise technical stack, internal libraries, and business architecture requirements."
      },
      {
        question: "What is the average duration of the enterprise programs?",
        answer: "Programs are highly configurable, ranging from intensive 2-day executive workshops to structured 12-week cohorts, depending on the topic depth and your team's project schedule constraints."
      },
      {
        question: "Is there a minimum batch size required for corporate cohorts?",
        answer: "Typically, we optimize our cohort learning experience for groups of 15 or more professionals. However, we also provide customized options for smaller leadership or specialized core teams."
      }
    ],
    delivery: [
      {
        question: "Are the training sessions conducted live or pre-recorded?",
        answer: "All primary sessions are conducted live by senior industry facilitators. In addition to live interactive classes, learners receive access to self-paced pre-readings, code repositories, and recorded reviews."
      },
      {
        question: "How does the hands-on lab sandbox work?",
        answer: "We provide cloud-hosted programming and sandbox environments that run directly inside the browser. Learners do not need to install complex local dependencies, enabling instant coding and learning."
      },
      {
        question: "What support is provided to learners between live sessions?",
        answer: "We maintain dedicated Slack or Teams channels for active cohorts, where learners can ask questions, collaborate on projects, and receive continuous support from our teaching assistants and mentors."
      }
    ],
    misc: [
      {
        question: "Do we receive verifiable completion credentials?",
        answer: "Yes. Every learner who fulfills completion criteria receives an industry-recognized, verifiable digital certificate powered by Accredian, which can be linked directly to professional profiles."
      },
      {
        question: "How can we measure the Return on Investment (ROI) of the program?",
        answer: "We provide L&D managers with access to a dashboard tracking participation, weekly completion metrics, and coding lab assessment scores. We also conduct pre- and post-program skill maturity audits."
      },
      {
        question: "What happens if a participant misses a live session?",
        answer: "All live classes are recorded and uploaded to the portal within 2 hours of completion. Missed classes can be reviewed on-demand, and learners can ask clarification questions in mentor channels."
      }
    ]
  };

  const handleToggle = (index) => {
    setExpandedIndex(expandedIndex === index ? -1 : index);
  };

  const currentFaqs = faqData[activeCategory] || [];

  return (
    <section id="faqs" className={styles.faqSection}>
      <div className={`${styles.container} container`}>
        <div className={styles.sectionHeader}>
          <span className={styles.tag}>Support Desk</span>
          <h2 className={styles.title}>Frequently Asked Questions</h2>
          <p className={styles.subtitle}>
            Have questions about our programs, timelines, or delivery models? Find the answers here.
          </p>
        </div>

        <div className={styles.layout}>
          {/* Category Tabs */}
          <div className={styles.categoryTabs}>
            {categories.map((cat) => (
              <button
                key={cat.id}
                className={`${styles.catBtn} ${
                  activeCategory === cat.id ? styles.catBtnActive : ""
                }`}
                onClick={() => {
                  setActiveCategory(cat.id);
                  setExpandedIndex(0); // auto-expand first question of new category
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* FAQ Accordions */}
          <div className={styles.faqList}>
            {currentFaqs.map((faq, index) => {
              const isExpanded = expandedIndex === index;
              return (
                <div
                  key={index}
                  className={`${styles.accordionItem} ${
                    isExpanded ? styles.itemExpanded : ""
                  }`}
                >
                  <button
                    className={styles.questionBtn}
                    onClick={() => handleToggle(index)}
                    aria-expanded={isExpanded}
                  >
                    <span className={styles.questionText}>{faq.question}</span>
                    <span className={styles.iconWrapper}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={styles.chevronIcon}
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </span>
                  </button>
                  <div
                    className={styles.answerWrapper}
                    style={{
                      maxHeight: isExpanded ? "200px" : "0",
                      opacity: isExpanded ? "1" : "0",
                    }}
                  >
                    <p className={styles.answerText}>{faq.answer}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
