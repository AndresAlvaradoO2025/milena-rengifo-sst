import { ArrowRight, MessageCircle, CheckCircle } from "lucide-react";
import { WA_LINK } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative bg-[#1B2E4B] min-h-screen flex items-center pt-28 pb-24 lg:pt-36 lg:pb-32 overflow-hidden"
    >
      {/* Dot grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      {/* Radial gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 70% 50%, rgba(46,125,82,0.18) 0%, transparent 65%), linear-gradient(135deg, rgba(232,97,10,0.08) 0%, transparent 50%)",
        }}
      />

      {/* Diagonal accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-[#2E7D52]/12 to-transparent pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#2E7D52]/20 border border-[#2E7D52]/30 text-[#4ade80] text-xs font-semibold px-3 py-1.5 rounded-full mb-8">
            <CheckCircle className="w-3.5 h-3.5" />
            Licencia profesional vigente · Riesgo I al V
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight mb-8">
            Protege tu empresa.{" "}
            <span className="text-[#2E7D52]">Cuida tu gente.</span>{" "}
            Opera sin interrupciones.
          </h1>

          <p className="text-gray-300 text-base sm:text-lg leading-[1.7] mb-10 max-w-2xl" style={{ color: "#d1d5db" }}>
            Consultoría especializada en Seguridad y Salud en el Trabajo para empresas
            colombianas que no pueden permitirse un paro técnico o una sanción del
            Ministerio del Trabajo.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#servicios"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#1B2E4B] font-semibold px-7 py-4 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Ver Servicios
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#E8610A] hover:bg-[#cf540a] text-white font-semibold px-7 py-4 rounded-lg transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              Solicitar diagnóstico gratuito
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
