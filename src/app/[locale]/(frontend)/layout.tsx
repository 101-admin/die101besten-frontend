// import { SanityLive } from '@/sanity/lib/live';
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { NavbarApi } from "@/lib";
import { FooterApi } from "@/lib";

import localFont from "next/font/local";
import { Montserrat } from "next/font/google";
import { Epilogue } from "next/font/google";
import "@/app/globals.css";

import { routing } from "@/i18n/routing";
import { setRequestLocale } from "next-intl/server";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { draftMode } from "next/headers";
import { VisualEditing } from "next-sanity";
import { DisableDraftMode } from "@/components/DisableDraftMode";
import Script from "next/script";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

const oggFont = localFont({
  src: [
    {
      path: "../../../../public/fonts/Ogg-Roman.woff2",
    },
    {
      path: "../../../../public/fonts/Ogg-Roman.woff",
    },
    {
      path: "../../../../public/fonts/Ogg-Roman.ttf",
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
      path: "../../../../public/fonts/GTEestiProText-Light.woff2",
      weight: "350",
      style: "normal",
    },
    {
      path: "../../../../public/fonts/GTEestiProText-Light.woff",
      weight: "350",
      style: "normal",
    },
    {
      path: "../../../../public/fonts/GTEestiProText-Light.ttf",
      weight: "350",
      style: "normal",
    },
    {
      path: "../../../../public/fonts/GTEestiProText-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../../../public/fonts/GTEestiProText-Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../../../public/fonts/GTEestiProText-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../../../public/fonts/GTEestiProText-ThinItalic.woff2",
      weight: "300",
      style: "italic",
    },
    {
      path: "../../../../public/fonts/GTEestiProText-ThinItalic.woff",
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

export const metadata = {
  icons: {
    icon: "/Logos/favicon-de.ico",
  },
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: any;
}>) {
  const { locale } = await params;
  console.log = () => {};

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const navbar = await NavbarApi.getNavbar(locale);
  const footer = await FooterApi.getFooter(locale);
  return (
    <html
      className={`${oggFont.variable} ${gtEestiProTextFont.variable} ${montserratFont.variable} ${epilogueFont.variable} `}
      lang={locale}
    >
      <body>
        <NextIntlClientProvider>
          <Navbar navbar={navbar} />
          {children}

          {/* <SanityLive /> */}
          <Footer footer={footer} />
          {(await draftMode()).isEnabled && (
            <>
              <VisualEditing 
                zIndex={1000}
                studioUrl={process.env.NEXT_PUBLIC_SANITY_STUDIO_URL || 'http://localhost:3333/studio'}
              />
              <DisableDraftMode />
            </>
          )}
        </NextIntlClientProvider>
        <script
          src="https://app.cockpit.legal/static/cookieconsent-v2.js?tools=Youtube,Mapbox"
          data-cc-tools="Youtube,Mapbox"
          data-cc-privacy="https://die-101-besten.de/datenschutz"
          data-cc-imprint="https://die-101-besten.de/impressum"
          data-cc-color="#000000"
          data-cc-theme="light"
          data-cc-language="browser"
          data-cc-non-eu-consent="true"
          data-cc-enable-logs="true"
        ></script>
      </body>
    </html>
  );
}

// export default async function FrontendLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   const navbar = await NavbarApi.getNavbar();
//   const footer = await FooterApi.getFooter();

//   // console.log(navbar, "navbar");
//   return (
//     <>
//       <Navbar navbar={navbar} />
//       {children}

//       {/* <SanityLive /> */}
//       <Footer footer={footer} />
//       <script
//         src="https://app.cockpit.legal/static/cookieconsent-v2.js?tools=Youtube,Mapbox"
//         data-cc-tools="Youtube,Mapbox"
//         data-cc-privacy="https://die-101-besten.de/datenschutz"
//         data-cc-imprint="https://die-101-besten.de/impressum"
//         data-cc-color="#000000"
//         data-cc-theme="light"
//         data-cc-language="browser"
//         data-cc-non-eu-consent="true"
//         data-cc-enable-logs="true"
//       ></script>
//     </>
//   );
// }
