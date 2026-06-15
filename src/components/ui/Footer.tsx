import { ShieldCheck, MessageCircle, MapPin } from "lucide-react";
import { NAV_LINKS, WA_LINK } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-[#111c2d] text-gray-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
          {/* Col 1: Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[#2E7D52] rounded-lg flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-white" />
              </div>
              <span className="text-white font-bold text-sm">
                Milena Rengifo
                <span className="block text-[#2E7D52] text-xs font-normal">Especialista SST</span>
              </span>
            </div>
            <p className="text-xs leading-relaxed">
              Tu aliada estratégica para la tranquilidad operacional de tu empresa.
              Consultoría especializada en SST con licencia profesional vigente.
            </p>
          </div>

          {/* Col 2: Nav */}
          <div>
            <p className="text-white text-sm font-semibold mb-4">Navegación</p>
            <ul className="space-y-2">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-xs hover:text-white transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact */}
          <div>
            <p className="text-white text-sm font-semibold mb-4">Contacto</p>
            <div className="space-y-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs hover:text-white transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                +57 320 206 9824
              </a>
              <div className="flex items-center gap-2 text-xs">
                <MapPin className="w-4 h-4 text-[#E8610A] flex-shrink-0" />
                Bogotá, Colombia
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs">
            © 2026 Milena Rengifo — Especialista SST. Todos los derechos reservados.
          </p>
          <p className="text-xs">Licencia SST · Riesgo I al V · Colombia</p>
        </div>
      </div>
    </footer>
  );
}
