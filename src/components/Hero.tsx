export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Background ambient AI-core glow */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--accent)]/10 rounded-full blur-[120px]" />
      </div>
      
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto mt-20">
        <div className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-[var(--accent)] uppercase border border-[var(--accent)]/30 rounded-full glass-panel">
          Established 2026
        </div>
        
        <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-6">
          Redefining <br /> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/30">
            Narrative
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-white/60 mb-10 max-w-2xl font-light">
          An independent studio forging uncompromising, story-driven experiences. Currently developing our debut title.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="#games" className="px-8 py-4 bg-white text-black font-bold uppercase tracking-wider text-sm hover:bg-[var(--accent)] transition-colors">
            Explore Project Metal
          </a>
          <a href="#about" className="px-8 py-4 border border-white/10 text-white font-bold uppercase tracking-wider text-sm hover:bg-white/5 transition-colors">
            The Studio
          </a>
        </div>
      </div>
    </section>
  );
}