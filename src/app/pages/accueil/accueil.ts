import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HERO, IDENTITY, PARCOURS_COLUMNS, SITES, STATS } from '../../data/portfolio.data';

@Component({
  selector: 'app-accueil',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
  templateUrl: './accueil.html',
  styleUrl: './accueil.scss',
})
export class Accueil {
  protected readonly hero = HERO;
  protected readonly identity = IDENTITY;
  protected readonly stats = STATS;
  protected readonly sites = SITES;
  protected readonly columns = PARCOURS_COLUMNS;
}
