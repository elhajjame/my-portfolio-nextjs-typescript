import "./globals.css";

import Navigation from "./components/Navigation";
function rootLayout({ children }) {
  return (
    <html lang="eng">
      <body>
        <Navigation />
        <main className="main container">{children}</main>
        <footer className="footer container">
          <p>© 2026 Mehdi</p>
        </footer>
      </body>
    </html>
  );
}

export default rootLayout;
