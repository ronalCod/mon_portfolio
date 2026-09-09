import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <nav class="nav" aria-label="Navigation principale">
      <a
        routerLink="/"
        routerLinkActive="is-active"
        [routerLinkActiveOptions]="{ exact: true }"
        class="pill mono"
        >accueil</a
      >
      <a routerLink="/realisations" routerLinkActive="is-active" class="pill mono">réalisations</a>
      <a routerLink="/parcours" routerLinkActive="is-active" class="pill mono">parcours</a>
      <a routerLink="/contact" routerLinkActive="is-active" class="pill mono">contact</a>
    </nav>
  `,
  styles: [
    `
      .nav {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
      }
      .pill {
        font-size: 13px;
        font-weight: 400;
        padding: 8px 14px;
        border-radius: 999px;
        color: var(--ink-2);
        background: transparent;
        transition: background 200ms var(--ease), color 200ms var(--ease);
      }
      .pill:hover {
        color: var(--ink);
        text-decoration: none;
      }
      .pill.is-active {
        background: var(--ink);
        color: var(--bg);
        font-weight: 500;
      }
      .pill.is-active:hover {
        color: var(--bg);
      }
    `,
  ],
})
export class Nav {}
