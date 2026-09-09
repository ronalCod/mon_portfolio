import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ClientProject } from '../../data/portfolio.data';

@Component({
  selector: 'app-project-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @let p = project();
    <article class="proj card">
      <span class="accent-bar" aria-hidden="true"></span>
      <h3 class="mono name">{{ p.name }}</h3>
      <div class="mono kind">{{ p.kind }}</div>
      <p class="desc">{{ p.description }}</p>
      <p class="role">{{ p.role }}</p>
      <a class="mono link" [href]="p.url" target="_blank" rel="noopener">{{ p.urlLabel }}</a>
    </article>
  `,
  styles: [
    `
      .proj {
        position: relative;
        padding: 28px;
        padding-left: 32px;
        transition: transform 200ms var(--ease), border-color 200ms var(--ease),
          box-shadow 200ms var(--ease);
      }
      .proj:hover {
        transform: translateY(-4px);
        border-color: var(--border-strong);
        box-shadow: var(--shadow-hover);
      }
      .accent-bar {
        position: absolute;
        left: 0;
        top: 24px;
        bottom: 24px;
        width: 4px;
        border-radius: 999px;
        background: var(--accent);
      }
      .name {
        font-size: 20px;
        font-weight: 700;
        letter-spacing: -0.01em;
        margin: 0 0 4px;
      }
      .kind {
        font-size: 12px;
        color: var(--ink-2);
        margin-bottom: 14px;
      }
      .desc {
        font-size: 16px;
        line-height: 1.6;
        margin: 0 0 10px;
        text-wrap: pretty;
      }
      .role {
        font-size: 15px;
        line-height: 1.6;
        color: var(--ink-2);
        margin: 0 0 20px;
        text-wrap: pretty;
      }
      .link {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        font-size: 13px;
        color: var(--ink);
        border-bottom: 1px solid var(--border);
        padding-bottom: 2px;
        transition: color 200ms var(--ease), border-color 200ms var(--ease);
      }
      .link:hover {
        color: var(--accent-strong);
        border-color: var(--accent);
        text-decoration: none;
      }
    `,
  ],
})
export class ProjectCard {
  readonly project = input.required<ClientProject>();
}
