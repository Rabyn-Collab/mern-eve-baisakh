import Header from "../components/Header.jsx";
import "./globals.css";



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div>
          <Header />
          {children}
        </div>

      </body>
    </html>
  );
}
