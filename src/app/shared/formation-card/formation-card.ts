import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Formation } from '../../data/portfolio.data';

@Component({
  selector: 'app-formation-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @let f = item();
    <div class="fc card" [class.fc--current]="f.current">
      @if (f.current) {
        <div class="mono flag">
          <span class="dot dot--pulse"></span>en cours
        </div>
      } @else {
        <div class="mono period">{{ f.period }}</div>
      }
      <h3 class="title">{{ f.title }}</h3>
      <div class="school">{{ f.school }}</div>
      <p class="note">{{ f.note }}</p>
    </div>
  `,
  styles: [
    `
      .fc {
        padding: 26px;
        transition: transform 200ms var(--ease), box-shadow 200ms var(--ease);
      }
      .fc:hover {
        transform: translateY(-4px);
        box-shadow: var(--shadow-hover);
      }
      .fc--current {
        border-top: 4px solid var(--accent);
      }
      .flag {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 12px;
        color: var(--accent);
        margin-bottom: 12px;
      }
      .flag .dot {
        background: var(--accent);
      }
      .period {
        font-size: 12px;
        color: var(--ink-2);
        margin-bottom: 12px;
      }
      .title {
        font-size: 19px;
        font-weight: 700;
        line-height: 1.3;
        margin: 0 0 8px;
      }
      .school {
        font-size: 15px;
        color: var(--ink-2);
      }
      .note {
        font-size: 14px;
        line-height: 1.6;
        color: var(--ink-2);
        margin: 14px 0 0;
      }
    `,
  ],
})
export class FormationCard {
  readonly item = input.required<Formation>();
}
