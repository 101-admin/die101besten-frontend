// import { SanityLive } from '@/sanity/lib/live';
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { NavbarApi } from "@/lib";
import { FooterApi } from "@/lib";

export default async function FrontendLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navbar = await NavbarApi.getNavbar();
  const footer = await FooterApi.getFooter();

  // console.log(navbar, "navbar");
  return (
    <>
      <Navbar navbar={navbar} />
      {children}

      {/* <SanityLive /> */}
      <Footer footer={footer} />
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
    </>
  );
}
