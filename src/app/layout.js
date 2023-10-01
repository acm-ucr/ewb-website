/* eslint-disable new-cap */
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Urbanist } from "next/font/google";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata = {
  title: "EWB Website",
  description: "Engineers Without Borders Official Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
        <Navigation />
        <div className="w-full flex flex-col items-center justify-center">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
