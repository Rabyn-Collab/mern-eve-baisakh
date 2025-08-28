import Header from "../components/Header.jsx";
import "./globals.css";
import { Toaster } from "react-hot-toast";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div>
          <Header />
          <Toaster />
          {children}
        </div>

      </body>
    </html>
  );
}
