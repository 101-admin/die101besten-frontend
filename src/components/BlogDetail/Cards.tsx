import React from "react";
import Image from "next/image";

const Cards = () => {
  const cards = [
    {
      id: 1,
      category: "BLOG KATEGORIE",
      title: "Einfach exzellent!",
      excerpt:
        "Im Zürcher Hotel The Dolder Grand werden im Mai 2024 erstmals die »101 besten Hotels Schweiz, Österreich, Südtirol und Deutschland« prämiert ...Im Zürcher Hotel The Dolder Grand werden im Mai 2024 erstmals die »101 besten Hotels Schweiz, Österreich, Südtirol und Deutschland« prämiert ...",
      image: "/blogdetail/image(1).svg",
    },
    {
      id: 2,
      category: "BLOG KATEGORIE",
      title:
        "Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.",
      excerpt:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Pellent...",
      image: "/blogdetail/image(2).svg",
    },
    {
      id: 3,
      category: "BLOG KATEGORIE",
      title:
        "Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.",
      excerpt:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Pellent...",
      image: "/blogdetail/image(2).svg",
    },
    {
      id: 4,
      category: "BLOG KATEGORIE",
      title: "Einfach exzellent!",
      excerpt:
        "Im Zürcher Hotel The Dolder Grand werden im Mai 2024 erstmals die »101 besten Hotels Schweiz, Österreich, Südtirol und Deutschland« prämiert ...Im Zürcher Hotel The Dolder Grand werden im Mai 2024 erstmals die »101 besten Hotels Schweiz, Österreich, Südtirol und Deutschland« prämiert ...",
      image: "/blogdetail/image(1).svg",
    },
  ];

  return (
    <section className="py-8 sm:py-12 lg:py-20  sm:px-6 px-5 lg:px-16">
      <div className="max-w-[1312px] mx-auto flex flex-col justify-center items-center w-full gap-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 lg:gap-12">
          {cards.map((post) => (
            <div
              key={post.id}
              className="flex flex-col relative pb-24 cursor-pointer"
            >
              {/* Image  */}
              <div className="relative w-full mb-4 sm:mb-6 rounded-lg overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={632}
                  height={552}
                  className="object-cover w-full h-auto"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* text */}
              <div className="max-w-[632px] space-y-4 sm:space-y-6">
                <div className="mb-2 sm:mb-4">
                  <div className="inline-block border border-black rounded-sm px-2 py-1">
                    <h2 className="text-[12px] font-bold leading-[12px] tracking-[0] text-center uppercase font-montserrat text-black">
                      {post.category}
                    </h2>
                  </div>
                </div>
                {/* Content */}
                <div className="flex flex-col flex-grow space-y-2">
                  <h3 className="font-ogg font-normal text-[32px] sm:text-2xl leading-[32px] sm:leading-[40px] tracking-[0]">
                    {post.title}
                  </h3>

                  <p className="font-gte text-[24px] sm:text-xl font-[350] leading-[32px] sm:leading-8 tracking-[0]">
                    {post.excerpt}
                  </p>

                  <div className="mt-4 sm:mt-8 absolute bottom-2">
                    <button className="w-full sm:w-[300px] h-[56px] sm:h-[64px] px-6 py-3 border-2 border-black text-[16px] font-bold leading-[24px] tracking-[0] uppercase font-montserrat hover:bg-black hover:text-white transition-colors duration-300">
                      WEITERLESEN
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full flex justify-start items-baseline md:justify-center ms:items-center mt-10">
          <button className="w-[300px] h-[56px] sm:h-[64px] px-6 py-3  text-white bg-black text-[16px] font-bold leading-[24px] uppercase font-montserrat">
            mehr anzeigen
          </button>
        </div>
      </div>
    </section>
  );
};

export default Cards;
