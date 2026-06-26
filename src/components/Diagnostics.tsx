"use client";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import Container from "./Container";

interface DictProps {
  heading: string;
  scan: string;
  price_offer: string;
  benefit: string;
}

export default function Diagnostics({
  dict,
  lang,
}: {
  dict: DictProps;
  lang: string;
}) {
  const scrollToId = useSmoothScroll();
  const isEs = lang === "es";

  return (
    <section className="bg-black text-white py-24 md:py-32">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-[1px] bg-[#C5A059]" />
              <span className="text-[10px] uppercase tracking-[0.5em] text-[#C5A059] font-medium">
                {isEs ? "Estética de Élite" : "Elite Aesthetic Care"}
              </span>
            </div>

            <h2 className="text-4xl md:text-6xl font-serif leading-[1.1]">
              {isEs ? "La Ciencia de la" : "The Science of"} <br />
              <span className="italic font-light text-white/80">
                {isEs ? "Perfección Estética" : "Aesthetic Perfection"}
              </span>
            </h2>

            <div className="space-y-6">
              <p className="text-gray-400 text-[15px] leading-relaxed max-w-md font-light">
                {isEs
                  ? "Dirigido por la Dra. Claire Kim, nuestro equipo de especialistas combina la precisión clínica con el diseño artesanal para esculpir sonrisas impecables, translúcidas y de aspecto natural con carillas de porcelana."
                  : "Led by Dr. Claire Kim, our specialist team blends clinical precision with artisan design to sculpt flawless, translucent, and natural-looking porcelain veneer smile transformations."}
              </p>

              <ul className="text-[12px] uppercase tracking-widest text-[#C5A059] space-y-2 opacity-80">
                <li>
                  —{" "}
                  {isEs
                    ? "Especialista en Odontología Estética de Lujo"
                    : "Specialist in Luxury Cosmetic Dentistry"}
                </li>
                <li>
                  —{" "}
                  {isEs
                    ? "Maestra en Porcelana y Microtextura"
                    : "Master of Porcelain Transparency & Micro-texture"}
                </li>
                <li>
                  —{" "}
                  {isEs
                    ? "Experta en Diseño de Sonrisa Avanzado"
                    : "Advanced Smile Design & Veneers Expert"}
                </li>
              </ul>
            </div>

            <div className="pt-8">
              <button
                onClick={() => scrollToId("leadForm")}
                className="px-10 py-4 border border-[#C5A059] text-[#C5A059] text-[11px] uppercase tracking-[0.4em] hover:bg-[#C5A059] hover:text-black transition-all duration-700"
              >
                {isEs
                  ? "SOLICITAR EVALUACIÓN DE DISEÑO"
                  : "REQUEST SMILE DESIGN EVALUATION"}
              </button>
            </div>
          </div>

          <div className="relative aspect-square bg-black border border-white/5 flex flex-col items-center justify-center p-12 text-center group overflow-hidden">
            {/* Remember to save Dr. Claire Kim's image as dr-claire-kim.jpg inside your /public folder */}
            <img
              src="./Dr-Kim.png"
              alt="Dr. Claire Kim"
              className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 group-hover:opacity-70 group-hover:scale-105 transition-all duration-[2000ms] ease-out"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
            
            <div className="relative z-20 space-y-4">
              <a 
                href="https://tribecadentalstudio.com/team/dr-claire-kim/" 
                target="_blank"
                className="inline-block group-hover:text-white transition-colors"
              >
                <h4 className="text-xl font-serif tracking-widest uppercase text-[#C5A059] border-b border-transparent hover:border-[#C5A059] transition-all">
                  Dr. Claire Kim
                </h4>
              </a>
              <p className="text-[15px] text-white/60 italic font-light max-w-[280px]">
                {isEs
                  ? "Reconocida por su excelencia artística en la arquitectura y personalización de sonrisas de alta gama en Manhattan."
                  : "Renowned for artistic excellence in premium smile architecture and bespoke transformations across Manhattan."}
              </p>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-[#C5A059] scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-left z-30" />
          </div>
        </div>
      </Container>
    </section>
  );
}