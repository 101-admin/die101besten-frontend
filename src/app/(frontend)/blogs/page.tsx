// import BlogDetail from "@/components/BlogDetail";
import ComponentManager from "@/components/ComponentManager";
import { BlogApi } from "@/lib/services/api/blogs.api";
export default async function page() {
  const blogPage = await BlogApi.getBlogPage();
  // console.log(blogPage, "@step 1: blog page");
  return (
    <div>
      <ComponentManager data={blogPage?.components} />
      {/* <BlogDetail /> */}
    </div>
  );
}
