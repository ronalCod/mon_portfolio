import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Experience } from '../../data/portfolio.data';

@Component({
  selector: 'app-timeline-row',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @let e = item();
    <div class="row" [class.row--current]="e.current">
      <div class="mono when">
        <span class="dot" [class.dot--pulse]="e.current"></span>{{ e.period }}
      </div>
      <div class="body">
        <h3 class="title">{{ e.title }}</h3>
        <p class="desc">{{ e.description }}</p>
      </div>
    </div>
  `,
  styles: [
    `
      .row {
        display: grid;
        grid-template-columns: minmax(0, 190px) minmax(0, 1fr);
        gap: 8px 32px;
        padding: 26px 0;
        border-top: 1px solid var(--border);
      }
      .row:last-of-type {
        border-bottom: 1px solid var(--border);
      }
      .row--current {
        padding: 26px;
        margin-bottom: 12px;
        background: var(--surface);
        border: 1px solid var(--border);
        border-left: 4px solid var(--accent);
        border-radius: var(--radius-card);
      }
      .row--current + .row {
        border-top: 0;
      }
      .when {
        font-size: 13px;
        color: var(--ink-2);
        display: flex;
        align-items: baseline;
        gap: 10px;
      }
      .row--current .when {
        color: var(--ink);
        font-weight: 500;
      }
      .when .dot {
        background: var(--border);
        transform: translateY(-3px);
      }
      .row--current .when .dot {
        background: var(--accent);
      }
      .title {
        font-size: 20px;
        font-weight: 700;
        margin: 0 0 8px;
        line-height: 1.3;
      }
      .desc {
        font-size: 16px;
        line-height: 1.65;
        color: var(--ink-2);
        margin: 0;
        max-width: 62ch;
        text-wrap: pretty;
      }
    `,
  ],
})
export class TimelineRow {
  readonly item = input.required<Experience>();
}
