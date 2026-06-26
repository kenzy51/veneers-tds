"use client";
import { useState } from "react";
import Container from "./Container";
import { motion, AnimatePresence } from "framer-motion";

interface FAQProps {
  lang: string;
}

export default function FAQ({ lang }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const isEs = lang === "es";

  const faqs = [
    {
      q: isEs
        ? "¿Es necesario desgastar mucho mis dientes naturales para colocar las carillas?"
        : "Will my natural teeth need to be heavily shaved down?",
      a: isEs
        ? "No. En Tribeca Dental Studio utilizamos técnicas de preparación mínimamente invasivas y ultra-conservadoras. En muchos casos, solo se retira una capa milimétrica de esmalte (similar al grosor de una lente de contacto) para garantizar que sus carillas luzcan completamente naturales y alineadas sin comprometer la salud del diente."
        : "No. At Tribeca Dental Studio, we practice ultra-conservative, micro-preparation techniques. In many cases, only a fraction of a millimeter of enamel (about the thickness of a contact lens) is altered to ensure your veneers sit seamlessly and look perfectly natural without compromising your underlying tooth health.",
    },
    {
      q: isEs 
        ? "¿Cuánto tiempo duran las carillas de porcelana?" 
        : "How long do porcelain veneers last?",
      a: isEs
        ? "Con una higiene oral adecuada y visitas de mantenimiento regulares, las carillas de porcelana de alta calidad pueden durar entre 15 y 20 años, o incluso más. La porcelana premium que utilizamos es altamente resistente y estructuralmente fuerte."
        : "With excellent oral hygiene and regular professional cleanings, premium porcelain veneers typically last between 15 to 20 years, or even longer. The master-crafted porcelain we utilize is exceptionally durable and built to withstand daily wear seamlessly.",
    },
    {
      q: isEs
        ? "¿Las carillas se manchan con el café, el té o el vino tinto?"
        : "Do porcelain veneers stain over time from coffee or wine?",
      a: isEs
        ? "A diferencia del esmalte natural o de las resinas compuestas, la porcelana dental premium no es porosa. Esto significa que es completamente resistente a las manchas causadas por alimentos, café, té o vino, manteniendo su brillo y blancura impecable a lo largo de los años."
        : "Unlike natural tooth enamel or composite bonding, high-grade dental porcelain is non-porous. This means it is entirely stain-resistant against dark liquids like coffee, tea, and red wine, retaining its flawless luster and brilliant shade permanently.",
    },
    {
      q: isEs
        ? "¿Puedo elegir qué tan blancas y naturales se verán mis carillas?"
        : "Can I choose how white and natural my new smile will look?",
      a: isEs
        ? "Por supuesto. A través de nuestro proceso de Diseño Digital de Sonrisa, usted trabaja directamente con nuestros expertos para seleccionar la forma, alineación y el tono exacto de blanco. Diseñamos carillas con la translucidez y microtextura de los dientes reales para evitar un aspecto artificial."
        : "Absolutely. Through our Digital Smile Design process, you co-design your smile alongside our clinicians, selecting the ideal shape, symmetry, and precise shade. We focus heavily on incorporating natural translucency and surface anatomy so your teeth look beautifully radiant, never artificial.",
    },
  ];

  return (
    <section className="bg-white pb-32 md:pb-20 md:pt-20" id="faq">
      <Container>
        <div className="flex flex-col md:flex-row gap-16 md:gap-24">
          <div className="md:w-1/3">
            <h2 className="text-4xl font-serif sticky top-24 text-[#1A1F2B]">
              {isEs ? "Maestría" : "Aesthetic"} <br />
              <span className="italic font-light text-[#C5A059]">
                {isEs ? "Estética." : "Mastery."}
              </span>
            </h2>
          </div>

          <div className="md:w-2/3 border-t border-black/5">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-black/5">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full py-8 flex justify-between items-center text-left group"
                >
                  <span className="text-[11px] uppercase tracking-[0.3em] text-black/60 group-hover:text-[#C5A059] transition-colors duration-500 font-bold">
                    {faq.q}
                  </span>
                  <span
                    className={`text-xl font-light text-[#C5A059] transition-transform duration-500 ${openIndex === i ? "rotate-45" : ""}`}
                  >
                    +
                  </span>
                </button>

                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        duration: 0.5,
                        ease: [0.04, 0.62, 0.23, 0.98],
                      }}
                      className="overflow-hidden"
                    >
                      <p className="pb-8 text-slate-500 font-light leading-relaxed italic max-w-xl text-sm">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}