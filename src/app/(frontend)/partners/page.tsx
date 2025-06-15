import ComponentManager from "@/components/ComponentManager";
import { PartnersApi } from "@/lib";
import { notFound } from "next/navigation";

export default async function page(searchParams: any) {
  const partnersPage = await PartnersApi.getPartners();

  const searchQuery = await searchParams;
  // console.log(partnersPage, "@step 1: partners page");

  if (!partnersPage) {
    return notFound();
  }

  return (
    <section className="w-full flex flex-col justify-center items-center">
      <ComponentManager
        searchParams={searchQuery}
        data={partnersPage?.components}
      />
    </section>
  );
}
