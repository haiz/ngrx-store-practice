import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'party-stats',
  templateUrl: './party-stats.component.html',
  styleUrls: ['./party-stats.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PartyStatsComponent {
  @Input() invited;
  @Input() attending;
  @Input() guests;
}
