import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 glass-panel border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          {/* Inverting the black logo to work on our dark theme */}
          <div className="relative w-10 h-10 overflow-hidden rounded-md">
            <Image 
              src="/images/Zurge Customs.png" 
              alt="Zurge Studios Logo" 
              fill
              className="object-cover invert" 
            />
          </div>
          <span className="font-bold text-xl tracking-widest uppercase mt-1">Zurge</span>
        </Link>
        <div className="hidden md:flex gap-8 text-sm font-medium tracking-wide text-white/60">
          <Link href="#about" className="hover:text-[var(--accent)] transition-colors">About</Link>
          <Link href="#games" className="hover:text-[var(--accent)] transition-colors">Games</Link>
          <Link href="#press" className="hover:text-[var(--accent)] transition-colors">Press</Link>
          <Link href="#contact" className="hover:text-[var(--accent)] transition-colors">Contact</Link>
        </div>
      </div>
    </nav>
  );
}