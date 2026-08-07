export default function Contact() {
  return (
    <section id="contact" className="py-32 relative border-t border-white/5 bg-[#020202]">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-8">
          Establish Link
        </h2>
        <p className="text-white/60 mb-12 text-lg font-light">
          For publishing inquiries, press requests, or studio information, reach out through our official channels.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
          <a href="mailto:contact@zurgestudios.com" className="glass-panel p-8 rounded-xl hover:border-[var(--accent)] transition-colors group flex flex-col items-center justify-center">
            <span className="text-[var(--accent)] text-sm font-bold uppercase tracking-widest mb-2 group-hover:neon-text transition-all">Direct Email</span>
            <span className="text-white font-medium">contact@zurgestudios.com</span>
          </a>
          
          <a href="#" className="glass-panel p-8 rounded-xl hover:border-[var(--accent)] transition-colors group flex flex-col items-center justify-center">
            <span className="text-[var(--accent)] text-sm font-bold uppercase tracking-widest mb-2 group-hover:neon-text transition-all">Community</span>
            <span className="text-white font-medium">Join the Discord</span>
          </a>
        </div>
        
        {/* Press Section */}
        <div id="press" className="pt-16 border-t border-white/10">
          <h3 className="text-2xl font-black uppercase tracking-widest mb-4">Press & Media</h3>
          <p className="text-white/50 mb-6 font-light">
            Download our brand guidelines, high-res logos, and key art for METAL.
          </p>
          <button className="px-8 py-3 border border-white/20 text-white text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors">
            Download Press Kit (ZIP)
          </button>
        </div>
      </div>
    </section>
  );
}