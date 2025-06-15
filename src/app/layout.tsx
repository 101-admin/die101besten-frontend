import localFont from "next/font/local";
import { Montserrat } from "next/font/google";
import { Epilogue } from "next/font/google";
import "@/app/globals.css";

const oggFont = localFont({
  src: [
    {
      path: "../../public/fonts/Ogg-Roman.woff2",
    },
    {
      path: "../../public/fonts/Ogg-Roman.woff",
    },
    {
      path: "../../public/fonts/Ogg-Roman.ttf",
    },
  ],
  weight: "400",
  style: "normal",
  variable: "--font-ogg",
  adjustFontFallback: "Times New Roman",
});

const gtEestiProTextFont = localFont({
  src: [
    {
      path: "../../public/fonts/GTEestiProText-Light.woff2",
      weight: "350",
      style: "normal",
    },
    {
      path: "../../public/fonts/GTEestiProText-Light.woff",
      weight: "350",
      style: "normal",
    },
    {
      path: "../../public/fonts/GTEestiProText-Light.ttf",
      weight: "350",
      style: "normal",
    },
    {
      path: "../../public/fonts/GTEestiProText-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/GTEestiProText-Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/GTEestiProText-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/GTEestiProText-ThinItalic.woff2",
      weight: "300",
      style: "italic",
    },
    {
      path: "../../public/fonts/GTEestiProText-ThinItalic.woff",
      weight: "300",
      style: "italic",
    },
  ],
  variable: "--font-gte",
});

const montserratFont = Montserrat({
  subsets: ["latin"],
  weight: ["700", "600", "400"],
  variable: "--font-montserrat",
  fallback: ["Helvetica", "sans-serif"],
});
const epilogueFont = Epilogue({
  subsets: ["latin"],
  weight: ["700", "600", "400"],
  variable: "--font-epilogue",
  fallback: ["Helvetica", "sans-serif"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      className={`${oggFont.variable} ${gtEestiProTextFont.variable} ${montserratFont.variable} ${epilogueFont.variable} `}
      lang="en"
    >
      <body>{children}</body>
    </html>
  );
}
