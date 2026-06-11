export default function Footer() {
  return (
    <footer className="p-10 border-t border-white/10 bg-surface-container-lowest">
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 md:col-span-4">
          <h5 className="font-label-mono-bold text-primary mb-4">SYSTEM_MANIFESTO</h5>
          <p className="text-xs text-on-surface-variant opacity-60 leading-relaxed uppercase">
            Novexio Digital Foundry operates on the principles of structural honesty. Every component is engineered for permanence. The digital landscape is our quarry. We build the monoliths of the new age.
          </p>
        </div>
        <div className="col-span-6 md:col-span-2">
          <h5 className="font-label-mono-bold text-primary mb-4 uppercase">Directives</h5>
          <ul className="text-xs space-y-2 opacity-60">
            <li><a className="hover:text-primary transition-colors" href="#">QUARRY_01</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">FORGE_MAIN</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">ASSEMBLY_LINE</a></li>
          </ul>
        </div>
        <div className="col-span-6 md:col-span-2">
          <h5 className="font-label-mono-bold text-primary mb-4 uppercase">Protocols</h5>
          <ul className="text-xs space-y-2 opacity-60">
            <li><a className="hover:text-primary transition-colors" href="#">SEC_PROTOCOL_A</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">DATA_SOVEREIGNTY</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">GRID_STABILITY</a></li>
          </ul>
        </div>
        <div className="col-span-12 md:col-span-4 flex flex-col justify-end items-end">
          <div className="font-label-mono-sm text-[10px] text-primary opacity-40 mb-2">LAST_UPDATE: 2024.11.08_14:22:01</div>
          <div className="text-right">
            <span className="font-headline-lg text-[24px] text-primary">NOVEXIO</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
