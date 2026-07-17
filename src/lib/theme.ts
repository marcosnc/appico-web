/** Theme preference: explicit choice or follow system until the user toggles. */
export const THEME_STORAGE_KEY = 'appico-theme';

export type ThemePreference = 'light' | 'dark';

export function getSystemTheme(): ThemePreference {
  if (typeof window === 'undefined') return 'light';
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export function readStoredTheme(): ThemePreference | null {
  try {
    const value = localStorage.getItem(THEME_STORAGE_KEY);
    if (value === 'light' || value === 'dark') return value;
  } catch {
    /* private mode / blocked storage */
  }
  return null;
}

export function resolveTheme(stored: ThemePreference | null = readStoredTheme()): ThemePreference {
  return stored ?? getSystemTheme();
}

export function applyTheme(theme: ThemePreference): void {
  document.documentElement.classList.toggle('dark', theme === 'dark');
  document.documentElement.style.colorScheme = theme;
}

export function persistTheme(theme: ThemePreference): void {
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    /* ignore */
  }
  applyTheme(theme);
}
