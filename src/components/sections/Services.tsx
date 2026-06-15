import { Plus } from "lucide-react";
import { SERVICES, EXTRA_SERVICES } from "@/lib/data";

export default function Services() {
  return (
    <section id="servicios" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-[#E8610A] text-sm font-semibold uppercase tracking-[0.2em] mb-3">
            Servicios
          </span>
          <h2 className="text-[2.5rem] font-extrabold text-[#1B2E4B] leading-tight">
            Soluciones SST para tu empresa
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-sm leading-[1.7]" style={{ color: "#374151" }}>
            Cada servicio está diseñado para garantizar el cumplimiento normativo
            y proteger la operación de tu empresa.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {SERVICES.map((s) => (
            <div
              key={s.title}
              className="bg-white rounded-2xl p-8 border-t-[3px] border-t-[#2E7D52] cursor-default transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.10)" }}
            >
              <div className="mb-5">
                <s.icon className="w-8 h-8 text-[#2E7D52]" />
              </div>
              <h3 className="font-bold text-[#1B2E4B] mb-3 text-base">
                {s.title}
              </h3>
              <p className="text-sm leading-[1.7]" style={{ color: "#374151" }}>
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-[#1B2E4B] to-[#2E7D52] rounded-2xl p-6 text-white">
          <div className="flex items-start gap-3 mb-4">
            <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
              <Plus className="w-4 h-4 text-white" />
            </div>
            <p className="font-bold text-sm">Servicios adicionales</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {EXTRA_SERVICES.map((e) => (
              <span
                key={e}
                className="bg-white/10 border border-white/20 text-white text-xs font-medium px-3 py-1.5 rounded-full"
              >
                {e}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
