'use client';

import { Activity, AlertTriangle, TrendingDown } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { StaggerChildren, StaggerItem } from '@/components/animations/stagger-children';
import { ScrollReveal } from '@/components/animations/scroll-reveal';
import { NoiseTexture } from '@/components/decorative/noise-texture';

const painPoints = [
    {
        icon: TrendingDown,
        title: "Tributação Oculta",
        description: "Você paga impostos que não precisaria por enquadramento fiscal inadequado. Dinheiro que deveria ser lucro virando guia de imposto."
    },
    {
        icon: AlertTriangle,
        title: "Risco Trabalhista",
        description: "Rotinas de DP desatualizadas expondo a empresa a multas e passivos trabalhistas silenciosos de alto risco."
    },
    {
        icon: Activity,
        title: "Gestão às Cegas",
        description: "Contabilidade que só entrega guias atrasadas, sem relatórios claros para você saber se a empresa está realmente dando lucro ou prejuízo."
    }
];

export function PainPoints() {
    return (
        <section id="sobre" className="relative bg-muted py-24 overflow-hidden">
            {/* Clean, no heavy distraction, just subtle noise */}
            <NoiseTexture opacity={0.02} className="z-[1]" />

            <div className="relative z-10 container mx-auto px-6">
                <ScrollReveal className="max-w-3xl mb-16">
                    <h2 className="font-display font-bold text-3xl md:text-5xl text-primary mb-6">
                        Sua empresa cresceu, mas sua contabilidade parou no tempo?
                    </h2>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        A maioria dos empresários confunde contador com "gerador de guias". Enquanto isso, o verdadeiro papel da contabilidade estrutural fica esquecido.
                    </p>
                </ScrollReveal>

                <StaggerChildren className="grid md:grid-cols-3 gap-6">
                    {painPoints.map((point, index) => (
                        <StaggerItem key={index}>
                            <Card className="h-full border border-border/50 bg-background/50 hover:bg-background transition-colors duration-300 shadow-sm hover:shadow-md">
                                <CardHeader>
                                    <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center mb-4">
                                        <point.icon className="w-6 h-6 text-destructive" />
                                    </div>
                                    <CardTitle className="text-xl font-bold text-foreground">
                                        {point.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {point.description}
                                    </p>
                                </CardContent>
                            </Card>
                        </StaggerItem>
                    ))}
                </StaggerChildren>
            </div>
        </section>
    );
}
