import { SECTORS } from "@/lib/data";

export default function Sectors() {
  return (
    <section className="py-20 bg-[#F4F6F8]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="inline-block text-[#E8610A] text-sm font-semibold uppercase tracking-[0.2em] mb-3">
            Sectores
          </span>
          <h2 className="text-[2.5rem] font-extrabold text-[#1B2E4B] leading-tight">
            Experiencia en múltiples industrias
          </h2>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {SECTORS.map((s) => (
            <div
              key={s.label}
              className="flex items-center gap-2 bg-[#1B2E4B] hover:bg-[#2E7D52] text-white text-sm font-semibold px-5 py-3 rounded-full transition-all duration-200 cursor-default"
            >
              <s.icon className="w-4 h-4 text-white/80" />
              {s.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
