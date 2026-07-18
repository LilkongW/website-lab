import Link from "next/link"

interface ButtonProps {
  children: React.ReactNode
  href?: string
  variant?: "primary" | "secondary" | "outline"
  className?: string
}

export default function Button({ children, href, variant = "primary", className = "" }: ButtonProps) {
  const base = "inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition-all duration-200 cursor-pointer"
  const variants = {
    primary: "bg-secondary text-white hover:bg-cyan-700",
    secondary: "bg-primary text-white hover:bg-primary-light",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white",
  }

  if (href) {
    return (
      <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
        {children}
      </Link>
    )
  }

  return (
    <button className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </button>
  )
}
