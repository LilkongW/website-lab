import type { NavLink, TeamMember, Publication, Service, Stat, ResearchProject } from "@/types"

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
    role: "Investigador",
    photo: "/images/team/Abraham_Quintero.JPG",
    bio: "Investigador en procesamiento de imágenes y visión computacional.",
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
    role: "Director",
    photo: "/images/team/Juan_Villegas.png",
    bio: "Investigador en radiación cósmica y precursores sísmicos. Iniciativa merideña en sistemas de alerta temprana en terremotos.",
    email: "jvillegas@labfisica.ula.ve",
  },
  {
    name: "Stephanie Carrillo",
    role: "Directora",
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
    titleEn: "Study of an Eye Tracking System based on Image Processing Techniques: An Experimental Proposal",
    authors: "Toro, V.",
    journal: "Tesis de Licenciatura — Universidad de Los Andes",
    journalEn: "Bachelor's Thesis — Universidad de Los Andes",
    year: 2026,
    doi: "",
  },
  {
    title: "Hacia una Detección Temprana de la Enfermedad de Parkinson a Través del Análisis de Componentes Principales (PCA) y Redes Neuronales Artificiales (RNA): Una Propuesta Experimental",
    titleEn: "Towards Early Detection of Parkinson's Disease through Principal Component Analysis (PCA) and Artificial Neural Networks (ANN): An Experimental Proposal",
    authors: "Carrillo, S., Rosales, M.",
    journal: "Trabajo Especial de Grado — Licenciatura en Física, Universidad de Los Andes",
    journalEn: "Special Degree Work — Bachelor in Physics, Universidad de Los Andes",
    year: 2021,
    doi: "",
  },
  {
    title: "Búsqueda de Agrupaciones en Data Proveniente de Electrocardiogramas (ECG), mediante el Análisis de Componentes Principales y el uso de Redes Neuronales",
    titleEn: "Search for Clusters in ECG Data using Principal Component Analysis and Neural Networks",
    authors: "Quintero, A.",
    journal: "Trabajo Especial de Grado — Licenciatura en Física, Universidad de Los Andes",
    journalEn: "Special Degree Work — Bachelor in Physics, Universidad de Los Andes",
    year: 2026,
    doi: "",
  },
  {
    title: "Radiación Cósmica y Precursores Sísmicos. Una Iniciativa Merideña en Sistemas de Alerta Temprana en Terremotos",
    titleEn: "Cosmic Radiation and Seismic Precursors. A Mérida Initiative for Early Earthquake Warning Systems",
    authors: "Villegas, J.C.",
    journal: "ResearchGate",
    year: 2020,
    doi: "",
    link: "https://www.researchgate.net/profile/Juan-Villegas-25",
  },
]

export const researchProjects: ResearchProject[] = [
  {
    title: "Estudio de una red de distribución comercial tratada como latente desde la perspectiva del observador",
    titleEn: "Study of a Commercial Distribution Network as Latent from the Observer's Perspective",
    summary: "Reconstrucción de un espacio efectivo mediante distancias entre agentes a partir de variables como posición geográfica y patrones de comportamiento, sobre el cual se aplica un modelo de tipo potencial para identificar nodos influyentes en la red.",
    summaryEn: "Reconstruction of an effective space using distances between agents based on variables such as geographic location and behavioral patterns, on which a potential-type model is applied to identify influential nodes in the network.",
    author: "Sebastián Sosa Le Morvan",
    status: "en-curso",
  },
  {
    title: "Viabilidad de redes neuronales para la identificación temprana de Parkinson mediante vocalizaciones sostenidas",
    titleEn: "Feasibility of Neural Networks for Early Parkinson's Detection through Sustained Vocalizations",
    summary: "Uso de redes neuronales para detectar la enfermedad de Parkinson en etapas tempranas a través de vocalizaciones, con el objetivo de servir como método de monitoreo no invasivo y remoto, respaldando la decisión de pasar a estudios más avanzados como resonancias magnéticas.",
    summaryEn: "Use of neural networks to detect Parkinson's disease in early stages through vocalizations, aiming to serve as a non-invasive remote monitoring method to support decisions for more advanced studies such as MRIs.",
    author: "Juan Pablo León",
    status: "en-curso",
  },
  {
    title: "Sistema de visión artificial para el análisis de la marcha y detección de anomalías biomecánicas",
    titleEn: "Computer Vision System for Gait Analysis and Biomechanical Anomaly Detection",
    summary: "Desarrollo de un sistema que usa inteligencia artificial y visión artificial para obtener datos del movimiento corporal durante la marcha, transformándolos en parámetros físicos que permitan a un especialista identificar anomalías, ante la limitada disponibilidad de laboratorios de movimiento en Venezuela.",
    summaryEn: "Development of an AI-powered computer vision system to capture body movement data during gait, transforming it into physical parameters that enable specialists to identify anomalies, addressing the limited availability of motion analysis laboratories in Venezuela.",
    author: "Josuep Turmero",
    status: "en-curso",
  },
  {
    title: "Aplicación del modelo de Axelrod al estudio de asimetrías culturales con estratificación socioeducativa",
    titleEn: "Application of the Axelrod Model to the Study of Cultural Asymmetries with Socio-Educational Stratification",
    summary: "Estudio de la influencia del grado académico en el modelo de convergencia cultural de Axelrod, implementando herramientas de termodinámica y mecánica estadística como la entropía para analizar la formación de clusters culturales y evaluar la estabilidad de sus fases emergentes.",
    summaryEn: "Study of the influence of academic degree in Axelrod's cultural convergence model, implementing thermodynamic and statistical mechanics tools such as entropy to analyze the formation of cultural clusters and evaluate the stability of their emergent phases.",
    author: "Anttony Rodelo",
    status: "en-curso",
  },
  {
    title: "Sistema de análisis de señales EEG mediante redes neuronales y física estadística para la detección de crisis epilépticas",
    titleEn: "EEG Signal Analysis System using Neural Networks and Statistical Physics for Epileptic Seizure Detection",
    summary: "Desarrollo de un sistema que usa redes neuronales y física estadística para identificar y clasificar estados cerebrales ictales y no ictales a partir de señales electroencefalográficas, transformando registros crudos en biomarcadores cuantitativos de complejidad, entropía y sincronización.",
    summaryEn: "Development of a system using neural networks and statistical physics to identify and classify ictal and non-ictal brain states from EEG signals, transforming raw recordings into quantitative biomarkers of complexity, entropy, and synchronization.",
    author: "Carlos Mora",
    status: "en-curso",
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
