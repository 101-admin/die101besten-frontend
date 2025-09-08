import React from "react";
import { HotelsApi } from "@/lib/services";
import { DEFAULT_EDITION, DEFAULT_LANGUAGE } from "@/lib";
import ZeroHotels from "@/components/SearchResult/ZeroHotels";
import Index from "@/components/SearchResult/index";
import Form from "@/components/Form";

interface PageProps {
  searchParams?: any
} 

const Page = async ({ searchParams }: PageProps) => {
  const Params = await searchParams;
  const data = await HotelsApi.getAllSearchHotels({
    edition: DEFAULT_EDITION,
    language: DEFAULT_LANGUAGE,
    search: Params?.search,
  });

  if (data?.hotels?.length === 0) {
    return (
      <>
        <ZeroHotels />
        <Form />
      </>
    );
  }

  return (
    <>
      <Index hotels={data?.hotels} />
      <Form />
    </>
  );
};

export default Page;
