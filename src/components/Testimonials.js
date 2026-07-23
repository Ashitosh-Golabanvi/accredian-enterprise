"use client";

import { useState, useEffect } from "react";
import styles from "./Testimonials.module.css";

const testimonials = [
  {
    quote: "Accredian's customized GenAI program transformed our development pipeline. Our engineering team increased coding and prototyping velocities by 40% using prompt automation and LLM fine-tuning.",
    author: "Sarah Jenkins",
    role: "VP of Engineering",
    company: "CloudTech Solutions",
    initials: "SJ"
  },
  {
    quote: "The Product Management masterclass structured our cross-functional alignment perfectly. The pragmatic capstone projects were directly applicable to our Q3 release, enabling teams to validate market hypotheses faster.",
    author: "Rajesh Kumar",
    role: "Director of Product",
    company: "FinFlow Analytics",
    initials: "RK"
  },
  {
    quote: "We've tried multiple corporate training vendors, but Accredian's continuous mentor assessment model stood out. The team proficiency analytics dashboard gave our executive team clear, quantifiable ROI metrics.",
    author: "Amanda Ross",
    role: "L&D Lead",
    company: "GlobalRetail Corp",
    initials: "AR"
  }
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  // Optional: Auto-rotation
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className={styles.testimonialsSection}>
      <div className={`${styles.container} container`}>
        <div className={styles.sectionHeader}>
          <span className={styles.tag}>Success Stories</span>
          <h2 className={styles.title}>Testimonials from Our Partners</h2>
          <p className={styles.subtitle}>
            Hear how leading enterprises have successfully upskilled their workforces and achieved measurable performance gains.
          </p>
        </div>

        <div className={styles.carouselContainer}>
          <div className={styles.carouselTrack} style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
            {testimonials.map((test, index) => (
              <div key={index} className={styles.slide}>
                <div className={styles.card}>
                  <div className={styles.quoteIcon}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={styles.svgQuote}>
                      <path d="M11.19 12.19c0 1.66-1.34 3-3 3-.37 0-.7-.07-1.02-.21C7.62 16.71 8.86 18 10.5 18c.55 0 1-.45 1-1v-2c0-.55-.45-1-1-1-.41 0-.78-.17-1.05-.44l.05-.06c.38-.41.87-.7 1.44-.7 1.66 0 3-1.34 3-3V7.5c0-1.66-1.34-3-3-3s-3 1.34-3 3v2.81c0 .87.35 1.71.97 2.33l1.78 1.55zM20.19 12.19c0 1.66-1.34 3-3 3-.37 0-.7-.07-1.02-.21.45 1.73 1.69 3.02 3.33 3.02.55 0 1-.45 1-1v-2c0-.55-.45-1-1-1-.41 0-.78-.17-1.05-.44l.05-.06c.38-.41.87-.7 1.44-.7 1.66 0 3-1.34 3-3V7.5c0-1.66-1.34-3-3-3s-3 1.34-3 3v2.81c0 .87.35 1.71.97 2.33l1.78 1.55z"/>
                    </svg>
                  </div>
                  <p className={styles.quoteText}>{test.quote}</p>
                  
                  <div className={styles.authorInfo}>
                    <div className={styles.avatar}>
                      {test.initials}
                    </div>
                    <div className={styles.authorDetails}>
                      <h4 className={styles.authorName}>{test.author}</h4>
                      <span className={styles.authorRole}>{test.role}, <span className={styles.companyName}>{test.company}</span></span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button className={`${styles.navBtn} ${styles.prevBtn}`} onClick={handlePrev} aria-label="Previous slide">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={styles.arrowIcon}>
              <polyline points="15 18 9 12 15 6"/>
            </svg>
          </button>
          
          <button className={`${styles.navBtn} ${styles.nextBtn}`} onClick={handleNext} aria-label="Next slide">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={styles.arrowIcon}>
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </button>
        </div>

        {/* Pagination Dots */}
        <div className={styles.pagination}>
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${activeIndex === index ? styles.dotActive : ""}`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}
