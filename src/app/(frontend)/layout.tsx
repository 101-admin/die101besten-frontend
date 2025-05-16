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
    </>
  );
}
