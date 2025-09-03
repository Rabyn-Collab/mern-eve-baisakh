import { HeroUIProvider } from "@heroui/react";
import "./globals.css";
import AuthProvider from "./providers/authProvider";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          {children}
        </AuthProvider>




      </body>
    </html>
  );
}
