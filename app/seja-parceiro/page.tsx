import type { Metadata } from 'next';
import Image from 'next/image';
import { Cpu, DraftingCompass, HardHat, PackageCheck, Trees, Truck } from 'lucide-react';
import { PartnerForm } from '../components/partner-form';
import { Reveal } from '../components/experience';
import { BalancedText, InteriorHero, PageShell, SectionHeading } from '../components/sections';

export const metadata: Metadata = {
  title: 'Seja uma empresa parceira',
  description: 'Apresente sua empresa, seus produtos ou serviços para futuras oportunidades de parceria com a GLX Engenharia.',
};

const partnerAreas = [
  { icon: DraftingCompass, title: 'Projetos e consultoria', text: 'Arquitetura, estrutura, instalações, compatibilização e especialidades técnicas.' },
  { icon: HardHat, title: 'Execução especializada', text: 'Equipes e empresas com domínio técnico, segurança e responsabilidade pela entrega.' },
  { icon: PackageCheck, title: 'Materiais e acabamentos', text: 'Fornecedores que unem procedência, disponibilidade, desempenho e suporte.' },
  { icon: Truck, title: 'Equipamentos e logística', text: 'Soluções para locação, transporte, movimentação e produtividade no canteiro.' },
  { icon: Cpu, title: 'Tecnologia para construção', text: 'Ferramentas que aumentam controle, integração, rastreabilidade e precisão.' },
  { icon: Trees, title: 'Paisagismo e exteriores', text: 'Especialistas em áreas externas, iluminação, vegetação e acabamento ambiental.' },
];

export default function PartnerPage() {
  return (
    <PageShell>
      <InteriorHero index="08" eyebrow="Empresas parceiras" title="Parceiros certos. Obras melhores." copy="Fornecedores, projetistas, consultores e equipes especializadas podem apresentar estrutura, região de atendimento e experiência para futuras demandas da GLX." image="/media/project-20.jpg" />
      <section className="career-intro partner-intro section-dark">
        <div><p className="kicker">Como avaliamos</p><h2>O cadastro abre a conversa. A obra confirma a parceria.</h2></div>
        <div><p>A equipe verifica capacidade de atendimento, documentação, segurança, qualidade e histórico de entrega conforme a necessidade de cada projeto.</p><div className="culture-list"><span>Portfólio e referências</span><span>Comunicação durante o serviço</span><span>Compromisso com o combinado</span><span>Documentação em dia</span></div></div>
      </section>
      <section className="partner-showcase section-paper">
        <SectionHeading kicker="Trabalho em conjunto" title="Cada especialidade entra na hora certa." copy="Projetistas, fornecedores, consultores e executores participam conforme o escopo e o momento de cada obra." />
        <div className="partner-showcase-grid">
          <Reveal className="partner-showcase-image partner-showcase-wide"><Image src="/media/luxury-residence-construction.jpg" alt="Estrutura de residência de alto padrão com equipes atuando no canteiro" fill sizes="(max-width: 700px) 100vw, 64vw" /><span>Execução coordenada</span></Reveal>
          <Reveal className="partner-showcase-image"><Image src="/media/project-19.jpg" alt="Projeto técnico com medidas e detalhamento executivo" fill sizes="(max-width: 700px) 100vw, 36vw" /><span>Compatibilização</span></Reveal>
          <Reveal className="partner-showcase-image"><Image src="/media/project-14.jpg" alt="Ambiente residencial finalizado com marcenaria e iluminação" fill sizes="(max-width: 700px) 100vw, 36vw" /><span>Acabamento entregue</span></Reveal>
        </div>
      </section>
      <section className="partner-areas section-dark">
        <SectionHeading dark kicker="Quem pode participar" title="Empresas que ajudam a obra a avançar." copy="O cadastro é aberto a empresas de diferentes portes. A equipe analisa a compatibilidade com cada oportunidade." />
        <div className="partner-areas-grid">
          {partnerAreas.map((area, index) => <Reveal key={area.title}><span>{String(index + 1).padStart(2, '0')}</span><area.icon /><h3>{area.title}</h3><p>{area.text}</p></Reveal>)}
        </div>
      </section>
      <section className="career-form-section partner-form-section section-paper">
        <div className="career-form-heading"><p className="kicker">Cadastro de empresa</p><h2><BalancedText>Mostre onde sua equipe pode contribuir.</BalancedText></h2><p>Informe região de atendimento, especialidade e experiência. O cadastro não cria obrigação de contratação e poderá ser consultado em demandas atuais ou futuras.</p></div>
        <PartnerForm />
      </section>
    </PageShell>
  );
}
