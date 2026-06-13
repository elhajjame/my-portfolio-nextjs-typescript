"use client";
import Image from "next/image";
import HeroSection from "./_components/home/HeroSection";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div>
        <HeroSection />
      </div>
    </motion.div>
  );
}
