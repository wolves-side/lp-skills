'use client';

import { Shield, BarChart3, FileText, CheckCircle2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { StaggerChildren, StaggerItem } from '@/components/animations/stagger-children';
import { ScrollReveal } from '@/components/animations/scroll-reveal';
import { GridPattern } from '@/components/decorative/grid-pattern';

const diffs = [
    {
        title: "Atendimento Humanizado e Próximo",
        description: "Você não é atendido por robôs ou tickets. Nossa equipe dedicada conhece o seu negócio pelo nome e responde com agilidade via WhatsApp, reuniões online ou presencialmente em nossa sede.",
        icon: CheckCircle2
    },
    {
        title: "Contabilidade Preventiva (Segurança Jurídica)",
        description: "Mais do que apurar impostos, revisamos constantemente suas operações para garantir conformidade total com a legislação, evitando multas e surpresas desagradáveis com o fisco.",
        icon: Shield
    },
    {
        title: "Tecnologia e Automação",
        description: "Utilizamos sistemas de ponta para integrar suas informações financeiras à contabilidade de forma automática, eliminando trabalho manual e envios infinitos de planilhas.",
        icon: BarChart3
    },
    {
        title: "Relatórios Gerenciais para Decisão",
        description: "Traduzimos os números complexos da contabilidade em painéis (dashboards) claros e intuitivos. Você saberá exatamente para onde seu dinheiro está indo e qual a saúde real da empresa.",
        icon: FileText
    }
];

export function Differentials() {
    return (
        <section id="diferenciais" className="relative bg-muted/40 py-24 lg:py-32 overflow-hidden">
            {/* Ambient Background */}
            <GridPattern variant="grid" size={48} color="hsl(218 70% 13%)" opacity={0.03} className="z-[1]" />

            <div className="relative z-10 container mx-auto px-6">
                <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-accent font-bold tracking-wider uppercase text-sm mb-3 block">
                        Por que a Projecont?
                    </span>
                    <h2 className="font-display font-bold text-3xl md:text-5xl text-primary mb-6">
                        O que entregamos além das guias de impostos
                    </h2>
                    <p className="text-xl text-muted-foreground">
                        Empresas líderes não escolhem contadores pelo preço, escolhem pela segurança e inteligência gerencial que recebem em troca.
                    </p>
                </ScrollReveal>

                <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {diffs.map((diff, index) => (
                        <StaggerItem key={index}>
                            <Card className="h-full border border-border/50 bg-background hover:border-primary/20 transition-all duration-300 shadow-sm hover:shadow-md group">
                                <CardContent className="pt-8 px-6 pb-6">
                                    <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-300">
                                        <diff.icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-bold text-foreground mb-4 leading-snug group-hover:text-primary transition-colors">
                                        {diff.title}
                                    </h3>
                                    <p className="text-muted-foreground leading-relaxed text-sm">
                                        {diff.description}
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
