import { ArrowRight } from "lucide-react";

export function ContactChannels({
  email,
  subject,
}: {
  email: string;
  subject: string;
}) {
  return (
    <div className="contact-channels">
      <a
        className="button button-primary button-wide"
        href={`https://wa.me/5518997289448?text=${encodeURIComponent(`Olá! Vim pelo site da GLX. Assunto: ${subject}.`)}`}
        target="_blank"
        rel="noreferrer"
      >
        Conversar pelo WhatsApp <ArrowRight aria-hidden="true" />
      </a>
      <a
        className="button button-primary button-wide"
        href={`mailto:${email}?subject=${encodeURIComponent(subject)}`}
      >
        Enviar e-mail <ArrowRight aria-hidden="true" />
      </a>
      <a href={`mailto:${email}`}>{email}</a>
      <a
        className="button button-primary button-wide"
        href="tel:+5518997289448"
      >
        Ligar: (18) 99728-9448 <ArrowRight aria-hidden="true" />
      </a>
    </div>
  );
}
