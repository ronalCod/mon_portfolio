import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { LanguageSkill } from '../../data/portfolio.data';

@Component({
  selector: 'app-language-block',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @let l = lang();
    <div class="lb">
      <div class="head">
        <span class="mono name">{{ l.name }}</span>
        <span class="mono level" [class.level--muted]="!l.levelAccent">{{ l.level }}</span>
      </div>
      <div class="gauge" [attr.aria-label]="l.filled + ' sur 5'">
        @for (seg of segments(); track $index) {
          <span class="seg" [class.seg--on]="seg"></span>
        }
      </div>
      <p class="usage">{{ l.usage }}</p>
    </div>
  `,
  styles: [
    `
      .lb {
        background: var(--surface);
        padding: 26px;
        height: 100%;
        transition: background 200ms var(--ease);
      }
      .lb:hover {
        background: var(--surface-2);
      }
      .head {
        display: flex;
        align-items: baseline;
        justify-content: space-between;
        gap: 12px;
        margin-bottom: 18px;
      }
      .name {
        font-size: 19px;
        font-weight: 700;
        letter-spacing: -0.01em;
      }
      .level {
        font-size: 12px;
        color: var(--accent);
      }
      .level--muted {
        color: var(--ink-2);
      }
      .gauge {
        display: flex;
        gap: 4px;
        margin-bottom: 14px;
      }
      .seg {
        flex: 1;
        height: 6px;
        border-radius: 999px;
        background: var(--border);
      }
      .seg--on {
        background: var(--accent);
      }
      .usage {
        font-size: 14px;
        line-height: 1.6;
        color: var(--ink-2);
        margin: 0;
      }
    `,
  ],
})
export class LanguageBlock {
  readonly lang = input.required<LanguageSkill>();

  protected readonly segments = computed(() => {
    const n = this.lang().filled;
    return Array.from({ length: 5 }, (_, i) => i < n);
  });
}
