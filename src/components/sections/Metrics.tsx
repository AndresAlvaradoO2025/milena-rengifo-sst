import { METRICS } from "@/lib/data";

export default function Metrics() {
  return (
    <section className="bg-[#1B2E4B] py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {METRICS.map((m) => (
            <div
              key={m.label}
              className="flex flex-col items-center text-center p-8 rounded-2xl border-l-4 border-[#E8610A] bg-white/5"
              style={{ boxShadow: "0 0 24px rgba(46,125,82,0.10)" }}
            >
              <div className="mb-4">
                <m.icon className="w-8 h-8 text-[#2E7D52]" />
              </div>
              <span className="text-5xl font-bold text-white mb-2" style={{ fontSize: "3rem" }}>
                {m.value}
              </span>
              <span className="text-gray-300 text-sm font-medium">{m.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
