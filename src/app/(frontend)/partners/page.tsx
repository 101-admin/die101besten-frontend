import ComponentManager from "@/components/ComponentManager";
import { PartnersApi } from "@/lib";

export default async function page() {
  const partnersPage = await PartnersApi.getPartners();
  // console.log(partnersPage, "@step 1: partners page");
  return (
    <section className="w-full flex flex-col justify-center items-center">
      <ComponentManager data={partnersPage?.components} />
    </section>
  );
}
