# Form Implementation

Forms using React Hook Form + Zod for validation. Patterns for different submission types.

---

## Base Form Pattern

```tsx
// components/sections/contact.tsx
'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ScrollReveal } from '@/components/animations/scroll-reveal';
import { Check, Loader2, Send } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

// ── Schema ──────────────────────────────────
const contactSchema = z.object({
  name: z.string().min(2, 'Nome é obrigatório'),
  email: z.string().email('Email inválido'),
  phone: z.string().min(10, 'Telefone inválido').optional(),
  company: z.string().optional(),
  message: z.string().min(10, 'Conte um pouco mais sobre sua necessidade'),
});

type ContactFormData = z.infer<typeof contactSchema>;

// ── Component ───────────────────────────────
interface ContactProps {
  headline: string;
  subtitle?: string;
  submitText?: string;
  submissionType: 'whatsapp' | 'mailto' | 'api';
  whatsappNumber?: string;
  apiEndpoint?: string;
  emailTo?: string;
}

export function Contact({
  headline,
  subtitle,
  submitText = 'Enviar mensagem',
  submissionType,
  whatsappNumber,
  apiEndpoint,
  emailTo,
}: ContactProps) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setStatus('loading');

    try {
      switch (submissionType) {
        case 'whatsapp':
          submitToWhatsApp(data, whatsappNumber!);
          setStatus('success');
          break;
        case 'mailto':
          submitToMailto(data, emailTo!);
          setStatus('success');
          break;
        case 'api':
          await submitToApi(data, apiEndpoint!);
          setStatus('success');
          break;
      }
      reset();
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container mx-auto px-6 max-w-2xl">
        <ScrollReveal className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold">{headline}</h2>
          {subtitle && <p className="mt-4 text-muted-foreground">{subtitle}</p>}
        </ScrollReveal>

        <ScrollReveal>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField label="Nome" error={errors.name?.message}>
                <input
                  {...register('name')}
                  placeholder="Seu nome"
                  className={cn(inputStyles, errors.name && inputErrorStyles)}
                />
              </FormField>

              <FormField label="Email" error={errors.email?.message}>
                <input
                  {...register('email')}
                  type="email"
                  placeholder="seu@email.com"
                  className={cn(inputStyles, errors.email && inputErrorStyles)}
                />
              </FormField>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField label="Telefone" error={errors.phone?.message} optional>
                <input
                  {...register('phone')}
                  type="tel"
                  placeholder="(11) 99999-9999"
                  className={cn(inputStyles, errors.phone && inputErrorStyles)}
                />
              </FormField>

              <FormField label="Empresa" error={errors.company?.message} optional>
                <input
                  {...register('company')}
                  placeholder="Nome da empresa"
                  className={inputStyles}
                />
              </FormField>
            </div>

            <FormField label="Mensagem" error={errors.message?.message}>
              <textarea
                {...register('message')}
                rows={4}
                placeholder="Como podemos ajudar?"
                className={cn(inputStyles, 'resize-none', errors.message && inputErrorStyles)}
              />
            </FormField>

            <Button
              type="submit"
              size="lg"
              disabled={status === 'loading'}
              className="w-full md:w-auto"
            >
              {status === 'loading' && <Loader2 className="mr-2 w-4 h-4 animate-spin" />}
              {status === 'success' && <Check className="mr-2 w-4 h-4" />}
              {status === 'idle' && <Send className="mr-2 w-4 h-4" />}
              {status === 'success' ? 'Enviado!' : submitText}
            </Button>

            {status === 'error' && (
              <p className="text-destructive text-sm">Erro ao enviar. Tente novamente.</p>
            )}
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
}

// ── Form Field Wrapper ──────────────────────
function FormField({
  label,
  error,
  optional,
  children,
}: {
  label: string;
  error?: string;
  optional?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="block text-sm font-medium mb-2">
        {label}
        {optional && <span className="text-muted-foreground ml-1">(opcional)</span>}
      </label>
      {children}
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-destructive text-sm mt-1"
        >
          {error}
        </motion.p>
      )}
    </div>
  );
}

// ── Shared Styles ───────────────────────────
const inputStyles =
  'w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors';

const inputErrorStyles = 'border-destructive focus:ring-destructive/50';
```

---

## Submission Handlers

### WhatsApp

```typescript
function submitToWhatsApp(data: ContactFormData, phone: string) {
  const message = [
    `*Contato via Landing Page*`,
    ``,
    `*Nome:* ${data.name}`,
    `*Email:* ${data.email}`,
    data.phone ? `*Telefone:* ${data.phone}` : null,
    data.company ? `*Empresa:* ${data.company}` : null,
    ``,
    `*Mensagem:*`,
    data.message,
  ]
    .filter(Boolean)
    .join('\n');

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}
```

### Mailto

```typescript
function submitToMailto(data: ContactFormData, emailTo: string) {
  const subject = `Contato LP — ${data.name}`;
  const body = [
    `Nome: ${data.name}`,
    `Email: ${data.email}`,
    data.phone ? `Telefone: ${data.phone}` : null,
    data.company ? `Empresa: ${data.company}` : null,
    ``,
    `Mensagem:`,
    data.message,
  ]
    .filter(Boolean)
    .join('\n');

  const url = `mailto:${emailTo}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = url;
}
```

### API Endpoint

```typescript
async function submitToApi(data: ContactFormData, endpoint: string) {
  const res = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  if (!res.ok) throw new Error('Submission failed');
}
```

---

## Custom Schema

Adapt the Zod schema per project. Example with more fields:

```typescript
const customSchema = z.object({
  name: z.string().min(2, 'Nome é obrigatório'),
  email: z.string().email('Email inválido'),
  phone: z.string().min(10, 'Telefone inválido'),
  company: z.string().min(2, 'Empresa é obrigatória'),
  employees: z.enum(['1-10', '11-50', '51-200', '200+'], {
    errorMap: () => ({ message: 'Selecione o porte' }),
  }),
  budget: z.enum(['< 5k', '5k-20k', '20k-50k', '50k+'], {
    errorMap: () => ({ message: 'Selecione o investimento' }),
  }),
  message: z.string().optional(),
});
```
