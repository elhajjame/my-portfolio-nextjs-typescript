"use client";
import SectionHeader from "../_components/SectionHeader";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";

import photo from "@/public/photo.jpg";

// export const metadata = { title: "About" };
function page() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div>
        <SectionHeader
          title="About"
          description="Bridging rigorous computing frameworks with smooth, minimalist layout implementations."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-4 flex flex-col items-center">
            <div className="relative group p-1.5 rounded-3xl border border-slate-200/60 bg-white overflow-hidden shadow-md max-w-sm w-full">
              <Image
                src={photo}
                width={500}
                height={500}
                alt="Picture of the author"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="absolute bottom-4 left-4 right-4 translate-y-2 text-center text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <p className="text-xs font-mono font-semibold uppercase tracking-wider">
                  Mehdi El-Hajjame
                </p>
                <p className="text-[10px] text-cyan-400">
                  BÉNI MELLAL, MOROCCO
                </p>
              </div>
            </div>

            <div className="w-full max-w-sm mt-6 p-5 rounded-2xl border border-slate-200/50 dark:border-white/5 bg-white/60 dark:bg-white/[0.015] backdrop-blur-md space-y-3 text-xs">
              <div className="flex items-center gap-2.5 text-slate-500 dark:text-slate-400">
                <MapPin />
                <span>Béni Mellal, Morocco</span>
              </div>

              <div className="flex items-center gap-2.5 text-slate-500">
                <Mail />
                <a
                  href="mailto:el-hajjame@outlook.com"
                  className="transition-colors hover:text-cyan-500"
                >
                  el-hajjame@outlook.com
                </a>
              </div>

              <div className="flex items-center gap-2.5 text-slate-500">
                <Phone />
                <span>+212 6 80 57 31 57</span>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="lg:col-span-8 space-y-6 text-slate-700">
            <h2 className="font-display text-2xl font-bold text-slate-900 dark:text-white">
              Professional Profile
            </h2>

            <p className="text-sm leading-relaxed">
              Hello! I am Mehdi El-Hajjame, a passionate Junior Web Developer
              dedicated to building modern, responsive, and user-friendly web
              applications. I specialize in front-end and back-end development,
              API engineering, database management, and collaborating
              efficiently in Agile/Scrum environments.
            </p>

            <p className="text-sm leading-relaxed">
              I am a graduate of the Full-Stack JavaScript Developer Program at
              the Ahmed AL HANSALI Digital School in Béni Mellal, Morocco.
              Through hands-on experience developing enterprise invoice
              trackers, active movie SPAs, and robust REST APIs, I have built a
              deep practical understanding of the modern JavaScript and
              TypeScript ecosystem.
            </p>

            <p className="text-sm leading-relaxed">
              With expertise spanning React, Redux, Node.js, Express.js, and
              MongoDB, I focus on building high-performance solutions that solve
              real-world problems. Whether designing automated investment
              systems or crafting responsive interfaces with Tailwind CSS, I am
              always excited to learn, grow professionally, and contribute to
              innovative projects.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default page;
