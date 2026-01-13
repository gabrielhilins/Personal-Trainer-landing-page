import Link from "next/link"

export function PoweredBy() {
  return (
    <div className="flex items-center justify-center gap-2 text-[10px] tracking-[0.15em] text-muted-foreground/50 font-[family-name:var(--font-quicksand)]">
      <span className="uppercase italic opacity-85">desenvolvido por</span>
      <Link 
        href="https://ggabstechdesign.com.br" 
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 hover:text-primary transition-all duration-500 hover:-translate-y-1 group"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img 
          src="/Wordmark SVG.svg" 
          alt="GGABS" 
          className="h-6 w-auto grayscale brightness-200 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-500" 
        />
      </Link>
    </div>
  )
}
