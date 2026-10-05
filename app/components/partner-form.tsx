'use client';

import { FormEvent, useState } from 'react';
import { ArrowRight, FileUp } from 'lucide-react';

export function PartnerForm() {
  const [fileName, setFileName] = useState('Nenhum arquivo selecionado');
  const [status, setStatus] = useState<'idle' | 'sending' | 'done' | 'fallback' | 'error'>('idle');

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('sending');
    const formElement = event.currentTarget;
    const form = new FormData(formElement);

    try {
      const response = await fetch('/api/partner', { method: 'POST', body: form });
      const data = await response.json() as { error?: string; forwarded: boolean; whatsappUrl: string };
      if (!response.ok) throw new Error(data.error || 'Falha no envio');

      if (data.forwarded) setStatus('done');
      else {
        setStatus('fallback');
        window.open(data.whatsappUrl, '_blank', 'noopener,noreferrer');
      }

      formElement.reset();
      setFileName('Nenhum arquivo selecionado');
    } catch {
      setStatus('error');
    }
  }

  return (
    <form className="career-form partner-form" onSubmit={submit}>
      <div className="form-row"><label>Empresa<input name="company" autoComplete="organization" required /></label><label>CNPJ<input name="cnpj" inputMode="numeric" required placeholder="00.000.000/0000-00" /></label></div>
      <div className="form-row"><label>Nome do responsável<input name="contactName" autoComplete="name" required /></label><label>Cargo<input name="role" autoComplete="organization-title" required /></label></div>
      <div className="form-row"><label>E-mail corporativo<input type="email" name="email" autoComplete="email" required /></label><label>WhatsApp<input name="phone" autoComplete="tel" inputMode="tel" required /></label></div>
      <div className="form-row"><label>Cidade e estado<input name="city" autoComplete="address-level2" required /></label><label>Área de atuação<select name="area" required defaultValue=""><option value="" disabled>Selecione</option><option>Arquitetura e interiores</option><option>Projetos e consultoria</option><option>Execução especializada</option><option>Fornecimento de materiais</option><option>Equipamentos e locação</option><option>Tecnologia para construção</option><option>Paisagismo</option><option>Outra área</option></select></label></div>
      <div className="form-row"><label>Site da empresa<input type="url" name="website" placeholder="https://" /></label><label>Região de atendimento<input name="serviceRegion" required placeholder="Cidades ou estados atendidos" /></label></div>
      <label>Que serviço ou produto sua empresa oferece?<textarea name="message" rows={6} required placeholder="Descreva o trabalho, a estrutura disponível e experiências relevantes." /></label>
      <label className="file-field"><span>Apresentação comercial em PDF, DOC ou DOCX, até 8 MB, opcional</span><input type="file" name="presentation" accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" onChange={(event) => setFileName(event.target.files?.[0]?.name || 'Nenhum arquivo selecionado')} /><span className="file-control"><FileUp /> {fileName}</span></label>
      <label className="consent"><input type="checkbox" name="consent" value="yes" required /><span>Declaro que posso representar a empresa informada e autorizo o contato da GLX e o tratamento dos dados para avaliação da parceria, conforme a <a href="/privacidade">Política de Privacidade</a>.</span></label>
      <button className="button button-primary button-wide" type="submit" disabled={status === 'sending'}>{status === 'sending' ? 'Enviando apresentação...' : 'Apresentar minha empresa'}<ArrowRight /></button>
      <div aria-live="polite">
        {status === 'done' && <p className="form-success">Apresentação recebida. A equipe GLX avaliará a aderência e entrará em contato quando houver uma oportunidade compatível.</p>}
        {status === 'fallback' && <p className="form-success">O canal de parceiros está em configuração. Abrimos o WhatsApp para você concluir o contato com a GLX.</p>}
        {status === 'error' && <p className="form-error">Não foi possível enviar agora. Revise os campos ou fale com a GLX pelo WhatsApp.</p>}
      </div>
    </form>
  );
}
