import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.scss";

const avenier = localFont({
  src: [
    {
      path: "../assets/fonts/AvenirNext-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../assets/fonts/AvenirNext-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/AvenirNext-Regular.otf",
      weight: "400",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "Lendsqr FE Test",
  description: "This is a solution to the LendSQR Frontend assessment test",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </head>
      <body className={`${avenier.className}`}>{children}</body>
    </html>
  );
}
