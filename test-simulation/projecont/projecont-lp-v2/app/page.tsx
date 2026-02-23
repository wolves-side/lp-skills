import { Hero } from '@/components/sections/hero';
import { PainPoints } from '@/components/sections/pain-points';
import { Services } from '@/components/sections/services';
import { Differentials } from '@/components/sections/differentials';
import { Segments } from '@/components/sections/segments';
import { HowItWorks } from '@/components/sections/how-it-works';
import { FAQ } from '@/components/sections/faq';
import { CTA } from '@/components/sections/cta';
import { Footer } from '@/components/sections/footer';

export default function Home() {
  return (
    <>
      <Hero />
      <PainPoints />
      <Services />
      <Differentials />
      <Segments />
      <HowItWorks />
      <FAQ />
      <CTA />
      <Footer />
    </>
  );
}
