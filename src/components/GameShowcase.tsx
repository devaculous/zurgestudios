export default function GameShowcase() {
  return (
    <section id="games" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 flex items-baseline justify-between">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">
            In Development
          </h2>
          <span className="text-[var(--accent)] font-bold tracking-widest text-sm uppercase">
            Status: Pre-Alpha
          </span>
        </div>

        <div className="relative w-full aspect-video md:aspect-[21/9] bg-[#0a0a0a] border border-white/10 rounded-xl overflow-hidden group mb-12">
          {/* Placeholder for Game Key Art */}
          <div className="absolute inset-0 flex items-center justify-center bg-[url('/images/metal-placeholder.jpg')] bg-cover bg-center opacity-40 group-hover:opacity-60 transition-opacity duration-700">
             <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
          </div>
          
          <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
            <h3 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-4 neon-text">
              METAL
            </h3>
            <div className="flex gap-4 text-xs font-bold uppercase tracking-widest text-white/50">
              <span>Action / Narrative</span>
              <span>•</span>
              <span>Single-Player</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white/70 font-light">
          <div className="md:col-span-2 text-lg space-y-4">
            <p>
              A decorated Marine, paralyzed for life in the line of duty, is quietly recruited by a shadow branch of the CIA. Outfitted with an experimental neural-AI bridge, his physical capabilities aren't just restored—they are weaponized.
            </p>
            <p>
              As a newly minted black-ops asset, you must navigate your first high-stakes mission. METAL explores the brutal intersection of human trauma and bleeding-edge synthetic evolution. 
            </p>
          </div>
          <div className="glass-panel p-6 rounded-lg border border-white/5 space-y-4">
            <div>
              <div className="text-[var(--accent)] text-xs font-bold uppercase tracking-widest mb-1">Engine</div>
              <div className="text-white">Unreal Engine 5 (TBD)</div>
            </div>
            <div>
              <div className="text-[var(--accent)] text-xs font-bold uppercase tracking-widest mb-1">Platforms</div>
              <div className="text-white">PC / Next-Gen</div>
            </div>
            <div>
              <div className="text-[var(--accent)] text-xs font-bold uppercase tracking-widest mb-1">Release</div>
              <div className="text-white">TBA</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}