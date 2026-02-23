import type { Metadata } from 'next';
import { fontBody, fontDisplay } from '@/lib/fonts';
import { LenisProvider } from '@/lib/lenis-provider';
import '@/app/globals.css';
import { Navbar } from '@/components/navbar';

export const metadata: Metadata = {
  title: 'Projecont | Contabilidade Estratégica em Manaus',
  description: 'Há 19 anos ajudando empresas líderes em Manaus a pagar menos impostos legalmente.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${fontBody.variable} ${fontDisplay.variable} font-body antialiased selection:bg-primary/20 selection:text-primary`}>
        <LenisProvider>
          <Navbar />
          <main>{children}</main>
        </LenisProvider>
      </body>
    </html>
  );
}
