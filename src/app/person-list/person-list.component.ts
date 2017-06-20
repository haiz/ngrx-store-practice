import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PersonListComponent {
  @Input('people') people: any[];

  @Output() addGuest = new EventEmitter();
  @Output() removeGuest = new EventEmitter();
  @Output() toggleAttending = new EventEmitter();
  @Output() removePerson = new EventEmitter();
}
