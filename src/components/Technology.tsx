"use client";
import Container from "./Container";
import { motion } from "framer-motion";

interface TechnologyProps {
  lang: string;
}

export default function Technology({ lang }: TechnologyProps) {
  const isEs = lang === "es";

  const features = [
    {
      title: isEs ? "Mapeo 3D" : "3D Precision",
      description: isEs 
        ? "Utilizamos escaneos CBCT de última generación para mapear su estructura ósea con precisión milimétrica antes de la cirugía." 
        : "We utilize state-of-the-art CBCT scans to map your bone structure with millimeter precision before surgery even begins.",
      step: "01"
    },
    {
      title: isEs ? "Cualquier Caso" : "Total Versatility",
      description: isEs 
        ? "Desde un solo diente hasta restauraciones All-on-X y Zygomatic. Resolvemos casos complejos que otros dentistas rechazan." 
        : "From single tooth replacement to All-on-X and Zygomatic restorations. We solve complex cases that other dentists turn away.",
      step: "02"
    },
    {
      title: isEs ? "Carga Inmediata" : "New Smile Today",
      description: isEs 
        ? "Nuestra tecnología de carga inmediata permite que muchos pacientes salgan con una sonrisa funcional el mismo día." 
        : "Our immediate loading technology allows many patients to walk out with a functional, beautiful smile on the very same day.",
      step: "03"
    }
  ];

  return (
    <section className="bg-black text-white py-24 md:py-32 w-full overflow-hidden" id="technology">
      <Container>
        {/* Added a Section Header to anchor the versatility message */}
        <div className="mb-20 text-center md:text-left">
           <span className="text-[10px] uppercase tracking-[0.8em] text-[#C5A059] block mb-4">
              {isEs ? "Excelencia Quirúrgica" : "Surgical Excellence"}
            </span>
            <h2 className="text-4xl md:text-6xl font-serif text-white">
              {isEs ? "Tecnología sin" : "Technology without"} <br />
              <span className="italic font-light text-white/50">{isEs ? "Límites." : "Boundaries."}</span>
            </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-16 items-start">
          
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: index * 0.2 }}
              className={`flex flex-col border-l border-[#C5A059]/30 pl-8 pb-12 
                ${index === 1 ? 'md:mt-32' : 'mt-0'}`}
            >
              <span className="text-[14px] tracking-[0.6em] text-[#C5A059]/50 uppercase mb-4">
                {isEs ? "Capacidad" : "Capability"} {item.step}
              </span>
              
              <h3 className="text-3xl md:text-4xl font-serif mb-4 tracking-tight">
                {item.title}
              </h3>
              
              <p className="text-white/50 font-light leading-relaxed tracking-wide text-base md:text-lg italic">
                {item.description}
              </p>

              <div className="mt-8 h-[1px] w-6 bg-[#C5A059]/40" />
            </motion.div>
          ))}
          
        </div>
      </Container>
    </section>
  );
}