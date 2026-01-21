import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

export const metadata = {
  title: " dealdrop Price Tracker - Never Miss a Price Drop",
  description:
    "Track product prices across e-commerce sites and get alerts on price drops",
     icons: {
    icon: "deal-drop-logo.png",
   
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
