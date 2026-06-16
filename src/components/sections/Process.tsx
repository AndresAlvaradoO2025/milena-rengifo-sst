import { STEPS } from "@/lib/data";

export default function Process() {
  return (
    <section id="proceso" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-[#E8610A] text-sm font-semibold uppercase tracking-[0.2em] mb-3">
            Proceso de trabajo
          </span>
          <h2 className="text-[2.5rem] font-extrabold text-[#1B2E4B] leading-tight">
            Metodología clara, resultados garantizados
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((s, i) => (
            <div key={s.number} className="relative">
              {/* Connecting line */}
              {i < STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-6 left-[calc(50%+1.5rem)] w-[calc(100%-1rem)] h-0.5 bg-gradient-to-r from-[#E8610A]/40 to-[#E8610A]/10 z-0" />
              )}
              <div
                className="relative bg-white rounded-2xl p-8 text-center border-t-[3px] border-t-[#2E7D52] transition-all duration-200 hover:shadow-xl hover:border-t-[#E8610A]"
                style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.10)" }}
              >
                {/* Number circle */}
                <div className="flex justify-center mb-5">
                  <div
                    className="flex items-center justify-center bg-[#E8610A] text-white font-bold rounded-full"
                    style={{ width: "3rem", height: "3rem", fontSize: "1.125rem" }}
                  >
                    {s.number.replace("0", "")}
                  </div>
                </div>
                <div className="flex justify-center mb-4">
                  <s.icon className="w-7 h-7 text-[#1B2E4B]" />
                </div>
                <h3 className="font-bold text-[#1B2E4B] mb-2 text-sm">{s.title}</h3>
                <p className="text-xs leading-[1.7]" style={{ color: "#374151" }}>
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
