'use client';

import { UtensilsCrossed, Car, Stethoscope, ShoppingBag, Factory, Briefcase } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { StaggerChildren, StaggerItem } from '@/components/animations/stagger-children';
import { ScrollReveal } from '@/components/animations/scroll-reveal';
import { GridPattern } from '@/components/decorative/grid-pattern';
import { cn } from '@/lib/utils';

const segments = [
    {
        title: "Médicos & Clínicas",
        icon: Stethoscope,
        span: "md:col-span-2 md:row-span-2",
        bg: "bg-background",
        text: "text-foreground",
        iconContainer: "bg-primary/5 text-primary",
        desc: "Contabilidade especializada em PJ médica, equiparação hospitalar e redução legal de IRPJ/CSLL para clínicas."
    },
    {
        title: "Restaurantes",
        icon: UtensilsCrossed,
        span: "md:col-span-1 md:row-span-1",
        bg: "bg-primary-800",
        text: "text-foreground-light",
        iconContainer: "bg-primary-900/50 text-accent",
        desc: "Planejamento tributário focado em ICMS, gorjetas e PIS/COFINS monofásico."
    },
    {
        title: "Concessionárias",
        icon: Car,
        span: "md:col-span-1 md:row-span-1",
        bg: "bg-primary-800",
        text: "text-foreground-light",
        iconContainer: "bg-primary-900/50 text-accent",
        desc: "Gestão contábil robusta para alta complexidade tributária no varejo automotivo."
    },
    {
        title: "Comércio Varejista",
        icon: ShoppingBag,
        span: "md:col-span-1 md:row-span-1",
        bg: "bg-primary-800",
        text: "text-foreground-light",
        iconContainer: "bg-primary-900/50 text-accent",
        desc: "Recuperação de créditos tributários e auditoria de NFs."
    },
    {
        title: "Indústrias (Polo Manaus)",
        icon: Factory,
        span: "md:col-span-2 md:row-span-1",
        bg: "bg-accent text-accent-foreground",
        text: "text-accent-foreground",
        iconContainer: "bg-white/20 text-accent-foreground",
        desc: "Especialistas na legislação complexa da Zona Franca de Manaus (ZFM), Suframa e incentivos fiscais estaduais/federais."
    },
    {
        title: "Prestadores de Serviço",
        icon: Briefcase,
        span: "md:col-span-1 md:row-span-1",
        bg: "bg-primary-800",
        text: "text-foreground-light",
        iconContainer: "bg-primary-900/50 text-accent",
        desc: "Alocação no Anexo III ou V do Simples com Fator R para pagar menos imposto legalmente."
    }
];

export function Segments() {
    return (
        <section id="segmentos" className="relative bg-primary-950 py-24 lg:py-32 overflow-hidden text-foreground-light">
            <GridPattern variant="dots" size={24} color="hsl(38 100% 97%)" opacity={0.03} className="z-[1]" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-950/80 to-transparent z-[2] pointer-events-none" />

            <div className="relative z-10 container mx-auto px-6">
                <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-8">

                    {/* Sticky Sidebar */}
                    <div className="lg:sticky lg:top-32 self-start">
                        <ScrollReveal>
                            <span className="text-accent font-bold tracking-wider uppercase text-sm mb-3 block">
                                Especialidade Setorial
                            </span>
                            <h2 className="font-display font-bold text-3xl md:text-5xl mb-6">
                                Conhecemos o <br className="hidden lg:block" />seu mercado.
                            </h2>
                            <p className="text-primary-200 text-lg leading-relaxed mb-8">
                                Regimes de tributação são como remédios: o que cura uma empresa pode matar a outra. Não aplicamos fórmulas prontas. Por atender centenas de clientes líderes, sabemos exatamente os benefícios fiscais escondidos e os riscos invisíveis do seu setor.
                            </p>
                        </ScrollReveal>
                    </div>

                    {/* Bento Grid layout */}
                    <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {segments.map((segment, index) => (
                            <StaggerItem
                                key={index}
                                className={cn("flex", segment.span)}
                            >
                                <Card className={cn(
                                    "w-full h-full border-white/5 transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 hover:shadow-2xl overflow-hidden group",
                                    segment.bg
                                )}>
                                    <div className="p-8 h-full flex flex-col justify-between">
                                        <div>
                                            <div className={cn(
                                                "w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110",
                                                segment.iconContainer
                                            )}>
                                                <segment.icon className="w-7 h-7" />
                                            </div>
                                            <h3 className={cn("text-2xl font-bold mb-3", segment.text)}>
                                                {segment.title}
                                            </h3>
                                        </div>
                                        <p className={cn("opacity-80 leading-relaxed", segment.text, segment.text === 'text-foreground' && 'text-muted-foreground opacity-100')}>
                                            {segment.desc}
                                        </p>
                                    </div>
                                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-[0.03] transition-opacity duration-300 pointer-events-none" />
                                </Card>
                            </StaggerItem>
                        ))}
                    </StaggerChildren>

                </div>
            </div>
        </section>
    );
}
