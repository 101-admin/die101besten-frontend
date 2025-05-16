import Image from "next/image";

export default function HotelImage() {
  return (
    <div className=" font-gte">
      {sections.map((section) => (
        <div key={section.id} className="max-w-[1440px] mx-auto">
          {/* Image */}
          <div className="mb-6">
            <Image
              src={section.image}
              alt={section.alt}
              width={1440}
              height={600}
              className="w-full h-auto"
            />
          </div>

          {section.layout === "two-column" ? (
            <div className="flex flex-col lg:flex-row px-4 sm:px-8 md:px-16 lg:px-24 py-8 sm:py-16 md:py-24 lg:py-32 gap-8 lg:gap-16">
              {/* Left column */}
              <div className="lg:max-w-[640px]">
                <p className="text-[18px] font-[350] sm:text-[20px] leading-[22px] sm:leading-[24px] mb-6">
                  {section.leftContent}
                </p>
              </div>
              {/* Right column */}
              <div className="lg:max-w-[640px]">
                <p className="text-[18px] font-[350] sm:text-[20px] leading-[22px] sm:leading-[24px]">
                  {section.rightContent}
                </p>
              </div>
            </div>
          ) : (
            <div className="px-4 sm:px-8 md:px-16 lg:px-24 py-8 sm:py-16 md:py-24 lg:py-32">
              <p className="text-[18px] font-[350] sm:text-[20px] leading-[22px] sm:leading-[24px] max-w-3xl mx-auto text-center">
                {section.content}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
const sections = [
  {
    id: 1,
    image: "/blog artical/image.svg",
    alt: "Hotel Award",
    layout: "two-column",
    leftContent: (
      <>
        <span className="font-bold bg-gradient-to-r from-[#B65033] to-[#F49E6E] bg-clip-text text-transparent">
          Zürich, 26. März 2024
        </span>{" "}
        – Es ist die bedeutendste Auszeichnung in der deutschsprachigen
        Hotellerie. Nachdem bereits zum vierten Mal die»{" "}
        <span className="font-bold bg-gradient-to-r from-[#B65033] to-[#F49E6E] bg-clip-text text-transparent">
          101 Besten Hotels Deutschlands
        </span>{" "}
        «gekürt wurden, präsentiert das renommierte Ranking nun erstmals die
        »101 besten Hotels Schweiz, Österreich, Südtirol und Deutschland« . Die
        Auszeichnung ist der einzige unabhängige Hotel-Award, sie wird
        inzwischen als »Guide Michelin der Hotellerie« bezeichnet und gibt
        Lesern und Urlaubern Orientierung in einer immer unübersichtlicheren
        Welt von Hotels und Resorts.
      </>
    ),
    rightContent: (
      <>
        Die Gewinner werden im Rahmen der »101 Soirée« am 5. Mai im Zürcher
        Hotel{" "}
        <span className="font-bold bg-gradient-to-r from-[#B65033] to-[#F49E6E] bg-clip-text text-transparent">
          The Dolder Grand
        </span>{" "}
        bekannt gegeben — zahlreiche Prominente werden dabei sein, unter anderen{" "}
        <span className="font-bold bg-gradient-to-r from-[#B65033] to-[#F49E6E] bg-clip-text text-transparent">
          Andreas Caminada
        </span>
        ,{" "}
        <span className="font-bold bg-gradient-to-r from-[#B65033] to-[#F49E6E] bg-clip-text text-transparent">
          Christian Joff Jenny
        </span>
        , Gründer des Jazz-Festivals St. Moritz,{" "}
        <span className="font-bold bg-gradient-to-r from-[#B65033] to-[#F49E6E] bg-clip-text text-transparent">
          David Puentez
        </span>
        , DJ und Musikproduzent, Moderator{" "}
        <span className="font-bold bg-gradient-to-r from-[#B65033] to-[#F49E6E] bg-clip-text text-transparent">
          Kai Pflaume
        </span>{" "}
        und der ehemalige Tennisspieler und Olympiasieger{" "}
        <span className="font-bold bg-gradient-to-r from-[#B65033] to-[#F49E6E] bg-clip-text text-transparent">
          Michael Stich
        </span>
        . Moderiert wird die Veranstaltung von der Schweizer Mediengröße{" "}
        <span className="font-bold bg-gradient-to-r from-[#B65033] to-[#F49E6E] bg-clip-text text-transparent">
          Christa Rigozzi
        </span>
        . Kulinarisch führt{" "}
        <span className="font-bold bg-gradient-to-r from-[#B65033] to-[#F49E6E] bg-clip-text text-transparent">
          Heiko Nieder
        </span>{" "}
        durch den Abend.
      </>
    ),
  },
  {
    id: 2,
    image: "/blog artical/image(1).svg",
    alt: "101 Executive Summit",
    layout: "single-column", // Added layout type
    content: (
      <>
        Ein weiteres Highlight der Veranstaltung wird der »{" "}
        <span className="font-bold bg-gradient-to-r from-[#B65033] to-[#F49E6E] bg-clip-text text-transparent">
          101 Executive Summit
        </span>{" "}
        « sein: Im{" "}
        <span className="font-bold bg-gradient-to-r from-[#B65033] to-[#F49E6E] bg-clip-text text-transparent">
          Hotel Baur au Lac
        </span>{" "}
        diskutieren CEOs der besten Hotelgesellschaften im Alpenraum über die
        Zukunft der Gastronomie in der Top-Hotellerie. Zu den Teilnehmern auf
        dem Podium zählen{" "}
        <span className="font-bold bg-gradient-to-r from-[#B65033] to-[#F49E6E] bg-clip-text text-transparent">
          Marco Zanolari
        </span>{" "}
        (The Living Circle),{" "}
        <span className="font-bold bg-gradient-to-r from-[#B65033] to-[#F49E6E] bg-clip-text text-transparent">
          Matthias Winkler
        </span>{" "}
        (Sacher Hotels), Urs Langenegger (Hospitality Vision Lake Lucern),{" "}
        <span className="font-bold bg-gradient-to-r from-[#B65033] to-[#F49E6E] bg-clip-text text-transparent">
          Dr. Andreas Sanoner
        </span>{" "}
        (ADLER Spa Resorts & Lodges),{" "}
        <span className="font-bold bg-gradient-to-r from-[#B65033] to-[#F49E6E] bg-clip-text text-transparent">
          Frédéric Boson
        </span>{" "}
        (Swiss Hotel Properties) und{" "}
        <span className="font-bold bg-gradient-to-r from-[#B65033] to-[#F49E6E] bg-clip-text text-transparent">
          Jörg Böckeler
        </span>{" "}
        (Hommage).
      </>
    ),
  },
];
