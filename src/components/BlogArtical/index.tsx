import React from "react";
import Form from "../Form";
import LatestArticles from "../LatestArticles";
import Adds from "../Adds";
import Einfach from "./Einfach";
import type { BlogPage } from "@/lib";
import { PortableText } from "@/lib/components/PortableText";
const BlogArtical = ({ blog }: { blog?: BlogPage }) => {

  return (
    <section className="w-full flex flex-col justify-center items-center ">
      {
        blog?.title && <Einfach title={blog?.title} description={blog?.description} />
      }
      {blog?.body && <PortableText value={blog?.body} />}
      {
        blog?.articleSection && <LatestArticles data={blog?.articleSection} />
      }
      {
        blog?.adds && <Adds data={blog?.adds} />
      }
      <Form />
    </section>
  );
};

export default BlogArtical;
