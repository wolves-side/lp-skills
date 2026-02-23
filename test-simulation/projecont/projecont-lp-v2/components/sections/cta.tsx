'use client';

import { ArrowRight, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollReveal } from '@/components/animations/scroll-reveal';
import { Aurora } from '@/components/decorative/aurora';
import { NoiseTexture } from '@/components/decorative/noise-texture';

export function CTA() {
    return (
        <section id="cta" className="relative bg-gradient-to-br from-[hsl(218_75%_13%)] to-[hsl(218_75%_20%)] py-32 lg:py-40 overflow-hidden text-primary-50">
            {/* Visual Effects */}
            <Aurora className="z-[1] text-[#f59e0b] opacity-15" />
            <NoiseTexture opacity={0.04} className="z-[2]" />

            <div className="relative z-10 container mx-auto px-6 text-center">
                <ScrollReveal className="max-w-4xl mx-auto space-y-8">
                    <h2 className="font-display font-bold text-4xl md:text-6xl lg:text-7xl leading-tight">
                        Seu fluxo de caixa não permite <br className="hidden md:block" />
                        <span className="text-accent italic font-serif">erros tributários</span>.
                    </h2>

                    <p className="text-xl md:text-2xl text-primary-200/90 leading-relaxed max-w-3xl mx-auto font-light">
                        Agende uma conversa de 30 minutos. Mapearemos as ineficiências do seu negócio e entregaremos um plano de ação, sem custo.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center items-center gap-6 pt-10">
                        <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-accent to-accent-600 text-accent-foreground hover:shadow-[0_0_30px_hsl(var(--accent)/0.5)] hover:-translate-y-1 transition-all text-lg px-10 h-16 rounded-xl font-bold tracking-wide border-b-4 border-accent-700 active:border-b-0 active:translate-y-[3px]">
                            Agendar Diagnóstico Gratuito <ArrowRight className="ml-2 w-6 h-6" />
                        </Button>

                        <Button size="lg" variant="ghost" className="w-full sm:w-auto text-primary-100 hover:text-white hover:bg-white/10 text-lg px-8 h-16 rounded-xl transition-all">
                            <MessageCircle className="mr-2 w-5 h-5 text-accent" /> Falar no WhatsApp
                        </Button>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
