import { BadgeCheck } from "lucide-react";
import { SPECIALTIES } from "@/lib/data";

export default function About() {
  return (
    <section id="sobre-mi" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Visual side */}
          <div className="relative">
            <div className="bg-gradient-to-br from-[#1B2E4B] to-[#2E7D52] rounded-2xl p-8 text-white">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                <BadgeCheck className="w-8 h-8 text-white" />
              </div>
              <blockquote className="text-lg font-medium leading-relaxed mb-6">
                "Convierto el cumplimiento del Decreto 1072 en una ventaja
                competitiva real — no en una carpeta estática."
              </blockquote>
              <div className="border-t border-white/20 pt-6">
                <p className="font-bold text-white">Milena Rengifo</p>
                <p className="text-green-300 text-sm">Especialista en SST · Licencia vigente</p>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-[#E8610A] text-white text-xs font-bold px-4 py-2 rounded-lg shadow-lg">
              Decreto 1072 · Resolución 0312
            </div>
          </div>

          {/* Content side */}
          <div>
            <span className="inline-block text-[#2E7D52] text-sm font-semibold uppercase tracking-wider mb-3">
              Sobre mí
            </span>
            <h2 className="text-3xl font-bold text-[#1B2E4B] mb-5">
              Especialización que marca la diferencia
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Soy Milena Rengifo, especialista en SST con licencia profesional
              vigente. Trabajo directamente con gerentes y equipos directivos para
              convertir el cumplimiento del Decreto 1072 y la Resolución 0312 en
              una ventaja competitiva real — no en una carpeta estática.
            </p>
            <div className="space-y-4">
              <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                Áreas de especialidad
              </p>
              {SPECIALTIES.map((s) => (
                <div key={s.text} className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-[#2E7D52]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <s.icon className="w-4 h-4 text-[#2E7D52]" />
                  </div>
                  <span className="text-gray-700 font-medium text-sm">{s.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
