const MAX_FILE_SIZE = 5 * 1024 * 1024;
const ALLOWED = new Set(['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']);

export async function POST(request: Request) {
  try {
    const data = await request.formData();
    const required = ['name', 'email', 'phone', 'city', 'area', 'experience', 'message'];
    if (required.some(key => !String(data.get(key) || '').trim()) || data.get('consent') !== 'yes') return Response.json({ error: 'Preencha os campos obrigatórios.' }, { status: 400 });
    const file = data.get('resume');
    if (!(file instanceof File) || file.size === 0) return Response.json({ error: 'Anexe seu currículo.' }, { status: 400 });
    if (file.size > MAX_FILE_SIZE || !ALLOWED.has(file.type)) return Response.json({ error: 'Use PDF, DOC ou DOCX com até 5 MB.' }, { status: 400 });
    const webhook = process.env.CAREERS_WEBHOOK_URL || process.env.CRM_WEBHOOK_URL;
    let forwarded = false;
    if (webhook) {
      data.set('source', 'site-glx-carreiras'); data.set('createdAt', new Date().toISOString());
      const result = await fetch(webhook, { method: 'POST', body: data, signal: AbortSignal.timeout(12000) });
      forwarded = result.ok;
      if (!result.ok) console.error('Webhook de carreiras respondeu com status', result.status);
    }
    const name = String(data.get('name') || '').trim(); const area = String(data.get('area') || '').trim();
    const message = `Olá, sou ${name}. Preenchi a candidatura para ${area} no site da GLX e gostaria de enviar meu currículo.`;
    return Response.json({ success: true, forwarded, whatsappUrl: `https://wa.me/5518997289448?text=${encodeURIComponent(message)}` });
  } catch { return Response.json({ error: 'Não foi possível processar a candidatura.' }, { status: 500 }); }
}
