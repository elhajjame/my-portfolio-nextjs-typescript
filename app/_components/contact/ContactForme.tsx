import { Send } from "lucide-react";

function ContactForme() {
  return (
    <div className="w-[42em] rounded-2xl border border-slate-200/50 dark:border-slate-800/80 bg-white dark:bg-slate-900/20 p-6 md:p-8 backdrop-blur-md space-y-6 shadow-tiny">
      <div className="flex flex-col">
        <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-2 uppercase tracking-wide">
          YOUR NAME
        </label>
        <input
          className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-white/10 bg-white/50 dark:bg-white/[0.015] text-slate-900 dark:text-white placeholder-slate-450 dark:placeholder-slate-500 focus:outline-none focus:border-cyan-400 dark:focus:border-cyan-400 text-sm shadow-tiny transition-all"
          type="text"
          placeholder="YOUR NAME"
        />
      </div>
      <div className="flex flex-col">
        <label
          className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-2 uppercase tracking-wide"
          htmlFor=""
        >
          Email Address
        </label>
        <input
          className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-white/10 bg-white/50 dark:bg-white/[0.015] text-slate-900 dark:text-white placeholder-slate-450 dark:placeholder-slate-500 focus:outline-none focus:border-cyan-400 dark:focus:border-cyan-400 text-sm shadow-tiny transition-all"
          type="text"
          placeholder="your@mail.com"
        />
      </div>
      <div className="flex flex-col">
        <label
          className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-2 uppercase tracking-wide"
          htmlFor=""
        >
          Your Message
        </label>
        <textarea
          className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-white/10 bg-white/50 dark:bg-white/[0.015] text-slate-900 dark:text-white placeholder-slate-450 dark:placeholder-slate-500 focus:outline-none focus:border-cyan-400 dark:focus:border-cyan-400 text-sm shadow-tiny resize-none transition-all"
          id="message"
          rows={4}
          placeholder="Hi there! Let's talk about your next project"
        ></textarea>
      </div>
      <button className="cursor-pointer w-full inline-flex items-center justify-center gap-2 rounded-xl bg-white py-3 text-black font-semibold shadow-md hover:shadow-lg transition">
        <Send strokeWidth={1} className="w-4 h-4" />
        Transmit Message
      </button>
    </div>
  );
}

export default ContactForme;
