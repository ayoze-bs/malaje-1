import Image from "next/image"

interface MalajeLogoProps {
  className?: string
  showText?: boolean
  size?: "sm" | "md" | "lg"
}

const heights = {
  sm: 32,
  md: 48,
  lg: 64,
}

export function MalajeLogo({ className = "", showText = true, size = "md" }: MalajeLogoProps) {
  const height = heights[size]

  if (showText) {
    return (
      <Image
        src="/images/malaje-mark.png"
        alt="MALAJE"
        width={727}
        height={274}
        style={{ height, width: "auto" }}
        className={className}
        priority
      />
    )
  }

  return (
    <Image
      src="/images/malaje-icon.png"
      alt="MALAJE"
      width={335}
      height={274}
      style={{ height, width: "auto" }}
      className={className}
      priority
    />
  )
}
