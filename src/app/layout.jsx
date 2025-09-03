import Header from "../components/Header.jsx";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import AuthProvider from "./providers/authProviders.js";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div>
          <AuthProvider>
            <Header />
            <Toaster />
            {children}
          </AuthProvider>
        </div>

      </body>
    </html>
  );
}
