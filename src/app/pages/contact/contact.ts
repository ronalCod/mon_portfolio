import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IDENTITY, SITE_CONFIG } from '../../data/portfolio.data';

@Component({
  selector: 'app-contact',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  protected readonly identity = IDENTITY;
  protected readonly showPhone = SITE_CONFIG.showPhone;
}
