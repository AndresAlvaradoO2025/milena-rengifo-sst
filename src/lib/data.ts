import {
  Award, Building2, Layers,
  BadgeCheck, FileCheck, AlertTriangle,
  User, Eye, Scale, TrendingDown,
  ClipboardList, Search, GraduationCap, AlertOctagon, FolderOpen, Handshake,
  HardHat, Factory, Truck, Utensils, Briefcase, ShoppingCart, Cog,
  ClipboardCheck, FileText, Settings, BarChart3,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const WA_LINK = "https://wa.me/573202069824";

export const NAV_LINKS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Servicios", href: "#servicios" },
  { label: "Proceso", href: "#proceso" },
  { label: "Contacto", href: "#contacto" },
];

export type Metric = { icon: LucideIcon; value: string; label: string };
export const METRICS: Metric[] = [
  { icon: Award,     value: "+8",   label: "Años de experiencia en SST" },
  { icon: Building2, value: "+120", label: "Empresas asesoradas" },
  { icon: Layers,    value: "+10",  label: "Sectores atendidos" },
];

export type Specialty = { icon: LucideIcon; text: string };
export const SPECIALTIES: Specialty[] = [
  { icon: FileCheck,      text: "Diseño e implementación integral del SG-SST" },
  { icon: BadgeCheck,     text: "Auditorías de cumplimiento normativo" },
  { icon: AlertTriangle,  text: "Gestión de riesgos críticos" },
];

export type Reason = { icon: LucideIcon; title: string; desc: string };
export const REASONS: Reason[] = [
  {
    icon: User,
    title: "Atención directa, sin intermediarios",
    desc: "Trabajas con la especialista, no con un asistente.",
  },
  {
    icon: Eye,
    title: "Objetividad sin sesgos",
    desc: "Identifico riesgos que el personal interno ha normalizado.",
  },
  {
    icon: Scale,
    title: "Habilitación legal garantizada",
    desc: "Profesional con licencia para empresas de Riesgo I al V, incluyendo sectores de alto riesgo donde la ley exige especialista.",
  },
  {
    icon: TrendingDown,
    title: "Costo-eficacia radical",
    desc: "Pagas solo por alta especialización, sin los costos fijos de un área SST interna.",
  },
];

export type Service = { icon: LucideIcon; title: string; desc: string };
export const SERVICES: Service[] = [
  { icon: ClipboardList, title: "Diseño e implementación del SG-SST",        desc: "Blindaje jurídico total ante el Ministerio del Trabajo." },
  { icon: Search,        title: "Auditorías internas y cumplimiento normativo", desc: "Verificación técnica basada en Resolución 0312." },
  { icon: GraduationCap, title: "Capacitación al personal",                   desc: "Programas presenciales, virtuales o híbridos según tu operación." },
  { icon: AlertOctagon,  title: "Investigación de accidentes e incidentes",   desc: "Análisis causal para eliminar la reincidencia." },
  { icon: FolderOpen,    title: "Gestión documental SST",                     desc: "De la carpeta estática al sistema dinámico de gestión." },
  { icon: Handshake,     title: "Acompañamiento en inspecciones",             desc: "Respaldo técnico ante visitas del Ministerio o ARL." },
];

export const EXTRA_SERVICES = [
  "Matriz de identificación de peligros (IPER)",
  "Programas de teletrabajo (Decreto 1227)",
  "Gestión de reintegro laboral",
  "Diagnóstico inicial sin costo",
];

export type Sector = { icon: LucideIcon; label: string };
export const SECTORS: Sector[] = [
  { icon: HardHat,     label: "Construcción" },
  { icon: Factory,     label: "Manufactura" },
  { icon: Truck,       label: "Logística" },
  { icon: Utensils,    label: "Alimentos" },
  { icon: Briefcase,   label: "Servicios" },
  { icon: ShoppingCart, label: "Comercio" },
  { icon: Cog,         label: "Industria" },
];

export type Step = { icon: LucideIcon; number: string; title: string; desc: string };
export const STEPS: Step[] = [
  { icon: ClipboardCheck, number: "01", title: "Diagnóstico inicial",           desc: "Evaluación del estado actual del SG-SST sin costo ni compromiso." },
  { icon: FileText,       number: "02", title: "Propuesta técnica",             desc: "Plan de trabajo y presupuesto según el alcance real de tu empresa." },
  { icon: Settings,       number: "03", title: "Implementación",                desc: "Ejecución de controles, documentación, capacitaciones y seguimiento." },
  { icon: BarChart3,      number: "04", title: "Evaluación y mejora continua",  desc: "Medición de resultados y actualización normativa permanente." },
];
