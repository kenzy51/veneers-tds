"use client";
import Container from "./Container";
import { motion } from "framer-motion";

interface AboutProps {
  lang: string;
}

export default function About({ lang }: AboutProps) {
  const isEs = lang === "es";

  return (
    <section className="bg-white w-full overflow-hidden flex flex-col items-center py-20 md:py-32">
      <Container>
        {/* Main Brand Hook */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-4 md:gap-24 mb-24">
          <div className="w-full md:w-1/2">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-[9px] uppercase tracking-[0.6em] text-[#C5A059] font-bold block mb-6 md:mb-12"
            >
              {isEs ? "La Visión Cosmética" : "The Cosmetic Vision"}
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              className="text-4xl md:text-7xl lg:text-8xl font-serif leading-[1.1] md:leading-[0.95] text-[#1A1A1A] tracking-tight"
            >
              {isEs ? "Donde el Arte" : "Where Artistry"} <br />
              <span className="italic font-extralight text-gray-400">
                {isEs ? "Crea la Simetría." : "Meets Symmetry."}
              </span>
            </motion.h2>
          </div>

          <div className="w-full md:w-[45%]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.2 }}
            >
              <p className="text-[#4A4A4A] font-light leading-relaxed tracking-wide text-base md:text-xl font-sans italic mb-8">
                {isEs ? (
                  <>
                    <a href="https://tribecadentalstudio.com/team/dr-nina-izhaky/" target="_blank" className="hover:text-[#C5A059] transition-colors">
                      La Dra. Nina Izhaky
                    </a>
                    &nbsp;
                    redefine la odontología estética mediante el
                    diseño de{" "}
                    <span className="text-black font-normal not-italic underline decoration-black/20 hover:decoration-[#C5A059] transition-all cursor-pointer">
                      <a
                        href="https://tribecadentalstudio.com/services/porcelain-veneers/"
                        target="_blank"
                      >
                        Carillas de Porcelana a la Medida
                      </a>
                    </span>{" "}
                    — un enfoque artesanal que equilibra las proporciones faciales, 
                    el tono de la piel y la translucidez natural para crear una sonrisa 
                    verdaderamente única e impecable.
                  </>
                ) : (
                  <>
                    <a href="https://tribecadentalstudio.com/team/dr-nina-izhaky/" target="_blank" className="hover:text-[#C5A059] transition-colors">
                      Dr. Nina Izhaky
                    </a>
                    &nbsp;
                    redefines cosmetic dentistry through custom{" "}
                    <span className="text-black font-normal not-italic underline decoration-black/20 hover:decoration-[#C5A059] transition-all cursor-pointer">
                      <a
                        href="https://tribecadentalstudio.com/services/porcelain-veneers/"
                        target="_blank"
                      >
                        Bespoke Porcelain Veneers
                      </a>
                    </span>{" "}
                    — an artisan approach that balances facial proportions, skin tone, 
                    and natural translucency to design a flawless smile uniquely yours.
                  </>
                )}
              </p>
            </motion.div>
          </div>
        </div>

        {/* Three Pillars Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-black/5 pt-16">
          {/* Pillar 1: Master Ceramic Artists */}
          <div className="space-y-4">
            <h4 className="font-serif text-xl italic text-[#1A1A1A]">
              {isEs ? "Maestros Ceramistas" : "Master Ceramic Artists"}
            </h4>
            <p className="text-sm text-gray-500 font-light leading-relaxed">
              {isEs ? (
                <>
                  En Tribeca Dental Studio, sus carillas son hechas a mano por maestros 
                  ceramistas líderes en la industria. Cada capa recrea el brillo, 
                  la textura y los bordes translúcidos de los dientes naturales.
                </>
              ) : (
                <>
                  At Tribeca Dental Studio, your veneers are handcrafted by industry-leading 
                  master ceramists. Every layer mimics the depth, micro-texture, and 
                  light-reflecting qualities of pristine natural enamel.
                </>
              )}
            </p>
          </div>

          {/* Pillar 2: Ultra-Conservative Prep */}
          <div className="space-y-4">
            <h4 className="font-serif text-xl italic text-[#1A1A1A]">
              {isEs ? "Preparación Mínima" : "Ultra-Conservative Prep"}
            </h4>
            <p className="text-sm text-gray-500 font-light leading-relaxed">
              {isEs
                ? "Priorizamos la salud de sus dientes. Nuestras técnicas de preparación mínima de vanguardia preservan la mayor cantidad de estructura dental natural posible, garantizando comodidad y máxima durabilidad."
                : "We prioritize your underlying dental health. Our advanced, ultra-thin preparation techniques preserve maximum natural tooth structure, ensuring a completely seamless fit and long-term structural integrity."}
            </p>
          </div>

          {/* Pillar 3: Digital Smile Design */}
          <div className="space-y-4">
            <h4 className="font-serif text-xl italic text-[#1A1A1A]">
              <a href="https://tribecadentalstudio.com/services/cosmetic-dentistry/" target="_blank" className="hover:text-[#C5A059] transition-colors">
                {isEs ? "Diseño Digital de Sonrisa" : "Digital Smile Design"}
              </a>
            </h4>
            <p className="text-sm text-gray-500 font-light leading-relaxed">
              {isEs ? (
                <>
                  Eliminamos las sorpresas. Utilizando tecnología de{" "}
                  <a
                    href="https://tribecadentalstudio.com/services/cosmetic-dentistry/"
                    target="_blank"
                    className="text-black font-normal border-b border-black/10 hover:border-[#C5A059] hover:text-[#C5A059] transition-all duration-500"
                  >
                    Diseño Digital
                  </a>{" "}
                  de vanguardia, usted podrá previsualizar, probar y perfeccionar su nueva sonrisa tridimensional antes de fabricar sus carillas permanentes.
                </>
              ) : (
                <>
                  We take the guesswork out of your makeover. Using elite{" "}
                  <a
                    href="https://tribecadentalstudio.com/services/cosmetic-dentistry/"
                    target="_blank"
                    className="text-black font-normal border-b border-black/10 hover:border-[#C5A059] hover:text-[#C5A059] transition-all duration-500"
                  >
                    Digital Smile Design
                  </a>{" "}
                  software, you can visualize, test-drive, and preview your flawless new smile in 3D before your permanent veneers are even crafted.
                </>
              )}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}