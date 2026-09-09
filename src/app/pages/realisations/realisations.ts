import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CLIENT_PROJECTS, IDENTITY, PERSONAL_PROJECTS } from '../../data/portfolio.data';
import { ProjectCard } from '../../shared/project-card/project-card';

@Component({
  selector: 'app-realisations',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ProjectCard],
  templateUrl: './realisations.html',
  styleUrl: './realisations.scss',
})
export class Realisations {
  protected readonly identity = IDENTITY;
  protected readonly clients = CLIENT_PROJECTS;
  protected readonly personal = PERSONAL_PROJECTS;
}
