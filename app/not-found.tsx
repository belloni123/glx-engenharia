import type { Metadata } from 'next';
import Image from 'next/image';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { LeadButton, TransitionLink } from './components/experience';

export const metadata: Metadata = {
  title: 'Página não encontrada',
  description: 'O endereço acessado não foi encontrado no site da GLX Engenharia.',
};

export default function NotFound() {
  return (
    <main className="not-found-page">
      <Image className="not-found-image" src="/media/luxury-residence-construction.jpg" alt="" fill priority sizes="100vw" />
      <div className="not-found-shade" />
      <div className="not-found-grid" aria-hidden="true" />
      <div className="not-found-code" aria-hidden="true"><span>4</span><Image src="/brand/glx-mark.svg" alt="" width={180} height={180} /><span>4</span></div>
      <div className="not-found-copy">
        <p className="eyebrow"><span />Erro 404</p>
        <h1>Essa página não existe.</h1>
        <p>O endereço pode ter mudado ou sido digitado incorretamente. Volte ao início ou fale com a equipe GLX.</p>
        <div className="not-found-actions">
          <TransitionLink href="/" className="button button-outline"><ArrowLeft /> Voltar ao início</TransitionLink>
          <LeadButton interest="Iniciar projeto" className="button button-primary">Falar com a GLX <ArrowRight /></LeadButton>
        </div>
      </div>
    </main>
  );
}
