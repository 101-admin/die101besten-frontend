// import { POST_QUERYResult } from "@/sanity/types";

type CategoriesProps = {
  categories: any;
};

export function Categories({ categories }: CategoriesProps) {
  if (!categories) return null;

  return categories.map((category: any) => (
    <span
      key={category._id}
      className="bg-cyan-50 rounded-full px-2 py-1 leading-none whitespace-nowrap text-sm font-semibold text-cyan-700"
    >
      {category.title}
    </span>
  ));
}
