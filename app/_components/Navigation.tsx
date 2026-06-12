import Link from "next/link";
import "../style/navigation.css";
import { RiDownload2Line, RiSunLine } from "@remixicon/react";

export default function Navigation() {
  return (
    <header
      className="header bg-[#050505] py-6 border-b border-slate-200/50
"
    >
      <div className="container flex justify-between items-center ">
        <span className="text-white font-bold">M.El-Hajjame</span>
        <ul className="nav">
          <li>
            <Link href="/" className="active">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link href="/skills">Skills</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
        <div className="text-white flex gap-2">
          <button className="px-2 py-1 rounded-xl border border-slate-200/60 dark:border-white/10 bg-slate-50 hover:bg-slate-100 dark:bg-white/5 dark:hover:bg-white/10 text-slate-600 dark:text-slate-300 transition-all cursor-pointer shadow-sm">
            <RiSunLine className="w-[16px]" />
          </button>
          <button className="px-2 py-1 rounded-xl border border-slate-200/60 dark:border-white/10 bg-slate-50 hover:bg-slate-100 dark:bg-white/5 dark:hover:bg-white/10 text-slate-600 dark:text-slate-300 transition-all cursor-pointer shadow-sm flex gap-1">
            <RiDownload2Line className="w-[16px]" />
            <span>Resume</span>
          </button>
        </div>
      </div>
    </header>
  );
}
