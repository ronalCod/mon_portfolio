import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { ThemeService } from './theme';

@Component({
  selector: 'app-theme-toggle',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <button
      type="button"
      class="toggle mono"
      (click)="theme.toggle()"
      [attr.aria-pressed]="isDark()"
      [attr.aria-label]="isDark() ? 'Passer au thème clair' : 'Passer au thème sombre'"
      [title]="isDark() ? 'Thème clair' : 'Thème sombre'"
    >
      @if (isDark()) {
        <svg viewBox="0 0 16 16" width="15" height="15" fill="none" aria-hidden="true">
          <circle cx="8" cy="8" r="3.4" stroke="currentColor" stroke-width="1.4" />
          <path
            d="M8 1.5v1.7M8 12.8v1.7M1.5 8h1.7M12.8 8h1.7M3.4 3.4l1.2 1.2M11.4 11.4l1.2 1.2M12.6 3.4l-1.2 1.2M4.6 11.4l-1.2 1.2"
            stroke="currentColor"
            stroke-width="1.4"
            stroke-linecap="round"
          />
        </svg>
        <span>clair</span>
      } @else {
        <svg viewBox="0 0 16 16" width="15" height="15" fill="none" aria-hidden="true">
          <path
            d="M13.5 9.6A5.6 5.6 0 0 1 6.4 2.5a5.6 5.6 0 1 0 7.1 7.1Z"
            stroke="currentColor"
            stroke-width="1.4"
            stroke-linejoin="round"
          />
        </svg>
        <span>sombre</span>
      }
    </button>
  `,
  styles: [
    `
      .toggle {
        display: inline-flex;
        align-items: center;
        gap: 7px;
        font-size: 13px;
        padding: 7px 13px;
        border-radius: 999px;
        border: 1px solid var(--border-strong);
        color: var(--ink-2);
        background: transparent;
        transition: background 200ms var(--ease), color 200ms var(--ease),
          border-color 200ms var(--ease);
      }
      .toggle:hover {
        color: var(--ink);
        background: var(--surface-2);
      }
      .toggle svg {
        display: block;
      }
    `,
  ],
})
export class ThemeToggle {
  protected readonly theme = inject(ThemeService);
  protected readonly isDark = computed(() => this.theme.theme() === 'dark');
}
