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
        >Accueil</a
      >
      <a routerLink="/realisations" routerLinkActive="is-active" class="pill mono">Réalisations</a>
      <a routerLink="/parcours" routerLinkActive="is-active" class="pill mono">Parcours</a>
      <a routerLink="/contact" routerLinkActive="is-active" class="pill mono">Contact</a>
    </nav>
  `,
  styles: [
    `
      :host {
        display: block;
      }
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
        white-space: nowrap;
        transition: background 200ms var(--ease), color 200ms var(--ease);
      }

      /* Mobile : les 4 entrées tiennent sur une seule ligne */
      @media (max-width: 560px) {
        .nav {
          flex-wrap: nowrap;
          width: 100%;
          justify-content: space-between;
          gap: 3px;
        }
        .pill {
          font-size: 11px;
          padding: 7px 9px;
        }
      }
      @media (max-width: 340px) {
        .pill {
          font-size: 10px;
          padding: 6px 7px;
          letter-spacing: -0.02em;
        }
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
