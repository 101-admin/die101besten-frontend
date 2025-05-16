import BlogArtical from "@/components/BlogArtical";
import { BlogApi } from "@/lib";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const page = async ({ params }: PageProps) => {
  const { slug } = await params;
  const blogPage = await BlogApi.getBlogBySlug(slug);
  // console.log(blogPage, "@step 1: blog page");
  return (
    <div>
      <BlogArtical blog={blogPage} />
    </div>
  );
};

export default page;
