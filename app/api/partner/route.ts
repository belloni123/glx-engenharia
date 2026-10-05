const MAX_FILE_SIZE = 8 * 1024 * 1024;
const ALLOWED_TYPES = new Set(['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']);
const ALLOWED_EXTENSIONS = ['.pdf', '.doc', '.docx'];

function value(data: FormData, key: string, maxLength = 2000) {
  return String(data.get(key) || '').trim().slice(0, maxLength);
}

export async function POST(request: Request) {
  try {
    const data = await request.formData();
    const fieldLimits: Record<string, number> = { company: 160, cnpj: 24, contactName: 160, role: 120, email: 320, phone: 32, city: 160, area: 160, website: 500, serviceRegion: 300, message: 4000 };
    for (const [key, limit] of Object.entries(fieldLimits)) data.set(key, value(data, key, limit));

    const required = ['company', 'cnpj', 'contactName', 'role', 'email', 'phone', 'city', 'area', 'serviceRegion', 'message'];
    if (required.some((key) => !value(data, key)) || data.get('consent') !== 'yes') {
      return Response.json({ error: 'Preencha os campos obrigatórios.' }, { status: 400 });
    }

    const email = value(data, 'email', 320);
    if (!/^\S+@\S+\.\S+$/.test(email)) return Response.json({ error: 'Informe um e-mail válido.' }, { status: 400 });
    if (value(data, 'cnpj', 24).replace(/\D/g, '').length !== 14) return Response.json({ error: 'Informe um CNPJ válido.' }, { status: 400 });
    if (value(data, 'phone', 32).replace(/\D/g, '').length < 10) return Response.json({ error: 'Informe um telefone válido.' }, { status: 400 });

    const file = data.get('presentation');
    if (file instanceof File && file.size > 0) {
      const validExtension = ALLOWED_EXTENSIONS.some((extension) => file.name.toLowerCase().endsWith(extension));
      if (file.size > MAX_FILE_SIZE || !ALLOWED_TYPES.has(file.type) || !validExtension) {
        return Response.json({ error: 'Use PDF, DOC ou DOCX com até 8 MB.' }, { status: 400 });
      }
    } else {
      data.delete('presentation');
    }

    data.set('source', 'site-glx-parcerias');
    data.set('createdAt', new Date().toISOString());
    const webhook = process.env.PARTNERS_WEBHOOK_URL || process.env.CRM_WEBHOOK_URL;
    let forwarded = false;

    if (webhook) {
      try {
        const result = await fetch(webhook, { method: 'POST', body: data, signal: AbortSignal.timeout(12000) });
        forwarded = result.ok;
        if (!result.ok) console.error('Webhook de parceiros respondeu com status', result.status);
      } catch (error) {
        console.error('Não foi possível encaminhar o cadastro de parceiro', error);
      }
    }

    const company = value(data, 'company', 160);
    const contactName = value(data, 'contactName', 160);
    const area = value(data, 'area', 160);
    const message = `Olá, sou ${contactName}, da empresa ${company}. Preenchi o cadastro de parceiros da GLX na área de ${area} e gostaria de apresentar nosso trabalho.`;

    return Response.json({ success: true, forwarded, whatsappUrl: `https://wa.me/5518997289448?text=${encodeURIComponent(message)}` });
  } catch {
    return Response.json({ error: 'Não foi possível processar a apresentação.' }, { status: 500 });
  }
}
