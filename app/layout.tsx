import "./globals.css";
import { gsap } from "gsap/gsap-core";

gsap.registerPlugin();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
