import ComponentManager from "@/components/ComponentManager";
import { DEFAULT_SEO, PartnersApi } from "@/lib";
import { PartnersPage } from "@/lib/types/partners.types";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateMetadata(): Promise<Metadata> {
  const partnersPage: PartnersPage = await PartnersApi.getPartners();

  const metadata: Metadata = {
    title: partnersPage?.seo?.metaTitle || DEFAULT_SEO.metaTitle,
    description:
      partnersPage?.seo?.metaDescription || DEFAULT_SEO.metaDescription,
    keywords: partnersPage?.seo?.keywords || DEFAULT_SEO.keywords,
    openGraph: {
      title: partnersPage?.seo?.metaTitle || DEFAULT_SEO.metaTitle,
      description:
        partnersPage?.seo?.metaDescription || DEFAULT_SEO.metaDescription,
      images: partnersPage?.seo?.openGraphImage
        ? [partnersPage.seo.openGraphImage.url]
        : [],
    },
    robots: partnersPage?.seo?.noIndex ? "noindex, nofollow" : "index, follow",
  };

  if (partnersPage?.seo?.canonicalUrl) {
    metadata.alternates = {
      canonical: partnersPage.seo.canonicalUrl,
    };
  }

  return metadata;
}

const Page = async ({ searchParams }: { searchParams: any }) => {
  const partnersPage = await PartnersApi.getPartners();
  const queryParams = await searchParams;

  if (!partnersPage) {
    return notFound();
  }

  return (
    <section className="w-full flex flex-col justify-center items-center">
      <ComponentManager
        searchParams={queryParams}
        data={partnersPage?.components}
      />
    </section>
  );
};

export default Page;
