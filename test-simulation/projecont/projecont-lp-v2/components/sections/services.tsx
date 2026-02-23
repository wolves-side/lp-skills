'use client';

import { PieChart, Building2, Calculator, Briefcase, ArrowRight } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { StaggerChildren, StaggerItem } from '@/components/animations/stagger-children';
import { ScrollReveal } from '@/components/animations/scroll-reveal';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { GradientBlob } from '@/components/decorative/gradient-blob';

const services = [
    {
        icon: PieChart,
        title: "Planejamento Tributário",
        description: "Análise profunda do seu regime tributário (Simples, Lucro Presumido ou Real) para encontrar caminhos legais de redução de impostos.",
        badge: "Mais Procurado"
    },
    {
        icon: Building2,
        title: "Holdings e Proteção",
        description: "Estruturação societária para blindar seu patrimônio pessoal e facilitar a sucessão familiar, garantindo a longevidade do negócio.",
        badge: "Estratégico"
    },
    {
        icon: Calculator,
        title: "BPO Financeiro",
        description: "Terceirize seu financeiro. Nós cuidamos do contas a pagar, receber, conciliação e fluxo de caixa. Você foca em vender.",
        badge: null
    },
    {
        icon: Briefcase,
        title: "Consultoria Empresarial",
        description: "Acompanhamento mensal com indicadores de desempenho (KPIs) para apoiar suas tomadas de decisão com dados reais.",
        badge: null
    }
];

export function Services() {
    return (
        <section id="servicos" className="relative bg-background py-24 lg:py-32 overflow-hidden">
            {/* Ambient Glow blobs that will show through the Glass cards */}
            <GradientBlob className="top-1/4 -left-32 opacity-10 z-[1]" colors={['hsl(218 72% 43%)', 'transparent']} size="lg" />
            <GradientBlob className="bottom-1/4 -right-32 opacity-5 z-[1]" colors={['hsl(38 80% 46%)', 'transparent']} size="lg" />

            <div className="relative z-10 container mx-auto px-6">
                <ScrollReveal className="mb-16 max-w-3xl">
                    <span className="text-accent font-bold tracking-wider uppercase text-sm mb-3 block">
                        Nossas Soluções
                    </span>
                    <h2 className="font-display font-bold text-3xl md:text-5xl text-primary mb-6">
                        Muito além do básico. <br />
                        <span className="text-primary/70">Inteligência para o seu negócio.</span>
                    </h2>
                </ScrollReveal>

                <StaggerChildren className="grid md:grid-cols-2 gap-8">
                    {services.map((service, index) => (
                        <StaggerItem key={index}>
                            <Card className={cn(
                                "group h-full relative overflow-hidden transition-all duration-300",
                                // Glassmorphism Recipe
                                "bg-card/70 backdrop-blur-lg border border-primary/10",
                                "shadow-sm hover:shadow-lg hover:border-accent/40 hover:-translate-y-1"
                            )}>
                                {/* Hover Spotlight Effect */}
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                                <CardHeader className="space-y-6 relative z-10">
                                    <div className="flex justify-between items-start">
                                        <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center group-hover:bg-accent/10 transition-colors duration-300">
                                            <service.icon className="w-8 h-8 text-primary group-hover:text-accent group-hover:scale-110 transition-all duration-300" />
                                        </div>
                                        {service.badge && (
                                            <Badge variant="secondary" className="bg-accent/10 text-accent-700 hover:bg-accent/20 border-none font-semibold px-3 py-1">
                                                {service.badge}
                                            </Badge>
                                        )}
                                    </div>
                                    <CardTitle className="text-2xl font-bold text-primary group-hover:text-primary-800 transition-colors">
                                        {service.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="relative z-10">
                                    <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                                        {service.description}
                                    </p>
                                    <div className="flex items-center text-primary font-semibold group-hover:text-accent group-hover:translate-x-2 transition-all duration-300 cursor-pointer">
                                        Explorar Solução <ArrowRight className="ml-2 w-5 h-5" />
                                    </div>
                                </CardContent>
                            </Card>
                        </StaggerItem>
                    ))}
                </StaggerChildren>
            </div>
        </section>
    );
}
