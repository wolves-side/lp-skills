'use client';

import Link from 'next/link';

export function Footer() {
    return (
        <footer className="bg-primary-950 text-primary-200/70 border-t border-white/5 pt-20 pb-10 font-body text-sm">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-2 space-y-4">
                        <div className="flex items-center gap-2 mb-6">
                            <span className="font-display font-bold text-2xl tracking-tight text-white">PROJECONT</span>
                            <div className="w-2 h-2 rounded-full bg-accent mt-1" />
                        </div>
                        <p className="max-w-xs leading-relaxed">
                            Contabilidade estratégica e inteligência tributária para empresas que não aceitam perder dinheiro para o fisco.
                        </p>
                        <p className="pt-4 font-mono text-xs opacity-50">
                            CRC/AM: 1234/O-5
                        </p>
                    </div>

                    <div>
                        <h4 className="font-display font-semibold text-white mb-6 uppercase tracking-wider text-xs">Acesso Rápido</h4>
                        <ul className="space-y-4">
                            <li><Link href="#servicos" className="hover:text-accent transition-colors">Serviços</Link></li>
                            <li><Link href="#segmentos" className="hover:text-accent transition-colors">Segmentos</Link></li>
                            <li><Link href="#sobre" className="hover:text-accent transition-colors">Sobre Nós</Link></li>
                            <li><Link href="#como-funciona" className="hover:text-accent transition-colors">Como Funciona</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-display font-semibold text-white mb-6 uppercase tracking-wider text-xs">Sede</h4>
                        <address className="not-italic space-y-4 leading-relaxed">
                            <p>Edifício Corporate Center, Sala 1205</p>
                            <p>Av. Djalma Batista, 1234 - Chapada</p>
                            <p>Manaus - AM, 69050-010</p>
                        </address>
                        <div className="mt-6 flex gap-4">
                            {/* Social Icons placeholers */}
                            <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 hover:bg-accent/20 hover:border-accent/50 cursor-pointer transition-all flex items-center justify-center text-xs">In</div>
                            <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 hover:bg-accent/20 hover:border-accent/50 cursor-pointer transition-all flex items-center justify-center text-xs">Ig</div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs opacity-60">
                    <p>© {new Date().getFullYear()} Grupo Projecont. Todos os direitos reservados.</p>
                    <div className="flex gap-6">
                        <Link href="/politica-de-privacidade" className="hover:text-white transition-colors">Política de Privacidade</Link>
                        <Link href="/termos-de-uso" className="hover:text-white transition-colors">Termos de Uso</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
