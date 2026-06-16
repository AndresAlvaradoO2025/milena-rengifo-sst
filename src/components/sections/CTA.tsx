import { MessageCircle, ShieldAlert } from "lucide-react";
import { WA_LINK } from "@/lib/data";

export default function CTA() {
  return (
    <section id="contacto" className="py-20 bg-[#1B2E4B]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="w-14 h-14 bg-[#E8610A]/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <ShieldAlert className="w-7 h-7 text-[#E8610A]" />
        </div>

        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
          ¿Tu empresa está blindada ante el{" "}
          <span className="text-[#4ade80]">Ministerio del Trabajo</span>?
        </h2>
        <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
          El desconocimiento técnico no es una excusa válida ante una inspección.
          Agenda hoy tu diagnóstico inicial sin costo.
        </p>

        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#1fb855] text-white font-bold px-8 py-4 rounded-xl text-base transition-colors shadow-lg shadow-green-900/30"
        >
          <MessageCircle className="w-5 h-5" />
          Solicitar diagnóstico gratuito por WhatsApp
        </a>

        <p className="text-gray-400 text-sm mt-4">
          Sin compromiso · Respuesta en menos de 24 horas
        </p>
      </div>
    </section>
  );
}
