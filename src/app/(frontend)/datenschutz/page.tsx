"use client";
import Link from "next/link";
import React, { useEffect, useState, Suspense } from "react";
import Form from "@/components/Form";

const PageContent = () => {
  const [content, setContent] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async()=>{
      await fetch(
        "https://app.cockpit.legal/api/cockpit/resources/legaldocumentshare/222c88507bce88f742614e789df06254/document/render/html?language=de"
      )
        .then((result) => result.text())
        .then((content) => {
          setContent(content);
          setLoading(false);
        });
    }
    fetchData()
  }, []);

  if(loading){
    return(
      <div className="flex w-full py-10 items-center justify-center text-5xl font-bold">Loading...</div>
    )
  }

  return (
    <>
      <section className="max-w-[800px] mx-auto w-full  grid grid-cols-1 gap-6 p-12">
        <div id="lc-text" dangerouslySetInnerHTML={{ __html: content }} />
        <noscript>
          Sie können diesen Rechtstext nicht sehen, weil Sie JavaScript
          deaktiviert haben. Folgen Sie bitte diesem{" "}
          <Link
            target="_blank"
            href="https://app.cockpit.legal/api/cockpit/resources/legaldocumentshare/222c88507bce88f742614e789df06254/document/render/html?language=de"
            rel="noopener noreferrer"
          >
            Link
          </Link>
          , um den Rechtstext anzuzeigen.
        </noscript>
      </section>
      <Form />
    </>
  );
};

const Page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PageContent />
    </Suspense>
  );
};

export default Page;
