'use client';

import { Search, Calculator, CheckCircle2 } from 'lucide-react';
import { StaggerChildren, StaggerItem } from '@/components/animations/stagger-children';
import { ScrollReveal } from '@/components/animations/scroll-reveal';
import { NoiseTexture } from '@/components/decorative/noise-texture';

const steps = [
    {
        number: "01",
        title: "Diagnóstico Fiscal Gratuito",
        description: "Analisamos seus últimos 12 meses de faturamento para identificar gargalos tributários, multas indevidas e oportunidades de redução de impostos, sem custo ou compromisso.",
        icon: Search
    },
    {
        number: "02",
        title: "Modelagem Financeira e Societária",
        description: "Se encontrarmos ineficiência, desenhamos o cenário ideal. Comparamos o Simples, Lucro Presumido e Lucro Real, projetando a exata economia que sua empresa terá.",
        icon: Calculator
    },
    {
        number: "03",
        title: "Migração Sem Atrito",
        description: "Aprovando o plano, nossa equipe assume tudo. Falamos com seu contador atual, transferimos os dados e implementamos o novo modelo societário em até 15 dias.",
        icon: CheckCircle2
    }
];

export function HowItWorks() {
    return (
        <section id="como-funciona" className="relative bg-background py-24 overflow-hidden">
            <NoiseTexture opacity={0.01} className="z-[1]" />
            <div className="relative z-10 container mx-auto px-6 max-w-5xl">

                <ScrollReveal className="text-center mb-16 max-w-2xl mx-auto">
                    <h2 className="font-display font-bold text-3xl md:text-5xl text-primary mb-6">
                        O processo de transição
                    </h2>
                    <p className="text-xl text-muted-foreground">
                        Ter medo de trocar de contador por "dar trabalho" é o erro mais caro que você pode cometer. Nós fazemos todo o trabalho pesado.
                    </p>
                </ScrollReveal>

                <StaggerChildren className="space-y-12">
                    {steps.map((step, index) => (
                        <StaggerItem key={index} className="relative">
                            {/* Visual connector line between steps */}
                            {index !== steps.length - 1 && (
                                <div className="hidden md:block absolute left-[3.25rem] top-24 bottom-[-3rem] w-px bg-border/50 z-0" />
                            )}

                            <div className="flex flex-col md:flex-row gap-8 items-start relative z-10">
                                <div className="flex-shrink-0 flex items-center gap-6">
                                    <div className="w-24 h-24 rounded-full bg-primary/5 border border-primary/20 flex items-center justify-center text-primary relative shadow-sm">
                                        <div className="absolute -inset-2 rounded-full border border-primary/10 opacity-50" />
                                        <step.icon className="w-10 h-10" />
                                        <div className="absolute -bottom-3 -right-3 bg-accent text-accent-foreground font-bold w-10 h-10 rounded-full flex items-center justify-center shadow-sm border-[3px] border-background text-sm">
                                            {step.number}
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-grow pt-2">
                                    <h3 className="text-2xl font-bold text-foreground mb-4 font-display">
                                        {step.title}
                                    </h3>
                                    <p className="text-muted-foreground text-lg leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        </StaggerItem>
                    ))}
                </StaggerChildren>

            </div>
        </section>
    );
}
