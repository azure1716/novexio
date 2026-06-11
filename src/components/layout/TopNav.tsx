export default function TopNav() {
  return (
    <header className="flex justify-between items-center px-10 w-full sticky top-0 z-50 border-b border-white/10 bg-surface-container-low/95 backdrop-blur-xl h-16">
      <div className="flex items-center gap-8">
        <h1 className="font-headline-lg text-[24px] tracking-widest text-primary uppercase">NOVEXIO</h1>
        <nav className="hidden md:flex gap-6">
          <a className="font-label-mono-bold text-primary border-b-2 border-primary pb-1 uppercase" href="#">OOKUBB</a>
          <a className="font-label-mono-bold text-on-surface-variant opacity-70 hover:text-primary hover:opacity-100 transition-all duration-300 uppercase" href="#">KNOIX</a>
          <a className="font-label-mono-bold text-on-surface-variant opacity-70 hover:text-primary hover:opacity-100 transition-all duration-300 uppercase" href="#">STUDYSPACE</a>
          <a className="font-label-mono-bold text-on-surface-variant opacity-70 hover:text-primary hover:opacity-100 transition-all duration-300 uppercase" href="#">LINIQ</a>
          <a className="font-label-mono-bold text-on-surface-variant opacity-70 hover:text-primary hover:opacity-100 transition-all duration-300 uppercase" href="#">RUPEE LENS</a>
        </nav>
      </div>
      <div className="flex items-center gap-4">
        <button className="p-2 hover:bg-surface-variant/30 transition-colors">
          <span className="material-symbols-outlined text-primary">settings</span>
        </button>
        <button className="p-2 hover:bg-surface-variant/30 transition-colors">
          <span className="material-symbols-outlined text-primary">notifications</span>
        </button>
        <button className="p-2 hover:bg-surface-variant/30 transition-colors">
          <span className="material-symbols-outlined text-primary">account_circle</span>
        </button>
      </div>
    </header>
  );
}
