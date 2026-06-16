import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Milena Rengifo — Especialista SST | Consultoría en Seguridad y Salud en el Trabajo",
  description:
    "Consultoría especializada en Seguridad y Salud en el Trabajo para empresas colombianas. Diseño e implementación del SG-SST, auditorías de cumplimiento y gestión de riesgos críticos.",
  keywords: "SST Colombia, SG-SST, Seguridad y Salud en el Trabajo, Decreto 1072, Resolución 0312, consultoría SST Bogotá",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
