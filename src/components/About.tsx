export default function About() {
  return (
    <section id="about" className="py-32 relative border-t border-white/5 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6">
            From the <span className="text-[var(--accent)]">Ground Up.</span>
          </h2>
          <div className="space-y-6 text-white/70 font-light text-lg">
            <p>
              Zurge Studios was forged in 2026 by EpicFought. It didn't start in a boardroom with millions in funding; it started at sixteen, armed with nothing but a phone, a potato PC, and an obsession with narrative design.
            </p>
            <p>
              That limitation bred innovation. What began as a raw interest in game mechanics quickly evolved into a focused mission: to build uncompromising, high-quality story games that respect the player's time and intelligence. 
            </p>
            <p>
              Today, Zurge is entirely dedicated to creating worlds that players don't just consume, but truly inhabit and remember.
            </p>
          </div>
        </div>
        
        {/* Abstract visual representation of the studio */}
        <div className="relative aspect-square glass-panel rounded-xl flex items-center justify-center overflow-hidden border-white/10 group">
          <div className="absolute inset-0 bg-gradient-to-tr from-[#050505] to-[#111] z-0" />
          <div className="absolute w-full h-px bg-[var(--accent)]/20 top-1/2 -translate-y-1/2 group-hover:bg-[var(--accent)]/50 transition-colors duration-700" />
          <div className="absolute h-full w-px bg-[var(--accent)]/20 left-1/2 -translate-x-1/2 group-hover:bg-[var(--accent)]/50 transition-colors duration-700" />
          <div className="relative z-10 text-center uppercase tracking-[0.3em] text-white/20 text-sm font-bold">
            Studio // 2026
          </div>
        </div>
      </div>
    </section>
  );
}