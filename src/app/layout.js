import 'bootstrap/dist/css/bootstrap.min.css';
import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

import BootstrpClient from '@/components/BootstrapClient';

const roboto = Roboto({ 
  subsets: ["latin"],
  weight:'700'
 });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className={roboto.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <BootstrpClient />
      </body>
    </html>
  );
}