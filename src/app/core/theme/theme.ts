import { Injectable, effect, signal } from '@angular/core';

export type Theme = 'light' | 'dark';
const STORAGE_KEY = 'portfolio.theme';

function readInitial(): Theme {
  if (typeof localStorage !== 'undefined') {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === 'light' || stored === 'dark') {
        return stored;
      }
    } catch {
      /* accès stockage refusé */
    }
  }
  if (
    typeof window !== 'undefined' &&
    typeof window.matchMedia === 'function' &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  ) {
    return 'dark';
  }
  return 'light';
}

@Injectable({ providedIn: 'root' })
export class ThemeService {
  readonly theme = signal<Theme>(readInitial());

  constructor() {
    effect(() => {
      const theme = this.theme();
      if (typeof document !== 'undefined') {
        document.documentElement.setAttribute('data-theme', theme);
        document
          .querySelector('meta[name="theme-color"]')
          ?.setAttribute('content', theme === 'dark' ? '#0f1e2e' : '#e9edf0');
      }
      try {
        localStorage.setItem(STORAGE_KEY, theme);
      } catch {
        /* ignore */
      }
    });
  }

  toggle(): void {
    this.theme.update((t) => (t === 'dark' ? 'light' : 'dark'));
  }
}
