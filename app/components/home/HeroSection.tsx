import { RiCheckboxBlankCircleFill } from "@remixicon/react";
import "../../style/home.css";
function HeroSection() {
  return (
    <div className="hero container">
      <div className="available">
        <span className="rounded-full animate-pulse">
          <RiCheckboxBlankCircleFill className="text-[#06d40c] w-[10px]" />
        </span>
        <span>Available for New Projects</span>
      </div>

      <h1 className="text-5xl sm:text-6xl lg:text-7xl font-sans font-light tracking-tight text-slate-900 dark:text-white leading-none">
        Hi, I'm <br />
        <span className="font-bold bg-gradient-to-r from-slate-900 via-slate-650 to-slate-450 dark:from-white dark:via-slate-300 dark:to-gray-550 bg-clip-text text-transparent h-20 sm:h-24 inline-block tracking-tighter">
          Mehdi El-hajjame
        </span>
      </h1>
      <p className="text-xl sm:text-2xl font-light text-slate-600 dark:text-gray-400 font-sans tracking-tight mb-4">
        Full Stack Software Engineer & Architect
      </p>
      <p className="text-base text-slate-600 dark:text-gray-400 max-w-xl leading-relaxed font-light ">
        Building clean, scalable web architectures, responsive user interface
        systems, and high-performance digital experiences. Passionate about
        solving complex engineering challenges through modern technologies,
        type-safe development practices, and maintainable code. Focused on
        delivering fast, accessible, and visually refined applications that
        balance functionality with minimalist design principles.
      </p>
    </div>
  );
}

export default HeroSection;
