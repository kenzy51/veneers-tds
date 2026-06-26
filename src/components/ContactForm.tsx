"use client";
import Container from "./Container";
import { useParams } from "next/navigation";

export default function ContactForm() {
  const params = useParams();
  const lang = (params.lang as string) || "en";

  return (
    <section className="bg-white md:py-32" id="quiz">
      <Container>
        <div id="leadForm">
          {/* Header Section */}
          <div className="text-center">
            <span className="text-[10px] uppercase tracking-[0.5em] text-[#C5A059] font-bold block mb-4">
              {lang === "es"
                ? "Evaluación de Candidato"
                : "Candidate Assessment"}
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-[#1A1F2B] leading-tight">
              {lang === "es" ? (
                <>
                  Comience su{" "}
                  <span className="italic font-light text-slate-400">
                    Transformación.
                  </span>
                </>
              ) : (
                <>
                  Begin Your{" "}
                  <span className="italic font-light text-slate-400">
                    Transformation.
                  </span>
                </>
              )}
            </h2>

            <p className="mt-6 text-slate-400 text-sm tracking-wide font-light max-w-md mx-auto">
              {lang === "es"
                ? "Responda unas breves preguntas para que nuestros especialistas analicen su caso."
                : "Answer a few brief questions so our specialists can analyze your unique needs."}
            </p>
          </div>
          <br />

          <div className="relative bg-[#F9FAFB] rounded-sm border border-slate-100 p-0 md:p-4 shadow-sm">
            <div className="w-full h-full">
              <iframe
                src="https://api.leadconnectorhq.com/widget/survey/0ioQtLRxDADIs9vnPtBD"
                id="9cxwAnu2b65RzoUBY0DB"
                title="survey"
                className="w-full  border-none"
                style={{ width: "100%", border: "none" }}
              ></iframe>
            </div>
          </div>
          <br />

          {/* Footer Trust Note */}
          <div className="text-center">
            <p className="text-[9px] uppercase tracking-widest text-slate-400">
              {lang === "es"
                ? "Privacidad Garantizada • Tribeca Dental Studio NYC"
                : "Privacy Guaranteed • Tribeca Dental Studio NYC"}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
