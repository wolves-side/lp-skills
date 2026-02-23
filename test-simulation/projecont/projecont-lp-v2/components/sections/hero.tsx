'use client';

import { ArrowRight, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { textReveal, fadeUp, blurIn } from '@/lib/animations';
import { GridPattern } from '@/components/decorative/grid-pattern';
import { NoiseTexture } from '@/components/decorative/noise-texture';
import { Counter } from '@/components/animations/counter';

export function Hero() {
    return (
        <section id="hero" className="relative min-h-screen bg-gradient-to-br from-[hsl(218_75%_18%)] to-[hsl(218_75%_22%)] overflow-hidden flex flex-col justify-center items-center text-center">

            {/* --- DECORATIVE LAYERS --- */}
            <GridPattern variant="dots" size={32} color="hsl(215 12% 95%)" opacity={0.06} className="z-[1]" />
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/30 rounded-full blur-[120px] mix-blend-screen z-[2] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px] mix-blend-screen z-[2] pointer-events-none" />
            <NoiseTexture opacity={0.03} className="z-[3]" />

            {/* --- CONTENT --- */}
            <div className="relative z-10 container mx-auto px-6 pt-32 pb-20">
                <div className="max-w-4xl mx-auto flex flex-col items-center">

                    {/* Badge */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                        className="mb-8"
                    >
                        <Badge variant="secondary" className="bg-primary/20 text-accent font-semibold tracking-wide border-primary/30 px-4 py-1.5 backdrop-blur-sm">
                            19 anos de expertise contábil em Manaus
                        </Badge>
                    </motion.div>

                    {/* Headline - textReveal */}
                    <div className="overflow-hidden mb-8 max-w-3xl">
                        <motion.h1
                            variants={textReveal}
                            initial="hidden"
                            animate="visible"
                            transition={{ delay: 0.1 }}
                            className="font-display font-bold text-4xl md:text-5xl lg:text-7xl leading-[1.1] text-primary-50 tracking-tight"
                        >
                            Sua empresa paga mais <span className="text-accent underline decoration-accent/30 underline-offset-8">imposto</span> do que deveria.
                        </motion.h1>
                    </div>

                    {/* Subheadline */}
                    <motion.p
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 0.3 }}
                        className="text-lg md:text-xl text-primary-200 mb-12 max-w-2xl leading-relaxed"
                    >
                        Temos certeza disso. Deixe-nos provar em 30 minutos com um diagnóstico gratuito. Você não tem nada a perder — exceto a carga tributária excessiva.
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        variants={blurIn}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 0.4 }}
                        className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-24 w-full"
                    >
                        <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-accent to-accent-600 text-accent-foreground hover:shadow-[0_0_20px_hsl(var(--accent)/0.4)] hover:-translate-y-1 transition-all text-lg px-8 h-14">
                            Diagnóstico Gratuito <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                        <Button size="lg" variant="secondary" className="w-full sm:w-auto bg-transparent border-primary-200 text-primary-50 hover:bg-primary-800 text-lg px-8 h-14">
                            <MessageCircle className="mr-2 w-5 h-5 text-accent" /> Chamar WhatsApp
                        </Button>
                    </motion.div>

                    {/* Stats Bar */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 0.6 }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-4xl border-t border-primary-300/20 pt-10"
                    >
                        <div className="flex flex-col items-center">
                            <div className="font-display font-bold text-3xl md:text-5xl text-accent mb-2 flex items-center">
                                <Counter value={19} delay={0.6} /><span className="text-accent-400">+</span>
                            </div>
                            <span className="text-primary-200 text-sm font-medium uppercase tracking-wider">Anos de Mercado</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="font-display font-bold text-3xl md:text-5xl text-accent mb-2 flex items-center">
                                <Counter value={6} delay={0.7} />
                            </div>
                            <span className="text-primary-200 text-sm font-medium uppercase tracking-wider">Segmentos</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="font-display font-bold text-3xl md:text-5xl text-accent mb-2 flex items-center">
                                <Counter value={15} delay={0.8} /><span className="text-accent-400">+</span>
                            </div>
                            <span className="text-primary-200 text-sm font-medium uppercase tracking-wider">Especialistas</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="font-display font-bold text-3xl md:text-5xl text-accent mb-2">
                                Manaus
                            </div>
                            <span className="text-primary-200 text-sm font-medium uppercase tracking-wider">Sede Própria</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
