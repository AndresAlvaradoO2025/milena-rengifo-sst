"use client";

import { MessageCircle } from "lucide-react";
import { WA_LINK } from "@/lib/data";

export default function WhatsAppButton() {
  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] shadow-lg shadow-green-900/40 wa-float"
    >
      {/* Ping ring */}
      <span className="absolute inline-flex w-full h-full rounded-full bg-[#25D366] opacity-60 wa-ping" />
      <MessageCircle className="w-7 h-7 text-white relative z-10" />
    </a>
  );
}
