import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Instrument_Serif } from "next/font/google";
import "./globals.css";
const sans = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-sans" });
const serif = Instrument_Serif({ subsets: ["latin"], weight: "400", style: "italic", variable: "--font-serif" });
export const metadata: Metadata = {
  title: "Anthony Kipkoech | Computer Security & Forensics Student",
  description: "Portfolio of Anthony Kipkoech: securing systems, investigating digital evidence and building practical solutions.",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${sans.variable} ${serif.variable}`}>
    <head>
    <script dangerouslySetInnerHTML={{ __html: `try{var t=localStorage.getItem("theme");if(t)document.documentElement.dataset.theme=t}catch(e){}` }} />
    </head>
    <body className="font-sans">
      {children}
    </body>
    </html>
  );
}
