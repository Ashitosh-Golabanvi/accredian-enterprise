"use client";

import { useState } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Clients from "../components/Clients";
import Edge from "../components/Edge";
import Expertise from "../components/Expertise";
import Segmentation from "../components/Segmentation";
import TargetAudience from "../components/TargetAudience";
import Framework from "../components/Framework";
import HowItWorks from "../components/HowItWorks";
import FAQs from "../components/FAQs";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import EnquireModal from "../components/EnquireModal";
import styles from "./page.module.css";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className={styles.appContainer}>
      {/* Sticky Header */}
      <Header onEnquireClick={openModal} />

      {/* Main Sections */}
      <main className={styles.main}>
        <Hero onEnquireClick={openModal} />
        <Stats />
        <Clients />
        <Edge />
        <Expertise onEnquireClick={openModal} />
        <Segmentation />
        <TargetAudience />
        <Framework />
        <HowItWorks />
        <FAQs />
        <Testimonials />
      </main>

      {/* Footer Details */}
      <Footer />

      {/* Enquire Lead Modal */}
      <EnquireModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}
