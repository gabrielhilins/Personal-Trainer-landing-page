import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { CgGym } from "react-icons/cg"
import { FaInstagram, FaTiktok, FaWhatsapp, FaGlobe } from "react-icons/fa"
import Link from "next/link"
import { PoweredBy } from "@/components/powered-by"

export default function LinksPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Background decoration (Aura) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] aspect-square bg-primary/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute -top-[10%] -left-[10%] w-[50%] aspect-square bg-primary/10 rounded-full blur-[100px]" />
        <div className="absolute -bottom-[10%] -right-[10%] w-[50%] aspect-square bg-primary/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-md w-full z-10 flex flex-col items-center gap-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
        
        {/* Main Card */}
        <div className="w-full bg-card/40 backdrop-blur-xl border border-border rounded-[2.5rem] p-8 lg:p-10 shadow-2xl shadow-black/50 relative overflow-hidden group">
          {/* Subtle inner glow */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors duration-700" />
          
          <div className="relative z-10 flex flex-col items-center gap-8">
            {/* Header / Profile */}
            <div className="flex flex-col items-center gap-4 text-center">
              <Avatar className="w-28 h-28 border-4 border-primary shadow-xl shadow-primary/20 transition-transform duration-500 hover:scale-105 cursor-pointer">
                <AvatarImage src="/professional-male-personal-trainer-portrait-confid.jpg" alt="Rafael Mendes" className="object-cover" />
                <AvatarFallback className="bg-muted text-muted-foreground text-2xl">RM</AvatarFallback>
              </Avatar>
              
              <div className="space-y-2">
                <div className="flex items-center justify-center gap-2 text-primary">
                  <CgGym className="w-5 h-5" />
                  <span className="font-bold tracking-[0.2em] text-[10px] uppercase">Personal Trainer</span>
                </div>
                <h1 className="text-3xl font-black tracking-tighter text-foreground uppercase italic">Rafael Mendes</h1>
                <p className="text-muted-foreground text-sm max-w-[280px] mx-auto leading-relaxed">
                  Transformando vidas através do movimento consciente e alta performance.
                </p>
              </div>
            </div>

            {/* Links */}
            <div className="w-full flex flex-col gap-4">
              <Link href="/" className="w-full group/btn">
                <Button 
                  variant="outline" 
                  className="w-full h-16 text-base font-bold border-border bg-background/50 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 shadow-sm relative overflow-hidden rounded-2xl cursor-pointer"
                >
                  <div className="absolute left-5">
                    <FaGlobe className="w-6 h-6 group-hover/btn:scale-110 transition-transform" />
                  </div>
                  SITE OFICIAL
                </Button>
              </Link>

              <Link href="https://instagram.com" target="_blank" className="w-full group/btn">
                <Button 
                  variant="outline" 
                  className="w-full h-16 text-base font-bold border-border bg-background/50 hover:bg-[#E1306C] hover:text-white hover:border-[#E1306C] transition-all duration-300 shadow-sm relative overflow-hidden rounded-2xl cursor-pointer"
                >
                  <div className="absolute left-5">
                    <FaInstagram className="w-6 h-6 group-hover/btn:scale-110 transition-transform" />
                  </div>
                  INSTAGRAM
                </Button>
              </Link>

              <Link href="https://tiktok.com" target="_blank" className="w-full group/btn">
                <Button 
                  variant="outline" 
                  className="w-full h-16 text-base font-bold border-border bg-background/50 hover:bg-black hover:text-white hover:border-white transition-all duration-300 shadow-sm relative overflow-hidden rounded-2xl cursor-pointer"
                >
                  <div className="absolute left-5">
                    <FaTiktok className="w-6 h-6 group-hover/btn:scale-110 transition-transform" />
                  </div>
                  TIKTOK
                </Button>
              </Link>

              <Link href="https://wa.me/5511999999999" target="_blank" className="w-full group/btn">
                <Button 
                  className="w-full h-16 text-base font-black bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-[1.02] transition-all duration-300 shadow-lg shadow-primary/20 relative overflow-hidden rounded-2xl cursor-pointer"
                >
                  <div className="absolute left-5">
                    <FaWhatsapp className="w-6 h-6 animate-pulse" />
                  </div>
                  CONSULTORIA ONLINE
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center opacity-70 hover:opacity-100 transition-opacity">
            <PoweredBy />
        </div>
      </div>
    </div>
  )
}
