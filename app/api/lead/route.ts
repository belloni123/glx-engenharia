const WHATSAPP_NUMBER = '5518997289448';

function clean(value: unknown, max = 180) { return String(value || '').replace(/[<>]/g, '').trim().slice(0, max); }

export async function POST(request: Request) {
  try {
    const body = await request.json() as Record<string, unknown>;
    const name = clean(body.name, 100); const phone = clean(body.phone, 30); const city = clean(body.city, 100); const interest = clean(body.interest, 140);
    if (!name || !phone || !city || !interest || body.consent !== 'yes') return Response.json({ error: 'Preencha os campos obrigatórios e aceite a política.' }, { status: 400 });
    const payload = { name, phone, city, interest, source: 'site-glx', createdAt: new Date().toISOString(), page: request.headers.get('referer') || '' };
    const webhook = process.env.CRM_WEBHOOK_URL;
    let forwarded = false;
    if (webhook) {
      const result = await fetch(webhook, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload), signal: AbortSignal.timeout(8000) });
      forwarded = result.ok;
      if (!result.ok) console.error('CRM webhook respondeu com status', result.status);
    }
    const message = `Olá, sou ${name}, de ${city}. Meu interesse é ${interest}. Acabei de preencher o formulário no site da GLX.`;
    return Response.json({ success: true, forwarded, whatsappUrl: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}` });
  } catch { return Response.json({ error: 'Não foi possível processar sua solicitação.' }, { status: 500 }); }
}
