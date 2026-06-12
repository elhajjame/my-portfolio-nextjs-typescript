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
        <footer className="footer container">
          <p>© 2026 Mehdi</p>
        </footer>
      </body>
    </html>
  );
}

export default rootLayout;
