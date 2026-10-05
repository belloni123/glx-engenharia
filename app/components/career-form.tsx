'use client';

import { FormEvent, useState } from 'react';
import { ArrowRight, FileUp } from 'lucide-react';

export function CareerForm() {
  const [fileName, setFileName] = useState('Nenhum arquivo selecionado');
  const [status, setStatus] = useState<'idle' | 'sending' | 'done' | 'fallback' | 'error'>('idle');

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setStatus('sending');
    const form = new FormData(event.currentTarget);
    try {
      const response = await fetch('/api/career', { method: 'POST', body: form });
      const data = await response.json() as { error?: string; forwarded: boolean; whatsappUrl: string };
      if (!response.ok) throw new Error(data.error || 'Falha no envio');
      if (data.forwarded) setStatus('done');
      else { setStatus('fallback'); window.open(data.whatsappUrl, '_blank', 'noopener,noreferrer'); }
      event.currentTarget.reset(); setFileName('Nenhum arquivo selecionado');
    } catch { setStatus('error'); }
  }

  return (
    <form className="career-form" onSubmit={submit}>
      <div className="form-row"><label>Nome completo<input name="name" autoComplete="name" required /></label><label>E-mail<input type="email" name="email" autoComplete="email" required /></label></div>
      <div className="form-row"><label>WhatsApp<input name="phone" autoComplete="tel" inputMode="tel" required /></label><label>Cidade<input name="city" autoComplete="address-level2" required /></label></div>
      <div className="form-row"><label>Área de interesse<select name="area" required defaultValue=""><option value="" disabled>Selecione</option><option>Engenharia civil</option><option>Arquitetura e projetos</option><option>Planejamento e orçamento</option><option>Gestão de obras</option><option>Administrativo</option><option>Compras e suprimentos</option><option>Estágio</option><option>Prestador ou parceiro</option><option>Outra área</option></select></label><label>Nível de experiência<select name="experience" required defaultValue=""><option value="" disabled>Selecione</option><option>Estudante</option><option>Até 2 anos</option><option>De 3 a 5 anos</option><option>Mais de 5 anos</option></select></label></div>
      <div className="form-row"><label>LinkedIn<input type="url" name="linkedin" placeholder="https://linkedin.com/in/..." /></label><label>Portfólio ou site<input type="url" name="portfolio" placeholder="https://" /></label></div>
      <label>Conte sua experiência<textarea name="message" rows={5} required placeholder="Principais projetos, habilidades e o que busca na GLX." /></label>
      <label className="file-field"><span>Currículo em PDF, DOC ou DOCX, até 5 MB</span><input type="file" name="resume" accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" required onChange={(event) => setFileName(event.target.files?.[0]?.name || 'Nenhum arquivo selecionado')} /><span className="file-control"><FileUp /> {fileName}</span></label>
      <label className="consent"><input type="checkbox" name="consent" value="yes" required /><span>Autorizo o uso dos meus dados para recrutamento e formação de banco de talentos, conforme a <a href="/privacidade">Política de Privacidade</a>.</span></label>
      <button className="button button-primary button-wide" type="submit" disabled={status === 'sending'}>{status === 'sending' ? 'Enviando candidatura...' : 'Enviar candidatura'}<ArrowRight /></button>
      {status === 'done' && <p className="form-success">Candidatura recebida. A equipe poderá entrar em contato quando houver uma oportunidade compatível.</p>}
      {status === 'fallback' && <p className="form-success">O canal de currículos está em configuração. Abrimos o WhatsApp para você concluir o contato. Anexe seu currículo por lá.</p>}
      {status === 'error' && <p className="form-error">Não foi possível enviar agora. Revise os campos ou fale com a GLX pelo WhatsApp.</p>}
    </form>
  );
}
