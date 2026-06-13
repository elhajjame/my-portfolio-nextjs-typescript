import "./globals.css";

import Navigation from "./_components/Navigation";
export const metadata = {
  title: {
    template: "%s Mehdi El Hajjame",
    default: "Mehdi El Hajjame",
  },
};
function rootLayout({ children }) {
  return (
    <html lang="eng">
      <body>
        <Navigation />
        <main className="main container py-8">{children}</main>
        <footer className="w-full border-t border-slate-200/50 dark:border-slate-800/40 bg-white/40 dark:bg-[#090a0f]/50 py-8">
          <p className="ml-10 text-xs text-slate-500 font-medium">
            © 2026 Mehdi El-Hajjame.
          </p>
        </footer>
      </body>
    </html>
  );
}

export default rootLayout;
