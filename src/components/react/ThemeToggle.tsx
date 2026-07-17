import { useEffect, useState } from 'react';
import {
  applyTheme,
  persistTheme,
  resolveTheme,
  type ThemePreference,
} from '../../lib/theme';

export interface ThemeToggleProps {
  labelLight: string;
  labelDark: string;
}

export default function ThemeToggle({ labelLight, labelDark }: ThemeToggleProps) {
  const [theme, setTheme] = useState<ThemePreference>('light');
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const current = resolveTheme();
    applyTheme(current);
    setTheme(current);
    setReady(true);
  }, []);

  function toggle() {
    const next: ThemePreference = theme === 'dark' ? 'light' : 'dark';
    persistTheme(next);
    setTheme(next);
  }

  const isDark = theme === 'dark';
  const label = isDark ? labelLight : labelDark;

  return (
    <button
      type="button"
      onClick={toggle}
      className="inline-flex h-8 w-8 items-center justify-center rounded-sm border border-brand-navy/20 text-brand-navy transition-colors hover:border-brand-teal hover:text-brand-teal"
      aria-label={label}
      title={label}
      aria-pressed={ready ? isDark : undefined}
    >
      {/* Sun — shown in dark mode (action: switch to light) */}
      <svg
        className={isDark ? 'block' : 'hidden'}
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
        <path
          d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
      {/* Moon — shown in light mode (action: switch to dark) */}
      <svg
        className={isDark ? 'hidden' : 'block'}
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M21 14.5A8.5 8.5 0 1 1 9.5 3a7 7 0 0 0 11.5 11.5Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
