import type { NavLink, TeamMember, Publication, Service, Stat } from "@/types"

export const siteConfig = {
  name: "Laboratorio de Física Aplicada",
  shortName: "LAB-FIS",
  parentInstitution: "Universidad de Los Andes (ULA)",
  description:
    "Centro de investigación dedicado al análisis de datos y al desarrollo de soluciones tecnológicas con impacto social. Adscrito a la Universidad de Los Andes, Mérida, Venezuela.",
  address: "Núcleo A de La Hechicera, Primer Piso, Universidad de Los Andes, Mérida 5101, Venezuela",
  phone: "+58 (0274) 240-1234",
  email: "contacto@labfisica.ula.ve",
  social: {
    facebook: "https://facebook.com",
    twitter: "https://twitter.com",
    instagram: "https://instagram.com",
    youtube: "https://youtube.com",
  },
}

export const navLinks: NavLink[] = [
  { label: "Inicio", href: "/" },
  { label: "Investigación", href: "/investigacion" },
  { label: "Servicios", href: "/servicios" },
  { label: "Equipo", href: "/equipo" },
  { label: "Publicaciones", href: "/publicaciones" },
  { label: "Galería", href: "/galeria" },
  { label: "Contacto", href: "/contacto" },
]

export const stats: Stat[] = [
  { value: "+10", label: "Años de investigación" },
  { value: "+20", label: "Publicaciones científicas" },
  { value: "+30", label: "Proyectos realizados" },
  { value: "+10", label: "Investigadores y colaboradores" },
]

export const services: Service[] = [
  {
    title: "Análisis de Datos",
    description: "Procesamiento y análisis estadístico de datos experimentales, incluyendo limpieza, modelado y visualización para la extracción de conocimiento.",
    icon: "📊",
  },
  {
    title: "Visión Computacional",
    description: "Desarrollo de sistemas basados en procesamiento de imágenes y video para aplicaciones de seguimiento ocular, detección de objetos y análisis de movimiento.",
    icon: "👁️",
  },
  {
    title: "Machine Learning",
    description: "Implementación de modelos de aprendizaje automático para clasificación, regresión y reconocimiento de patrones en datos científicos.",
    icon: "🤖",
  },
  {
    title: "Procesamiento de Señales",
    description: "Análisis y filtrado de señales fisiológicas, biomecánicas y ambientales mediante técnicas de procesamiento digital.",
    icon: "📈",
  },
  {
    title: "Desarrollo de Software Científico",
    description: "Creación de herramientas y aplicaciones para adquisición, visualización y análisis de datos experimentales.",
    icon: "💻",
  },
  {
    title: "Consultoría Tecnológica",
    description: "Asesoría en proyectos de investigación aplicada y desarrollo de soluciones tecnológicas con impacto social.",
    icon: "🔧",
  },
]

export const teamMembers: TeamMember[] = [
  {
    name: "Abrahan Quintero",
    role: "Director del Laboratorio",
    photo: "/images/team/Abraham_Quintero.JPG",
    bio: "Investigador en procesamiento de imágenes y visión computacional. Director del Laboratorio de Física Aplicada.",
    email: "aquintero@labfisica.ula.ve",
  },
  {
    name: "Josuep Turmero",
    role: "Investigador",
    photo: "/images/team/Josuep_Turmero.JPG",
    bio: "Descripción pendiente",
    email: "jturmero@labfisica.ula.ve",
  },
  {
    name: "Juan León",
    role: "Investigador",
    photo: "/images/team/Juan_Leon.JPG",
    bio: "Descripción pendiente",
    email: "jleon@labfisica.ula.ve",
  },
  {
    name: "Sebastián Sosa",
    role: "Investigador",
    photo: "/images/team/Sebastian_Sosa.JPG",
    bio: "Descripción pendiente",
    email: "ssosa@labfisica.ula.ve",
  },
  {
    name: "Victor Toro",
    role: "Investigador",
    photo: "",
    bio: "Investigador en sistemas de seguimiento ocular basados en técnicas de procesamiento de imágenes. Tesis: \"Estudio de un Sistema de Seguimiento Ocular basado en Técnicas de Procesamiento de Imágenes — Una Propuesta Experimental\".",
    email: "victortoro@labfisica.ula.ve",
  },
  {
    name: "Juan Carlos Villegas",
    role: "Investigador",
    photo: "",
    bio: "Investigador en radiación cósmica y precursores sísmicos. Iniciativa merideña en sistemas de alerta temprana en terremotos.",
    email: "jvillegas@labfisica.ula.ve",
  },
  {
    name: "Stephanie Carrillo",
    role: "Investigadora",
    photo: "",
    bio: "Investigadora en detección temprana de Parkinson mediante análisis de componentes principales y redes neuronales artificiales.",
    email: "scarrillo@labfisica.ula.ve",
  },
  {
    name: "Carlos",
    role: "Investigador",
    photo: "",
    bio: "Descripción pendiente",
    email: "carlos@labfisica.ula.ve",
  },
  {
    name: "Manuel Arteaga",
    role: "Investigador",
    photo: "",
    bio: "Descripción pendiente",
    email: "marteaga@labfisica.ula.ve",
  },
  {
    name: "Anttonny Rodelo",
    role: "Investigador",
    photo: "",
    bio: "Aplicación del modelo de Axelrod al estudio de asimetrías culturales con estratificación socio-educativa.",
    email: "arodelo@labfisica.ula.ve",
  },
]

export const publications: Publication[] = [
  {
    title: "Estudio de un Sistema de Seguimiento Ocular basado en Técnicas de Procesamiento de Imágenes: Una Propuesta Experimental",
    authors: "Toro, V.",
    journal: "Tesis de Licenciatura — Universidad de Los Andes",
    year: 2026,
    doi: "",
  },
  {
    title: "Hacia una Detección Temprana de la Enfermedad de Parkinson a Través del Análisis de Componentes Principales (PCA) y Redes Neuronales Artificiales (RNA): Una Propuesta Experimental",
    authors: "Carrillo, S., Rosales, M.",
    journal: "Trabajo Especial de Grado — Licenciatura en Física, Universidad de Los Andes",
    year: 2021,
    doi: "",
  },
  {
    title: "Búsqueda de Agrupaciones en Data Proveniente de Electrocardiogramas (ECG), mediante el Análisis de Componentes Principales y el uso de Redes Neuronales",
    authors: "Quintero, A.",
    journal: "Trabajo Especial de Grado — Licenciatura en Física, Universidad de Los Andes",
    year: 2026,
    doi: "",
  },
  {
    title: "Radiación Cósmica y Precursores Sísmicos. Una Iniciativa Merideña en Sistemas de Alerta Temprana en Terremotos",
    authors: "Villegas, J.C.",
    journal: "ResearchGate",
    year: 2020,
    doi: "",
    link: "https://www.researchgate.net/profile/Juan-Villegas-25",
  },
]

export const researchAreas = [
  {
    title: "Procesamiento de Imágenes",
    description: "Desarrollo de algoritmos y técnicas para el análisis y procesamiento de imágenes digitales con aplicaciones en seguimiento ocular, visión artificial y biomedicina.",
    items: ["Seguimiento ocular (eye tracking)", "Detección y reconocimiento de objetos", "Segmentación de imágenes", "Visión artificial aplicada"],
  },
  {
    title: "Análisis de Datos",
    description: "Aplicación de métodos estadísticos y computacionales para la extracción de conocimiento a partir de datos experimentales y simulaciones.",
    items: ["Análisis exploratorio de datos", "Minería de datos", "Visualización científica", "Bases de datos experimentales"],
  },
  {
    title: "Machine Learning Aplicado",
    description: "Implementación de modelos de inteligencia artificial para resolver problemas científicos y desarrollar soluciones tecnológicas.",
    items: ["Clasificación y regresión", "Redes neuronales", "Aprendizaje no supervisado", "Modelos predictivos"],
  },
  {
    title: "Soluciones Tecnológicas para la Sociedad",
    description: "Desarrollo de tecnologías accesibles que aborden problemáticas sociales mediante instrumentación electrónica y análisis de datos.",
    items: ["Tecnologías asistivas", "Instrumentación de bajo costo", "Sistemas biomédicos", "Aplicaciones educativas"],
  },
]
