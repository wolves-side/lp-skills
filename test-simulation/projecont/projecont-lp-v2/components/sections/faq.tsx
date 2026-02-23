'use client';

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { ScrollReveal } from '@/components/animations/scroll-reveal';
import { NoiseTexture } from '@/components/decorative/noise-texture';

const faqs = [
    {
        question: "Minha empresa corre risco ao trocar de contador no meio do ano?",
        answer: "Não. A transição pode ser feita em qualquer mês do ano de forma segura. O principal cuidado é alinhar com o contador antigo o envio do balancete, guias e obrigações do mês anterior. Nós conduzimos todo esse asssunto diretamente com o seu contador atual."
    },
    {
        question: "Meu contador disse que eu estou pagando o imposto certo. Como vocês podem reduzir?",
        answer: "A contabilidade básica se concentra em gerar guias com base no que você faturou. Nossa contabilidade consultiva olha para a estrutura do seu negócio (holding, formato de contratação, centros de custo) e aplica elisão fiscal (redução de impostos dentro da lei) estudando a fundo a legislação tributária específica do seu estado."
    },
    {
        question: "A Projecont atende empresas fora de Manaus?",
        answer: "Nossa sede e inteligência tributária para o Polo Industrial, ZFM e Suframa estão em Manaus, mas atendemos de forma digital empresas de diversos estados do Brasil, utilizando sistemas em nuvem que garantem 100% de integração e agilidade."
    },
    {
        question: "Como funciona o ERP/Sistema financeiro?",
        answer: "Integramos nossa contabilidade ao seu sistema (Omie, Conta Azul, Bling, etc.). Se você não tem um, nós implementamos e treinamos sua equipe. A ideia é eliminar o papel e automatizar a conciliação bancária."
    },
    {
        question: "Vale a pena contratar o BPO Financeiro?",
        answer: "Se você perde tempo emitindo notas fixas, agendando pagamentos de boletos, conferindo quem pagou via Pix x Cartão, e não sabe exatamente qual sua margem de contribuição no fim do mês: sim. Terceirizar o financeiro custa menos do que contratar um funcionário de nível junior, e entrega resultados de um gerente sênior."
    }
];

export function FAQ() {
    return (
        <section id="faq" className="relative bg-muted py-24 overflow-hidden border-t border-border/50">
            <NoiseTexture opacity={0.01} className="z-[1]" />
            <div className="relative z-10 container mx-auto px-6 max-w-4xl">

                <ScrollReveal className="text-center mb-16">
                    <h2 className="font-display font-bold text-3xl md:text-5xl text-primary mb-6">
                        Dúvidas Frequentes
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Respostas diretas para as preocupações mais comuns.
                    </p>
                </ScrollReveal>

                <ScrollReveal delay={0.2}>
                    <Accordion type="single" collapsible className="w-full bg-background rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.03)] border border-border/50 px-6">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`} className="border-b-border/30 last:border-0 hover:border-b-accent/30 transition-colors">
                                <AccordionTrigger className="text-left font-display text-lg font-semibold text-foreground hover:text-primary transition-colors py-6">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </ScrollReveal>

            </div>
        </section>
    );
}
