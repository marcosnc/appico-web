import { useEffect, useId, useRef, useState } from 'react';

export interface MobileNavLink {
  href: string;
  label: string;
}

export interface MobileNavProps {
  links: MobileNavLink[];
  openLabel: string;
  closeLabel: string;
  localeHref: string;
  localeLabel: string;
  languageLabel: string;
  otherLocale: string;
}

export default function MobileNav({
  links,
  openLabel,
  closeLabel,
  localeHref,
  localeLabel,
  languageLabel,
  otherLocale,
}: MobileNavProps) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };

    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';
    closeBtnRef.current?.focus();

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        className="inline-flex items-center justify-center rounded-sm border border-brand-navy/20 p-2 text-brand-navy transition-colors hover:border-brand-teal hover:text-brand-teal"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen(true)}
      >
        <span className="sr-only">{openLabel}</span>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M4 7h16M4 12h16M4 17h16"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </button>

      {open && (
        <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true">
          <button
            type="button"
            className="absolute inset-0 bg-brand-ink/40"
            aria-label={closeLabel}
            onClick={() => setOpen(false)}
          />
          <div
            id={panelId}
            className="absolute right-0 top-0 flex h-full w-[min(100%,20rem)] flex-col bg-surface shadow-xl"
          >
            <div className="flex items-center justify-between border-b border-brand-navy/10 px-4 py-3">
              <span className="font-display text-lg font-semibold text-brand-navy">Appico</span>
              <button
                ref={closeBtnRef}
                type="button"
                className="rounded-sm border border-brand-navy/20 p-2 text-brand-navy"
                onClick={() => setOpen(false)}
              >
                <span className="sr-only">{closeLabel}</span>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M6 6l12 12M18 6L6 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>
            <nav className="flex flex-1 flex-col gap-1 overflow-y-auto p-4" aria-label="Mobile">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-sm px-3 py-2.5 text-base font-medium text-brand-navy transition-colors hover:bg-surface-muted hover:text-brand-teal"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href={localeHref}
                className="mt-4 rounded-sm border border-brand-navy/20 px-3 py-2.5 text-sm font-semibold text-brand-navy"
                hreflang={otherLocale}
                lang={otherLocale}
                aria-label={languageLabel}
                onClick={() => setOpen(false)}
              >
                {localeLabel}
              </a>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
