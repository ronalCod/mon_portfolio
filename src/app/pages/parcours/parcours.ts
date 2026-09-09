import { ChangeDetectionStrategy, Component } from '@angular/core';
import { EXPERIENCES, FORMATIONS, LANGUAGES, TOOL_GROUPS } from '../../data/portfolio.data';
import { TimelineRow } from '../../shared/timeline-row/timeline-row';
import { FormationCard } from '../../shared/formation-card/formation-card';
import { LanguageBlock } from '../../shared/language-block/language-block';

@Component({
  selector: 'app-parcours',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TimelineRow, FormationCard, LanguageBlock],
  templateUrl: './parcours.html',
  styleUrl: './parcours.scss',
})
export class Parcours {
  protected readonly experiences = EXPERIENCES;
  protected readonly tools = TOOL_GROUPS;
  protected readonly formations = FORMATIONS;
  protected readonly languages = LANGUAGES;
}
