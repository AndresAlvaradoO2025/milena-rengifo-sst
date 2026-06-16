"use client";

import Image from "next/image";
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
      <span className="absolute inline-flex w-full h-full rounded-full bg-[#25D366] opacity-60 wa-ping" />
      <Image
        src="/WhatsApp.svg"
        alt="WhatsApp"
        width={30}
        height={30}
        className="relative z-10"
      />
    </a>
  );
}
