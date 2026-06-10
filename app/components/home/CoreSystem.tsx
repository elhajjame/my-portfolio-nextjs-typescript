export default function CoreSystems() {
  return (
    <div className="w-[25em] lg:col-span-4 rounded-3xl border border-slate-200/50 dark:border-white/5 bg-white/40 dark:bg-white/[0.02] p-6 backdrop-blur-xl space-y-6 shadow-sm">
      <div className="card-header">
        <span className="card-title">CORE SYSTEMS</span>
        <span className="star-icon">✦</span>
      </div>
      <hr className="divider" />

      <div className="row">
        <span className="row-label">SYSTEM TIME</span>
        <span className="row-value">
          <span className="clock-icon">⏱</span>
          16:00:00 UTC
        </span>
      </div>

      <div className="row">
        <span className="row-label">BASE PROTOCOL</span>
        <span className="row-value">Next.js + TypeScript</span>
      </div>

      <div className="row">
        <span className="row-label">LATENCY GATE</span>
        <span className="row-value cyan">0.03 ms (Live Server)</span>
      </div>

      <div className="row">
        <span className="row-label">VIRTUAL BRIEFCASE</span>
        <span className="row-value purple">Unfolded &amp; Active</span>
      </div>

      <button className="download-btn">
        <span className="dl-icon">↓</span>
        Download Formal CV (.PDF)
      </button>
    </div>
  );
}
