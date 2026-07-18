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
  authors: string
  journal: string
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
