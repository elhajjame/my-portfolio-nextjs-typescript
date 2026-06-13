import { div } from "framer-motion/client";
import { Mail } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { FiLinkedin } from "react-icons/fi";

export default function InfoComponent() {
  return (
    <div className="lg:col-span-5 space-y-6">
      <div className="rounded-2xl border border-slate-200/50 dark:border-slate-800/80 bg-white dark:bg-slate-900/20 p-6 md:p-8 backdrop-blur-md space-y-6 shadow-tiny">
        <div className="space-y-2">
          <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">
            Coordinates
          </h3>
          <p className="text-xs text-slate-450 leading-relaxed">
            Send a direct message via email or connect through professional
            social networks.
          </p>
        </div>

        <div className="pt-4 border-t border-slate-200/60 dark:border-slate-800/50 space-y-4">
          <div>
            <p className="text-[10px] font-mono uppercase text-slate-400 tracking-wider">
              Direct Mailbox
            </p>
            <div className="inline-flex items-center gap-2 group text-sm font-semibold text-cyan-500 hover:text-purple-500 mt-1 transition-colors">
              <Mail strokeWidth={1} />
              <a id="contact-email-link" href="mailto:el-hajjame@outlook.com">
                el-hajjame@outlook.com
              </a>
            </div>
          </div>

          <div>
            <p className="text-[10px] font-mono uppercase text-slate-400 tracking-wider">
              Location Node
            </p>
            <span className="text-sm font-medium text-slate-700 dark:text-slate-350 block mt-1">
              Béni Mellal, Morocco (GMT+1)
            </span>
          </div>
        </div>

        <div className="pt-6 border-t border-slate-200/60 dark:border-slate-800/50 space-y-3">
          <p className="text-[10px] font-mono uppercase text-slate-400 tracking-wider mb-2">
            Professional Profiles
          </p>

          <div className="flex flex-col gap-2">
            <div className="cursor-pointer group inline-flex items-center gap-2 p-3 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-600 bg-slate-50 hover:bg-slate-100 dark:bg-slate-950/40 dark:hover:bg-slate-900/60 text-slate-700 dark:text-slate-300 transition-all font-semibold text-xs">
              <FaGithub />

              <a
                id="contact-social-github"
                href="https://github.com/elhajjame"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
            <div className="cursor-pointer group inline-flex items-center gap-2 p-3 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-600 bg-slate-50 hover:bg-slate-100 dark:bg-slate-950/40 dark:hover:bg-slate-900/60 text-slate-700 dark:text-slate-300 transition-all font-semibold text-xs">
              <FiLinkedin />
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
