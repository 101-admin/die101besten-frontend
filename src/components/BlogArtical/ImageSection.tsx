import Image from "next/image";

export default function ImageSection() {
  return (
    <div className=" font-gte">
      <div className="max-w-[1440px] w-full mx-auto">
        {sections.map((section) => (
          <div key={section.id} className="max-w-[1440px] w-full mx-auto ">
            <div className="flex flex-col lg:flex-row px-4 sm:px-8 md:px-16 lg:gap-12 gap-8 sm:gap-12 md: py-8 mb-12">
              {/* Image */}
              <div className="w-full lg:w-[632px] ">
                <Image
                  src={section.image}
                  alt={section.alt}
                  width={632}
                  height={576}
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>

              {/* Text */}
              <div className="flex-1 lg:max-w-[632px]">
                <p className="text-[18px] sm:text-[20px] font-[350] leading-[22px] sm:leading-[24px]">
                  {section.rightContent}
                </p>
              </div>
            </div>

            {/* Bottom text */}
            <div className=" px-4 sm:px-8 md:px-16 lg:px-24 font-[350] py-8 sm:py-10 md:py-14 lg:py-20">
              <p className="text-[18px] sm:text-[20px] leading-[22px] sm:leading-[24px] max-w-3xl mx-auto">
                {section.bottomContent}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const sections = [
  {
    id: 1,
    image: "/blog artical/image(3).svg",
    alt: "Hotel award ceremony",
    rightContent: (
      <>
        »Wir freuen uns, dass wir mit unserem Ranking erstmals die besten Hotels
        im Alpenraum prämieren und für die hoch aktuelle Podiumsdiskussion so
        herausragende Persönlichkeiten gewinnen konnten«, sagt Carsten K. Rath,
        Gründer und Spiritus Rector der »101 Besten«.
        <span className="font-bold bg-gradient-to-r from-[#B65033] to-[#F49E6E] bg-clip-text text-transparent">
          Carsten K. Rath
        </span>{" "}
        , selbst erfolgreicher Hotelier, ist heute Autor und Kolumnist für
        Capital, NTV, Bunte.de, Travelnews und Ihr hotelrevue. Das Ranking hat
        er zusammen mit seinem Sohn{" "}
        <span className="font-bold bg-gradient-to-r from-[#B65033] to-[#F49E6E] bg-clip-text text-transparent">
          David Rath
        </span>{" "}
        gegründet. Es ist im deutschsprachigen Raum einzigartig, sein Kuratorium
        vereint höchste Sachkompetenz. Um eine größtmögliche Objektivität zu
        erreichen, setzen auch »
        <span className="font-bold bg-gradient-to-r from-[#B65033] to-[#F49E6E] bg-clip-text text-transparent">
          Die 101 besten Hotels Schweiz, Österreich, Südtirol und Deutschland
        </span>{" "}
        « auf drei Säulen: Die erste besteht aus den Stimmen der Gäste durch
        Einbeziehung der Bewertungsportale TripAdvisor und Booking.com. Die
        zweite Säule berücksichtigt die Auszeichnungen, die Hotels von
        renommierten Publikationen erhalten haben, etwa von Forbes und dem
        Hornstein-Ranking, dessen Grundlage Gault Millau und Guide Michelin
        bilden. Zur dritten Säule zählen die Urteile ausgewiesener Experten, die
        die Häuser vor Ort in Augenschein nehmen und nach den »101 Besten«
        Kriterien Hotels testen und bewerten. Die Daten aller drei Säulen werden
        von der Internationalen Hochschule München (IU) zusammengeführt.
        <span className="font-bold bg-gradient-to-r from-[#B65033] to-[#F49E6E] bg-clip-text text-transparent">
          Professorin Dr. Annegret Wittmann-Wurzer
        </span>{" "}
        und Gründungsdirektor Professor
        <span className="font-bold bg-gradient-to-r from-[#B65033] to-[#F49E6E] bg-clip-text text-transparent">
          Dr. Peter Thuy
        </span>{" "}
        setzen dafür auf wissenschaftliche Methoden und ein differenziertes
        System entwickelt — unabhängig, transparent und nachvollziehbar.
      </>
    ),
    bottomContent: (
      <>
        Partnerhotels der großen Veranstaltung in Zürich sind
        <span className="font-bold bg-gradient-to-r from-[#B65033] to-[#F49E6E] bg-clip-text text-transparent">
          The Dolder Grand, Baur au Lac, Mandarin Oriental Savoy Zurich, La
          Réserve Eden au Lac
        </span>{" "}
        sowie die Häuser von The Living Circle:
        <span className="font-bold bg-gradient-to-r from-[#B65033] to-[#F49E6E] bg-clip-text text-transparent">
          Hotel Storchen Zürich, Alex Lake Zürich, das Widder Hotel Zürich.
        </span>{" "}
        <br />
        <br />
        Für weitere Informationen, Interview-Wünsche und Fotos sind wir gerne
        für Sie da. Melden Sie sich bitte ebenfalls, wenn Sie an der
        Veranstaltung teilnehmen möchten.
      </>
    ),
  },
];
