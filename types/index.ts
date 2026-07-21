export interface NavLink {
  label: string
  href: string
}

export interface TeamMember {
  name: string
  role: string
  photo: string
  bio: string
  email: string
}

export interface Publication {
  title: string
  titleEn?: string
  authors: string
  journal: string
  journalEn?: string
  year: number
  doi: string
  link?: string
}

export interface Service {
  title: string
  description: string
  icon: string
}

export interface Stat {
  value: string
  label: string
}

export interface ResearchProject {
  title: string
  titleEn?: string
  summary: string
  summaryEn?: string
  author: string
  status: "en-curso" | "completado" | "pausado"
}
