"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Form from "@/components/Form";

const Page = () => {
  const [content, setContent] = useState<string>("");

  useEffect(() => {
    fetch(
      "https://app.cockpit.legal/api/cockpit/resources/legaldocumentshare/222c88507bce88f742614e789df06254/document/render/html?language=de"
    )
      .then((result) => result.text())
      .then((content) => {
        setContent(content);
      });
  }, []);

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

export default Page;
