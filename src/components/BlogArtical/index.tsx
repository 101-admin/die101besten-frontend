import React from "react";
import AnzeigeImage from "./AnzeigeImage";
import Form from "../Form";
// import HotelImage from "./HotelImage";
import LatestArticles from "../LatestArticles";
// import Footer from "../Footer";
import Einfach from "./Einfach";
// import ImageSection from "./ImageSection";
import type { BlogPage } from "@/lib";
import { PortableText } from "@/lib/components/PortableText";
const BlogArtical = ({ blog }: { blog?: BlogPage }) => {
  return (
    <section className="w-full flex flex-col justify-center items-center ">
      <Einfach data={blog?.heroSection} description={blog?.description} />
      {blog?.body && <PortableText value={blog?.body} />}
      <AnzeigeImage data={blog?.partnerSection} />
      <LatestArticles data={blog?.articleSection} />
      <Form />
      {/* <Footer /> */}
    </section>
  );
};

export default BlogArtical;
