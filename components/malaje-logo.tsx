interface MalajeLogoProps {
  className?: string
  showText?: boolean
  size?: "sm" | "md" | "lg"
}

export function MalajeLogo({ className = "", showText = true, size = "md" }: MalajeLogoProps) {
  const sizes = {
    sm: { width: 120, height: 40, crow: 32 },
    md: { width: 180, height: 60, crow: 48 },
    lg: { width: 240, height: 80, crow: 64 },
  }

  const { crow } = sizes[size]

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Geometric Crow SVG */}
      <svg
        width={crow}
        height={crow}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        {/* Body - main polygonal shape */}
        <polygon
          points="15,45 35,30 50,35 65,25 80,40 85,55 75,70 55,75 35,70 20,60"
          fill="currentColor"
        />
        {/* Head */}
        <polygon
          points="65,25 80,20 90,30 85,45 80,40 75,35"
          fill="currentColor"
        />
        {/* Beak */}
        <polygon
          points="90,30 100,35 92,38 85,35"
          fill="currentColor"
        />
        {/* Wing detail - upper */}
        <polygon
          points="25,50 40,40 55,45 45,55 30,55"
          fill="currentColor"
          opacity="0.7"
        />
        {/* Wing detail - lower */}
        <polygon
          points="20,55 35,55 50,60 40,70 25,65"
          fill="currentColor"
          opacity="0.5"
        />
        {/* Tail feathers */}
        <polygon
          points="15,45 5,50 10,55 15,52"
          fill="currentColor"
        />
        <polygon
          points="12,50 0,58 8,62 15,57"
          fill="currentColor"
        />
        <polygon
          points="15,55 5,65 12,68 20,60"
          fill="currentColor"
        />
        {/* Eye - Magenta */}
        <circle
          cx="82"
          cy="32"
          r="3"
          fill="#FF00FF"
        />
      </svg>
      
      {showText && (
        <span className="font-[var(--font-headline)] font-bold tracking-[0.15em] text-current uppercase">
          MALAJE
        </span>
      )}
    </div>
  )
}
