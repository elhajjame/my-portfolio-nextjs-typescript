import Navigation from "./components/Navigation";
function rootLayout({ children }) {
  return (
    <html lang="eng">
      <body>
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  );
}

export default rootLayout;
