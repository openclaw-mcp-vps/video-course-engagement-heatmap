import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VideoHeat – See Exactly Where Students Drop Off",
  description: "Track video engagement second-by-second across all students. Identify boring segments, optimal video length, and re-engagement points."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="7e831ece-9992-4aa3-be66-9b208dd1a5c5"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
