interface CardProps {
  children: React.ReactNode
  className?: string
  variant?: "default" | "premium" | "glass"
}

export default function Card({ children, className = "", variant = "premium" }: CardProps) {
  const variants = {
    default: "rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-200 hover:shadow-md",
    premium: "card-premium rounded-xl border border-gray-100 bg-white p-6 shadow-sm",
    glass: "glass-card rounded-xl p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg",
  }

  return (
    <div className={`${variants[variant]} ${className}`}>
      {children}
    </div>
  )
}
