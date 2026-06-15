import { REASONS } from "@/lib/data";

export default function WhyMe() {
  return (
    <section className="py-24 bg-[#F4F6F8]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-[#E8610A] text-sm font-semibold uppercase tracking-[0.2em] mb-3">
            ¿Por qué elegirme?
          </span>
          <h2 className="text-[2.5rem] font-extrabold text-[#1B2E4B] leading-tight">
            La diferencia entre cumplir y estar protegido
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {REASONS.map((r) => (
            <div
              key={r.title}
              className="bg-white rounded-2xl p-8 border-t-[3px] border-t-[#2E7D52] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.10)" }}
            >
              <div className="mb-5">
                <r.icon className="w-8 h-8 text-[#2E7D52]" />
              </div>
              <h3 className="font-bold text-[#1B2E4B] mb-3 text-base">{r.title}</h3>
              <p className="text-sm leading-[1.7]" style={{ color: "#374151" }}>
                {r.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
