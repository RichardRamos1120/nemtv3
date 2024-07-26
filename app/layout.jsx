import { Poppins } from "next/font/google";
import Sidebar from "@/components/Sidebar";
import Topnav from "@/components/Topnav";
import "./globals.css";

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export const metadata = {
  title: "NEMT App",
  description: "NEMT App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Sidebar />
        <div className="main-container">
        <Topnav />
        {children}
        </div>
        
        </body>
    </html>
  );
}
