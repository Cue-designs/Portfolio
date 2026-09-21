import "./globals.css";
import {
  Alex_Brush,
  Bricolage_Grotesque,
  Plus_Jakarta_Sans,
} from "next/font/google";
import type { Metadata } from "next";

const alexBrush = Alex_Brush({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-alex-brush",
});

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage-grotesque",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
});

export const metadata: Metadata = {
  title: "Emmanuel Cajetan | Portfolio",
  description: "Portfolio website built with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${alexBrush.variable} ${bricolageGrotesque.variable} ${plusJakartaSans.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
