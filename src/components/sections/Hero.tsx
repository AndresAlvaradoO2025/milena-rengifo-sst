import Image from "next/image";
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

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: text content */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#2E7D52]/20 border border-[#2E7D52]/30 text-[#4ade80] text-xs font-semibold px-3 py-1.5 rounded-full mb-8">
              <CheckCircle className="w-3.5 h-3.5" />
              Licencia profesional vigente · Riesgo I al V
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-snug mb-8">
              <span className="block">Protege tu empresa.</span>
              <span className="block text-[#2E7D52]">Cuida tu gente.</span>
              <span className="block">Opera sin interrupciones.</span>
            </h1>

            <p className="text-gray-300 text-base sm:text-lg leading-[1.7] mb-10">
              Consultoría especializada en Seguridad y Salud en el Trabajo para empresas
              colombianas que no pueden permitirse un paro técnico o una sanción del
              Ministerio del Trabajo.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#servicios"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#1B2E4B] font-semibold px-7 py-4 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
              >
                Ver Servicios
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#E8610A] hover:bg-[#cf540a] text-white font-semibold px-7 py-4 rounded-lg transition-colors cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                Solicitar diagnóstico gratuito
              </a>
            </div>
          </div>

          {/* Right: photo */}
          <div className="relative hidden lg:flex items-center justify-center">
            {/* Photo card */}
            <div className="relative w-full max-w-sm aspect-[3/4] rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-black/40">
              <Image
                src="/Woman_professional_for_LinkedIn_202606161116.jpeg"
                alt="Milena Rengifo, Especialista en SST"
                fill
                className="object-cover object-top"
                priority
                sizes="(max-width: 1024px) 0px, 384px"
              />
              {/* Gradient overlay at bottom for the name card */}
              <div className="absolute bottom-0 left-0 right-0 h-2/5 pointer-events-none"
                style={{ background: "linear-gradient(to top, rgba(27,46,75,0.92) 0%, transparent 100%)" }}
              />
              {/* Name card */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-white font-bold text-sm">Milena Rengifo</p>
                <p className="text-[#4ade80] text-xs mt-0.5">Especialista en SST · Licencia vigente</p>
              </div>
            </div>

            {/* Floating stat chips */}
            <div className="absolute -top-3 right-4 bg-white text-[#1B2E4B] text-xs font-bold px-3 py-1.5 rounded-full shadow-xl whitespace-nowrap">
              +8 años de experiencia
            </div>
            <div className="absolute top-1/3 -left-5 bg-[#E8610A] text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-xl whitespace-nowrap">
              +120 empresas
            </div>
            <div className="absolute bottom-1/4 -right-5 bg-[#2E7D52] text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-xl whitespace-nowrap">
              Riesgo I al V
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
