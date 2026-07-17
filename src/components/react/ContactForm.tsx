import { useState, type FormEvent } from 'react';
import type { BusinessLineSlug } from '../../i18n/paths';

const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';

export interface ContactFormLabels {
  name: string;
  email: string;
  company: string;
  message: string;
  line: string;
  linePlaceholder: string;
  submit: string;
  sending: string;
  success: string;
  error: string;
  required: string;
  invalidEmail: string;
}

export interface ContactFormLineOption {
  value: BusinessLineSlug;
  label: string;
}

export interface ContactFormProps {
  labels: ContactFormLabels;
  lines: ContactFormLineOption[];
  /** Pre-select line from ?linea= / ?line= query */
  initialLine?: string;
  /** Web3Forms access key (safe to expose in the client) */
  accessKey: string;
  /** Email subject line */
  subject?: string;
}

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export default function ContactForm({
  labels,
  lines,
  initialLine = '',
  accessKey,
  subject = 'Nuevo mensaje desde appico.net',
}: ContactFormProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');
  const [line, setLine] = useState(initialLine);
  const [botcheck, setBotcheck] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  function validate(): boolean {
    const next: Record<string, string> = {};
    if (!name.trim()) next.name = labels.required;
    if (!email.trim()) next.email = labels.required;
    else if (!isValidEmail(email.trim())) next.email = labels.invalidEmail;
    if (!company.trim()) next.company = labels.required;
    if (!message.trim()) next.message = labels.required;
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!validate()) return;

    // Honeypot: bots that fill hidden fields are dropped silently.
    if (botcheck) {
      setStatus('success');
      return;
    }

    if (!accessKey) {
      console.error('[ContactForm] Missing Web3Forms access key.');
      setStatus('error');
      return;
    }

    setStatus('sending');
    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject,
          from_name: 'Appico web',
          name: name.trim(),
          email: email.trim(),
          company: company.trim(),
          message: message.trim(),
          line: line || '—',
          botcheck: false,
        }),
      });

      const result = (await response.json()) as { success?: boolean };
      if (!response.ok || !result.success) throw new Error('Request failed');

      setStatus('success');
      setName('');
      setEmail('');
      setCompany('');
      setMessage('');
      setLine('');
    } catch {
      setStatus('error');
    }
  }

  const fieldClass =
    'mt-1.5 w-full rounded-sm border border-brand-navy/20 bg-surface px-3 py-2.5 text-ink outline-none transition-colors focus:border-brand-teal';
  const labelClass = 'block text-sm font-medium text-brand-navy';

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      {/* Web3Forms spam honeypot — must stay hidden */}
      <input
        type="checkbox"
        name="botcheck"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        checked={botcheck}
        onChange={(e) => setBotcheck(e.target.checked)}
        aria-hidden="true"
      />

      <div>
        <label htmlFor="contact-name" className={labelClass}>
          {labels.name} <span className="text-brand-teal">*</span>
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          className={fieldClass}
          value={name}
          onChange={(e) => setName(e.target.value)}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? 'contact-name-error' : undefined}
        />
        {errors.name && (
          <p id="contact-name-error" className="mt-1 text-sm text-danger" role="alert">
            {errors.name}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="contact-email" className={labelClass}>
          {labels.email} <span className="text-brand-teal">*</span>
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          className={fieldClass}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? 'contact-email-error' : undefined}
        />
        {errors.email && (
          <p id="contact-email-error" className="mt-1 text-sm text-danger" role="alert">
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="contact-company" className={labelClass}>
          {labels.company} <span className="text-brand-teal">*</span>
        </label>
        <input
          id="contact-company"
          name="company"
          type="text"
          autoComplete="organization"
          className={fieldClass}
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          aria-invalid={Boolean(errors.company)}
          aria-describedby={errors.company ? 'contact-company-error' : undefined}
        />
        {errors.company && (
          <p id="contact-company-error" className="mt-1 text-sm text-danger" role="alert">
            {errors.company}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="contact-line" className={labelClass}>
          {labels.line}
        </label>
        <select
          id="contact-line"
          name="line"
          className={fieldClass}
          value={line}
          onChange={(e) => setLine(e.target.value)}
        >
          <option value="">{labels.linePlaceholder}</option>
          {lines.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="contact-message" className={labelClass}>
          {labels.message} <span className="text-brand-teal">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          className={fieldClass}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? 'contact-message-error' : undefined}
        />
        {errors.message && (
          <p id="contact-message-error" className="mt-1 text-sm text-danger" role="alert">
            {errors.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="inline-flex items-center justify-center rounded-sm bg-brand-navy px-5 py-2.5 text-sm font-semibold text-surface transition-colors hover:bg-brand-teal disabled:opacity-60"
      >
        {status === 'sending' ? labels.sending : labels.submit}
      </button>

      {status === 'success' && (
        <p className="text-sm text-brand-teal" role="status">
          {labels.success}
        </p>
      )}
      {status === 'error' && (
        <p className="text-sm text-danger" role="alert">
          {labels.error}
        </p>
      )}
    </form>
  );
}
